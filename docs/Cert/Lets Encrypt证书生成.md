---
date: 2024-01-29 19:48
title: Let's Encrypt证书生成
authors: Iskey
tags:
  - cert
---

Let's Encrypt是一个非常不错的域名证书机构，致力于普及https，现在早已能够签发泛域名证书（俗称“野卡”），而且还是免费的，要知道其它机构的泛域名证书可贵的很。

下面就简单介绍一下如何申请Let's Encrypt证书。

也可以参考官方说明：https://github.com/Neilpang/acme.sh。

## 安装acme.sh

在Linux下在线安装脚本，使用以下命令

```bash
curl https://get.acme.sh | sh -s email=my@example.com 
```

或者：

```bash
wget -O - https://get.acme.sh | sh -s email=my@example.com 
```

或者git安装：

```bash
git clone --depth 1 https://github.com/acmesh-official/acme.sh.git
cd acme.sh
./acme.sh --install -m my@example.com 
```

在这一步安装过程中，完成了3个任务：

- 拷贝sh脚本到~/.acme.sh/

- 创建alias别名acme.sh=~/.acme.sh/acme.sh

如果没有自动创建别名（执行acme.sh，提示command not found），可以使用以下命令自行创建：

```bash
alias acme.sh='/root/.acme.sh/acme.sh' 
```

- 启动定时器，并加入到定时任务

其中定时任务可以通过“crontab -l”命令查看到，若没有，也可以自行添加，定时任务如下:

```bash
0 0 * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null 
```

如果不想使用默认安装，可以使用高级方式安装，在此安装方式下，可以指定安装目录等相关内容，具有一定灵活性，具体如下：

```bash
git clone --depth 1 https://github.com/acmesh-official/acme.sh.git
cd acme.sh
./acme.sh --install \
--home ~/myacme \
--config-home ~/myacme/data \
--cert-home ~/mycerts \
--accountemail "my@example.com" \
--accountkey ~/myaccount.key \
--accountconf ~/myaccount.conf \
--useragent "this is my client." 
```

参数说明：

--home：指定acme.sh安装的目录，默认是安装到 ~/.acme.sh。

--config-home：指定一个可写的文件夹，acme.sh将在其中写入所有文件（包括cert / keys，configs）。 默认情况下，它位于 --home。

--cert-home：指定一个目录，用于保存颁发的证书。 默认情况下，它保存在 --config-home。

--accountemail：指定一个用于注册Let's Encrypt帐户的电子邮箱，通过此电子邮件将收到续订等通知。

--accountkey：指定一个保存您帐户私钥的文件。 默认情况下，这个文件保存在 --config-home。

--accountconf：指定一个帐户配置文件。 默认情况下，这个文件保存在 --config-home。

--user-agent：发送给Let's Encrypt的user-agent请求信息。

从上面可以看出很多默认选项，比如--config-home的路径默认选项是--home，--cert-home的默认路径是--config-home，所以可以充分使用默认选项，这样可以更简单一点。

举个例子，我要将acme.sh安装到/data/myacme目录，并将签发的证书保存到/data/SSL目录，使用如下命令即可：

```bash
git clone https://github.com/acmesh-official/acme.sh.git
cd acme.sh
./acme.sh --install \
--home /usr/local/acme.sh \
--cert-home /data/SSL
```

注意：现在Let's Encrypt自V3以后，开始使用ZeroSSL的CA证书，在申请域名证书之前需要先注册（详见：https://github.com/acmesh-official/acme.sh/wiki/ZeroSSL.com-CA），请使用如下 命令：

```bash
acme.sh --register-account -m my@example.com 
```

在未注册时申请域名证书，也会有相应的提示，按提示的命令注册即可。


## 申请证书

### http/tls方式申请域名证书

安装好acme.sh之后，就可以使用acme.sh的http方式或TLS方式申请单域名或多域名证书（一个根域名或多个二级域名）。注意：此方式不支持申请泛域名证书。

#### webroot模式申请证书

如果你已经在服务器上建立了网站，acme.sh也安装到了此服务器，此时若需要为此网站的域名来申请证书，可以通过webroot的方式来验证申请，命令如下：

```bash
acme.sh --issue -d example.com -d www.example.com -w /home/wwwroot/example.com 
```

其中“/home/wwwroot/example.com”是你网站根目录，要确保能正常访问。www.example.com和example.com为需要申请证书的域名。申请完成后，域名证书存放在“~/.acme.sh/example.com/”中。

注意：此申请方式在申请过程中，必需要指定域名，也必需并指定域名所在的网站根目录，acme.sh在执行过程中会在网站根目录生成一个隐藏文件夹“.well-known”，并在里面全自动的生成验证文件， 然后自动完成验证， 最后会也会自动的删除验证文件， 整个过程没有任何副作用。

#### 独立模式申请证书

如果服务器上没有启用Web服务，仅安装了acme.sh，则可以使用独立模式申请域名证书，此时需要将你要申请证书的**域名做A记录到这台服务器的IP，并且要安装socat**，acme.sh会模拟web验证方式来签发证书。

#### 使用80端口签发证书

```bash
acme.sh --issue -d example.com -d www.example.com --standalone 
```

如果服务器上没有开放80端口，但开放了其它端口，如8080，则可以使用--httpport指定端口：

```bash
acme.sh --issue -d example.com -d www.example.com --standalone --httpport 8080 
```

