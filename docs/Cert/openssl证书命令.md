---
date: 2024-01-26 17:18
title: openssl证书命令
authors: Iskey
tags:
  - cert
---

# 查看证书

## 查看KEY信息

```bash
openssl rsa -noout -text -in myserver.key
```

## 查看CSR信息

```bash
openssl req -noout -text -in myserver.csr
```

## 查看证书信息

```bash
openssl x509 -noout -text -in ca.crt
```

## 验证证书

会提示self signed

```bash
openssl verify selfsign.crt
```

因为myserver.crt 是幅ca.crt发布的，所以会验证成功

```bash
openssl verify -CAfile ca.crt myserver.crt
```

去掉key的密码保护

有时候每次都要输入密码太繁琐了,可以把Key的保护密码去掉

```bash
openssl rsa -in myserver.key -out server.key.insecure
```
 

## 不同格式证书的转换

一般证书有三种格式：

PEM(.pem) 前面命令生成的都是这种格式，

DER(.cer .der) Windows 上常见

PKCS#12文件(.pfx .p12) Mac上常见

### PEM转换为DER

```bash
openssl x509 -outform der -in myserver.crt -out myserver.der
```

### DER转换为PEM

```bash
openssl x509 -inform der -in myserver.cer -out myserver.pem
```

### PEM转换为PKCS

```bash
openssl pkcs12 -export -out myserver.pfx -inkey myserver.key -in myserver.crt -certfile ca.crt
```

### PKCS转换为PEM

```bash
openssl pkcs12 -in myserver.pfx -out myserver2.pem -nodes
```

## 测试证书

Openssl提供了简单的client和server工具，可以用来模拟SSL连接，做测试使用。

连接到远程服务器

```bash
openssl s_client -connect www.google.com.hk:443
```

模拟的HTTPS服务，可以返回Openssl相关信息

- -accept 用来指定监听的端口号

- -cert -key 用来指定提供服务的key和证书

```bash
openssl s_server -accept 443 -cert myserver.crt -key myserver.key -www
```

可以将key和证书写到同一个文件中

```bash
cat myserver.crt myserver.key > myserver.pem
```

使用的时候只提供一个参数就可以了

```bash
openssl s_server -accept 443 -cert myserver.pem -www
```

可以将服务器的证书保存下来

```bash
openssl s_client -connect www.google.com.hk:443 remoteserver.pem
```

转换成DER文件，就可以在Windows下直接查看了

```bash
openssl x509 -outform der -in remoteserver.pem -out remoteserver.cer
```

## 计算MD5和SHA1

- MD5 digest

```bash
openssl dgst -md5 filename
```

- SHA1 digest

```bash
openssl dgst -sha1 filename
```