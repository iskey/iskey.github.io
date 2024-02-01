---
date: 2024-01-27 15:56
title: FRP使用
authors: Iskey
tags:
  - proxy
---
# FRP

## Xray

![](http://pic.isnokey.shop/PicRepo/20221022110300.png)

### Xray Server

```
{
  "inbounds": [
    {
      "port": 1080, // 服务器监听端口
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": "b831381d-6324-4d53-ad4f-8cda48b30811"
          }
        ]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom"
    }
  ]
}
```


### Xray Client

```
{
  "inbounds": [
    {
      "port": 8080, // SOCKS 代理端口，在浏览器中需配置代理并指向这个端口
      "listen": "127.0.0.1",
      "protocol": "socks",
      "settings": {
        "udp": true
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "server", // 服务器地址，请修改为你自己的服务器 ip 或域名
            "port": 20888, // 服务器端口
            "users": [
              {
                "id": "b831381d-6324-4d53-ad4f-8cda48b30811"
              }
            ]
          }
        ]
      }
    },
    {
      "protocol": "freedom",
      "tag": "direct"
    }
  ],
  "routing": {
    "domainStrategy": "IPOnDemand",
    "rules": [
      {
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "direct"
      }
    ]
  }
}
```




## FRP

### [浮居内网穿透](https://www.frp.cool/)

#### Server
##### 在server上创建隧道

![](http://pic.isnokey.shop/PicRepo/20221021094113.png)

##### 查看隧道信息

在浮居网页面，查看自己的隧道信息

![](http://pic.isnokey.shop/PicRepo/20221021094356.png)

#### Frp Client
#####  CONFIG

```bash
[common]
server_addr=x.x.x.x //FRP服务器地址或者域名
server_port=7000
tcp_mux=true
protocol=tcp
user=xxxxxxxxxxxxxxxxxx
token=xxxxxxxxxxxxxxxx
dns_server=233.5.5.5

[iskey_cc]
privilege_mode=true
type=tcp
local_ip=127.16.0.5 // 本地地址
local_port=1080
remote_port =20888
use_encryption = false
use_compression = false
```

##### 命令行启动

```bash
frpc.exe -c frpc.ini
```


##### Curl验证

1.  crul 版本 >= 7.21.7 时使用命令:

```bash
curl -x socks5://free1.frp.cool:12508 http://www.google.com
```

2.  crul 版本 >= 7.18.0 时使用命令:

```bash
curl --socks5-hostname free1.frp.cool:12508 http://www.google.com
```

更多的curl代理使用方法：[[docusaurus/docs/Network/Curl使用代理]]
## 内网代理服务器

### CCProxy

使用内网代理服务器CCProxy（内网的机器可以访问google），配置了socks代理，作为frp的跳板。在linux下，也可以使用socks 5搭建socks代理[Linux下搭建socks5代理](https://blog.51cto.com/wzlinux/1692775)。

![](http://pic.isnokey.shop/PicRepo/20221021102700.png)

## Proxy本地代理


反向的http/https代理，浏览器可以直接使用，也比较简单。但是通常需要绑定一个域名（为什么需要绑定域名，不绑定域名行不行？）。

如果使用socks代理，最好在使用的时候，使用代理客户端来使用。

常用的代理客户端有：

- CCproxy（未验证）
CCProxy支持二级代理，使得它可以把socks5代理，转换为http代理，供本地使用。
- ProxyDroid(Android)

## Proxy使用
### Chrome启用socks

- 使用命令行带参数启动（尝试没有效果）
```
C:\Program Files (x86)\Google\Chrome\Application\chrome.exe   --show-app-list  --proxy-server="SOCKS5://192.168.1.10:1080
```
- 使用插件
安装[Proxy witchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=zh-CN)

### Windows10使用socks代理

![](http://pic.isnokey.shop/PicRepo/20221021103259.png)

