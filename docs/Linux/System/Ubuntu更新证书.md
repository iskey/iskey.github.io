---
title: Ubuntu更新证书
date: 2022-02-08 11:28:15 +0800
comments: true
tags: [cert, x509]
---

# Ubuntu更新证书

## proxy环境下，wget有证书错误提示 ，例如：

```bash
root@ubuntu:~# wget https://github.com/esnet/iperf/archive/3.5.tar.gz
--2019-08-24 03:33:04--  https://github.com/esnet/iperf/archive/3.5.tar.gz
Connecting to 192.168.33.234:8080... connected.
ERROR: cannot verify github.com's certificate, issued by ‘UNKOWN’:
  Unable to locally verify the issuer's authority.
To connect to github.com insecurely, use `--no-check-certificate'.

```

<!--truncate-->

## 从IE浏览器导出证书

导出x509 base64格式的证书


## 把crt证书转换为pem证书



`openssl x509  -in UNKOWN_Web_Secure_Internet_Gateway_CA.cer -out UNKOWN_Web_Secure_Internet_Gateway_CA.crt`


## 把crt证书拷贝到ubuntu环境

把crt证书拷贝到`/usr/local/share/ca-certificates`目录下，可以在该目录新建目录


## 把证书追加到配置文件

```
/etc/ca-certificates.conf
```

## 跟新证书

```
sudo update-ca-certificates
```
