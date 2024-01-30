---
date: 2024-01-27 16:07
title: Tsocks使用socks5代理
authors: Iskey
tags:
  - proxy
---
# Ubuntu通过tsocks使用socks5代理

## Tsocks安裝

```bash
apt install tsocks
```

在终端中:  
```bash
sudo apt-get install tsocks
``` 

## 修改配置

修改配置文件:  
```bash
sudo nano /etc/tsocks.conf
```  
将其内容改成以下几行并保存退出:  
```bash
local = 192.168.1.0/255.255.255.0 #local表示本地的网络，也就是不使用socks代理的网络
server = 127.0.0.1 # SOCKS 服务器的 IP
server_type = 5 # SOCKS 服务版本
server_port = 9999 # SOCKS 服务使用的端口
```

你可能需要修改一下以上内容，用你自己的 SSH 隧道设置。

## 运行

用 [tsocks](http://www.15897.com/blog/post/tsocks-proxychains.html) 运行你的软件很简单，在终端中:  

`tsocks 你的软件 &`