#### tls独立模式申请证书

此种方式也需要将你要申请证书的**域名做A记录到这台服务器的IP，并且要安装socat**。

如果服务器上仅开放了443端口，也可以使用独立的tls模式来申请证书：

```
acme.sh --issue -d example.com -d www.example.com --alpn 
```

如果tls使用的是非标准443端口，则可以使用--tlsport指定tls端口：

```bash
acme.sh --issue -d example.com -d www.example.com --alpn --tlsport 8443 
```

### 利用nginx/apache申请域名证书

如果服务器上安装了nginx或是apache，可以直接使用--nginx或--apache参数来签发证书，acme.sh会自动生成一个nginx/apache配置文件，用以验证**指向这台服务器的域名**并签发证书：

```bash
acme.sh --issue -d example.com --nginx 
```

```bash
acme.sh --issue -d example.com --apache 
```

### DNS API方式申请域名/泛域名证书

#### 导入DNS API

签发泛域名证书是最好的方式了，申请一个证书任意二级域名都可以使用，非常方便。

根据你的域名服务商提供的DNS API，并导入DNS API，各域名服务商的DNS API请参考官方说明：https://github.com/Neilpang/acme.sh/tree/master/dnsapi。

这里以阿里云为例，在阿里云的控制台里找到自己的DNS API，然后使用以下命令导入到acme.sh中：

```bash
export Ali_Key="ali-key"
export Ali_Secret="ali-secret" 
```

这个DNS API信息会保存在“~/.acme.sh/account.conf”文件中。

#### 申请泛域名证书

导入域名商的DNS API之后就可以使用以下命令，自动解析DNS（通过api给你的域名添加一条txt解析记录），验证通过后就会下发证书：

```bash
acme.sh --issue --dns dns_ali -d example.com -d *.example.com 
```

证书申请成功后，默认保存在“~/.acme.sh/example.com”目录下。注意：“dns_ali”表示使用阿里云的DNS API，域名商不同的话此处会不同，请参考上述文档。

### DNS手动申请域名/泛域名证书

这种方式不需要导入DNS API，但需要你登录到域名商网站，手动增加DNS和txt记录以便完成验证。手动模式不支持自动续签，每次需要手动验证申请，不建议使用。

运行如下命令，请求签发证书，会提示你做一条txt记录，按提示做好txt记录：

```bash
acme.sh --issue -d example.com -d *.example.com --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please 
```

做好txt记录生效后，运行如下命令，即可签发证书了（注意：第一次是--issue，第二次是--renew）：

```bash
acme.sh --renew -d example.com -d *.example.com --yes-I-know-dns-manual-mode-enough-go-ahead-please 
```

## 拷贝证书到nginx或apache目录

默认生成的证书都放在安装目录下, 不建议直接通过nginx或apache使用此目录下的证书。正确的使用方法是使用 --install-cert 命令，并指定目标位置,，然后证书文件会被copy到相应的位置，例如：

Apache命令如下:

```bash
acme.sh --install-cert -d example.com \
--cert-file /path/to/certfile/in/apache/cert.pem \
--key-file /path/to/keyfile/in/apache/key.pem \
--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem \
--reloadcmd "service apache2 reload" 
```

Nginx命令如下:

```bash
acme.sh --install-cert -d example.com \
--key-file /path/to/keyfile/in/nginx/key.pem \
--fullchain-file /path/to/fullchain/nginx/cert.pem \
--reloadcmd "service nginx reload" 
```

执行该命令后，命令中的参数将自动保存在~/.acme.sh/example.com目录下的example.com.conf文件里，定时器更新证书的时候实现自动部署。

上述命令把下发的证书复制到你指定的位置，这样避免你直接从“~/.acme.sh/”读取证书，然后重新加载nginx或apache以刷新证书。域名为必需参数，其它参数为可选。

但要注意的是，reloadcmd参数非常重要（reloadcmd后面的参数为重新加载nginx或Apache的命令，可以根据系统的不同作相应修改），即使更新了证书，但是nginx或apache没有重新加载，证书是不是会刷新到服务中去的。

## 升级更新acme.sh

升级acme.sh可以使用以下命令：

或者使用自动升级，使用以下命令，有更新就自动更新，不需人工干预：

```bash
acme.sh --upgrade --auto-upgrade 
```

要关闭自动升级使用以下命令：

```bash
acme.sh --upgrade --auto-upgrade 0 
```

## acme.sh的基本管理

- 查看acme.sh已签发证书的域名

- 从acme.sh中移除不需要再次签发证书的域名

```bash
acme.sh --remove -d example.com 
```

- 删除acme.sh

官方参考：

acmesh-official项目地址：https://github.com/acmesh-official/acme.sh/tree/master

How to install/如何安装：https://github.com/acmesh-official/acme.sh/wiki/How-to-install

DNS manual mode/DNS手动签发：https://github.com/acmesh-official/acme.sh/wiki/DNS-manual-mode

How to issue a cert/如何签发证书：https://github.com/acmesh-official/acme.sh/wiki/How-to-issue-a-cert

How to use DNS API/如何使用DNS API：https://github.com/acmesh-official/acme.sh/wiki/dnsapi

 
本文由 [ProgramSay](#) 创作， 采用 [知识共享署名 4.0](https://creativecommons.org/licenses/by/4.0/) 国际许可协议进行许可  