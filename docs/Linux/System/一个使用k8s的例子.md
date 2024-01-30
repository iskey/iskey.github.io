---
title: 一个使用k8s的例子
date: 2019-07-07 15:32:37 +0000
comments: true
tags:
  - k8s
---

# 一个使用k8s的例子

在使用kubernetes之前，最好需要知道一些docker的基本指令，这样对整个过程的理解会更深刻一些，这是我第一次使用实际操作kubernetes，基本上是参照网上的教程操作的，这里加上一些自己的理解记录一下。
本实验基于minikube。

## docker命令基本用法

首先用docker启动一个nginx服务器，命令如下:

```bash
docker container run \
-d \
-p 127.0.0.2:8080:80 \
--rm \
--name mynginx \
nginx
```

各参数的含义如下：
```bash
-d：在后台运行
-p ：容器的80端口映射到127.0.0.2:8080
--rm：容器停止运行后，自动删除容器文件
--name：容器的名字为mynginx
```

容器启动成功后，就可以通过curl http://127.0.0.2:8080来访问nginx的默认页面了。

这里有个疑问，那127.0.0.2的地址在哪里呢？ 秘密就在iptables的规则列表里

```bash
# iptables -S -t nat
-A OUTPUT ! -d 127.0.0.0/8 -m addrtype --dst-type LOCAL -j DOCKER
-A DOCKER -d 127.0.0.2/32 ! -i docker0 -p tcp -m tcp --dport 8080 -j DNAT --to-destination 172.17.0.7:80
```
目的地址是127网段的数据包被重定向到了DOCKER链表，DOCKER链表里把目的是127.0.0.2地址的报文发到了172.17.0.7:80端口，通过这两条规则，我们就能通过curl命令直接访问nginx服务器的80端口了。
第二条iptables规则有一个条件很有意思`! -i docker0`要求不是从docker0接口进来的包，docker0是个虚拟网桥设备，所有的容器都被挂在这个桥设备下，也就是说如果是容器之间互相访问的包，不应该被重定向到172.17.0.7这个地址上。

小提示：我们可以通过--volume命令把本地的文件目录映射到容器内

```bash
docker container run \
-d \
-p 127.0.0.2:8080:80 \
--rm \
--name mynginx \
--volume "$PWD/html":/usr/share/nginx/html \
nginx
```

#### 使用kubernetes创建nginx服务器集群

新建一个部署配置文件，内容如下：

- deployment.yaml文件

```yaml
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3 # tells deployment to run 2 pods matching the template
  template: # create pods using pod definition in this template
    metadata:
      # unlike pod-nginx.yaml, the name is not included in the meta data as a unique name is
      # generated from the deployment name
      labels:
        app: iskey_nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
```

这个配置文件的意思是要创建3个POD副本，每个副本是以nginx:1.7.9的镜像创建的容器，容器的服务端口是80

```bash
# kubectl create -f deployment.yaml
```

查看一下服务状态,可以看到三个副本已经都起来了。

```bash
# kubectl get pods -o wide -l app=nginx
NAME                                READY   STATUS    RESTARTS   AGE   IP           NODE
nginx-deployment-75675f5897-27hs9   1/1     Running   0          1d    172.17.0.5   ecs-xxx
nginx-deployment-75675f5897-5trcf   1/1     Running   0          1d    172.17.0.6   ecs-xxx
nginx-deployment-79cb98c794-7whjg   1/1     Running   0          21h   172.17.0.4   ecs-xxx~
```

#### 创建Service服务来访问nginx集群

我看可以通过这三个IP地址来分别方位三个副本上的nginx服务，但是这里的地址是随机的，而且如果服务故障重启了，kubernetes会重新拉起一个POD，这时地址就又变化了，如何使用这几个副本的服务呢，kubernetes提供了一种类型为Service的对象，创建如下的service.yaml文件：

- service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-nginx
spec:
  ports:
  - port: 8125
    protocol: TCP
    targetPort: 80
  selector:
    app: iskey_nginx
