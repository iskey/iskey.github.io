---
title: 单机minikube安装
date: 2019-05-30 22:51:48 +0800
comments: true
tags:
  - k8s
---
# 单机minikube安装

ubuntu环境，单机安装minikube.

## 安装kubectl
要安装minikube需要先安装kubectl
下载后，把kubectl的执行文件拷贝到本地的PATH目录

---
## 安装minikube
下载minikube,并拷贝到本地的PATH目录
```bash
curl -Lo minikube http://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/releases/v0.25.2/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
```
也可以自己构建(`需要本地已经安装配置好 Golang 开发环境和Docker引擎`):
```bash
git clone https://github.com/AliyunContainerService/minikube
cd minikube
git checkout aliyun-v0.25.0
make
sudo cp out/minikube /usr/local/bin/
```

## 启动minikube

缺省Minikube使用VirtualBox驱动来创建Kubernetes本地环境
```bash
minikube start --registry-mirror=https://registry.docker-cn.com
```
支持不同的Kubernetes版本

## 安装Kubernetes v1.12.1
```bash
minikube start --registry-mirror=https://registry.docker-cn.com --kubernetes-version v1.12.1
```
## 安装Kubernetes v1.11.3
```bash
minikube start --registry-mirror=https://registry.docker-cn.com --kubernetes-version v1.11.3
```
不使用virtualbox启动

```bash
minikube start --registry-mirror=https://registry.docker-cn.com --kubernetes-version v1.12.1 --vm-driver=none
kubectl get pods --all-namespaces 
NAMESPACE NAME READY STATUS RESTARTS AGE 
kube-system kube-addon-manager-minikube 1/1 Running 0 2h 
kube-system kube-dns-910330662-pkvj6 3/3 Running 0 2h
kube-system kubernetes-dashboard-mg5jt 1/1 Running 0 2h
```

## 打开Kubernetes控制台

```bash
minikube dashboard
```

[引用](https://yq.aliyun.com/articles/221687)