```

该配置文件将创建一个名为‘my-nginx’的Service对象，他开放了端口8125，往该端口发送的请求将被路由到端口为80的，且标签具有"app=iskey_nginx"的Pod上。这个Service将被指派一个IP地址（通常称为'Cluester IP'），通常我们的说法是该请求会被路由到一个名称为‘my-nginx’的Endpoints对象上，由该Endpoints对象来负责负载均衡，并路由到实际的Pod的服务端口80上。

创建命令如下：

```bash
# kubectl create -f service.yaml
```

可以看到创建了一个Service对象

```bash
# kubectl get services -o wide
NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE   SELECTOR
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP    2d    <none>
my-nginx     ClusterIP   10.97.126.137   <none>        8125/TCP   18h   app=nginx
```

#### Service和Endpoints对象

在使用如上命令文件创建Service的同时，也创建了一个name与Service相同的Endpoints对象，Endpoints对象与Service通过名字关联

```bash
# kubectl get endpoints -o wide
NAME         ENDPOINTS                                   AGE
kubernetes   192.168.0.29:8443                           2d
my-nginx     172.17.0.4:80,172.17.0.5:80,172.17.0.6:80   18h
```

思考：如果Service和Endpoints可以通过名字进行管理，就可以灵活的自己分开创建Service和Endpoints，而不是通过Service的selector字段来自动关联Pods。比如我们外部有一个mysql集群，我们需要创建一个服务把他们发布出去，这时候就需要手动创建Service和Endpoints了。如下所示：

- mysql-service.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: mysql-production
spec:
  ports:
    - port: 3306
```

- mysql-endpoints.yaml
```yaml
kind: Endpoints
apiVersion: v1
metadata:
  name: mysql-production
  namespace: default
subsets:
  - addresses:
      - ip: 192.168.1.25
    ports:
      - port: 3306
```

#### Service服务iptables原理

另外一个问题是，Service如何提供负载均衡的呢？答案还是在iptables的链表里

```bash
# iptables -S -t nat
-A KUBE-SVC-BEPXDJBUHFCSYIC3 -m comment --comment "default/my-nginx:" -m statistic --mode random --probability 0.33332999982 -j KUBE-SEP-DYSISBZG5TN7BHVN
-A KUBE-SVC-BEPXDJBUHFCSYIC3 -m comment --comment "default/my-nginx:" -m statistic --mode random --probability 0.50000000000 -j KUBE-SEP-BLX3X6UTIG6UGCA2
-A KUBE-SVC-BEPXDJBUHFCSYIC3 -m comment --comment "default/my-nginx:" -j KUBE-SEP-J5WBW7HEOGAHN6ZG
-A KUBE-SEP-BLX3X6UTIG6UGCA2 -s 172.17.0.5/32 -m comment --comment "default/my-nginx:" -j KUBE-MARK-MASQ
-A KUBE-SEP-BLX3X6UTIG6UGCA2 -p tcp -m comment --comment "default/my-nginx:" -m tcp -j DNAT --to-destination 172.17.0.5:80
-A KUBE-SEP-DYSISBZG5TN7BHVN -s 172.17.0.4/32 -m comment --comment "default/my-nginx:" -j KUBE-MARK-MASQ
-A KUBE-SEP-DYSISBZG5TN7BHVN -p tcp -m comment --comment "default/my-nginx:" -m tcp -j DNAT --to-destination 172.17.0.4:80
-A KUBE-SEP-J5WBW7HEOGAHN6ZG -s 172.17.0.6/32 -m comment --comment "default/my-nginx:" -j KUBE-MARK-MASQ
-A KUBE-SEP-J5WBW7HEOGAHN6ZG -p tcp -m comment --comment "default/my-nginx:" -m tcp -j DNAT --to-destination 172.17.0.6:80
```

通过iptables的statistic模块，--mode random --probability ，按照如下算法被路由到3个endpoints

```bash
1th endpoint: 1/3
2th endpoint: 2/3 * 1/2 = 1/3
3th endpoint: 2/3 * 1/2 * 1 = 1/3
```

可见，每个endpoint都承担了3/1的访问请求。

但是有些情况下，可能希望来自于某一个客户端的请求都落在某一个特定的endpoint上，这时候就不能使用默认的负载均衡策略，这时候可以通过sessionAffinity属性来把来自同一个Client的请求亲和到同一个服务器，配置如下：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-nginx
  labels:
    app: nginx
spec:
  ports:
  - port: 8125
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  sessionAffinity: ClientIP
```

当前仅支持ClientIP和None两个选项：

```bash
kubectl explain service.spec.sessionAffinity
KIND:     Service
VERSION:  v1

FIELD:    sessionAffinity <string>

DESCRIPTION:
     Supports "ClientIP" and "None". Used to maintain session affinity. Enable
     client IP based session affinity. Must be ClientIP or None. Defaults to
     None. More info:
     https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
```

##### Service服务userspace原理

此模式下，kube-proxy进程从服务(Kubernetes master)进程那边拿到Service和Endpoint对象的变化。对每一个Service, 它在本地打开一个port(随机选择)。任何连接这个本地port的请求都会转到backend后的随机一个pod，service中的字段SessionAffinity决定了使用backend的哪个pod。最后在本地建立一些iptables规则，这样访问service的cluster ip以及对应的port时，就能将请求映射到后端的pod中。

##### Service服务iptables原理

此模式下，kube-proxy进程从服务(Kubernetes master)进程那边拿到Service和Endpoint对象的变化。为每个Service创建一个iptables规则，把访问Service的Cluster IP和端口的流量重定向到后端Pod中的一个。为每个选择后端Pod的Endpoints对象都创建iptables规则。

TIP:userspace的方式和iptables方式不同点在于，userspace的模式是外部的服务会被重定向到kube-proxy，然后由kube-proxy重定向到后端的POD，而iptables的重定向请求是不需要kube-proxy参与的，完全由iptables规则链来处理。

#### 服务发现(Discovering services)

Kubernetes支持两种方式来发现一个Service，环境变量和DNS。

- 环境变量

POD被创建时，当前环境所有的Service环境变量都会被注入到新建的POD中

```bash
/# env
HOSTNAME=nginx-new-7fb6bcff7f-dkvrc
KUBERNETES_PORT_443_TCP_PORT=443
KUBERNETES_PORT=tcp://10.96.0.1:443
TERM=xterm
MY_NGINX_SERVICE_PORT=8125
KUBERNETES_SERVICE_PORT=443
MY_NGINX_PORT_8125_TCP=tcp://10.97.126.137:8125
KUBERNETES_SERVICE_HOST=10.96.0.1
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
PWD=/
NGINX_VERSION=1.7.9-1~wheezy
MY_NGINX_PORT=tcp://10.97.126.137:8125
MY_NGINX_PORT_8125_TCP_ADDR=10.97.126.137
SHLVL=1
HOME=/root
KUBERNETES_PORT_443_TCP_PROTO=tcp
KUBERNETES_SERVICE_PORT_HTTPS=443
MY_NGINX_PORT_8125_TCP_PORT=8125
KUBERNETES_PORT_443_TCP_ADDR=10.96.0.1
KUBERNETES_PORT_443_TCP=tcp://10.96.0.1:443
MY_NGINX_SERVICE_HOST=10.97.126.137
MY_NGINX_PORT_8125_TCP_PROTO=tcp
_=/usr/bin/env
```

- DNS

DNS server通过kubernetes api server来观测是否有新service建立，并为其建立对应的dns记录。如果集群已经enable DNS，那么pod可以自动对service做name解析。
比如说我们在Kubernetes 名字空间”my-ns”中有个叫my-service的服务，DNS服务会创建一条”my-service.my-ns”的DNS记录。同在这个命名空间的Pod就可以通过”my-service”来得到这个Service分配到的Cluster IP，在其它命名空间的Pod则可以用全限定名”my-service.my-ns”来获得这个Service的地址