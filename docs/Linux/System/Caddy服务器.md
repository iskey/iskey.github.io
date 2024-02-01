---
title: Caddy服务器
date: 2022-02-08 11:28:15 +0800
comments: true
tags: [cert]
---

# Caddy服务器

本文主要介绍使用docker来使用Caddy服务器的方法。

## Add user for docker

```bash
sudo groupadd docker
sudo usermod -aG docker
newgrp docker
```


## Create caddy file

```json title=/etc/caddy/Caddyfile
mydomain.com:443 {
	tls xxxxxx@qq.com
	root * /data/html

	# Enable the static file server.
	file_server browse
}

```

## Run caddy

```bash
docker container stop iskey_caddy
docker container rm iskey_caddy
docker run --name iskey_caddy -d -p 8443:443 -p 80:80 -v /usr1/caddy/caddy_data:/data -v /usr1/caddy/Caddyfile:/etc/caddy/Caddyfile caddy:latest
```

```bash
ls /usr1/caddy/caddy_data/
caddy  html
```
[官方文档](https://caddyserver.com/docs/)

## 重新编译caddy容器镜像

### 编译caddy_with_godaddy模块


```Dockerfile
FROM docker.io/library/golang:latest AS builder
#ENV XCADDY_RACE_DETECTOR 1
#ENV XCADDY_DEBUG 1
ENV http_proxy http://x.x.x.x:9090
ENV https_proxy http://x.x.x.x:9090

RUN go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest

RUN xcaddy build \
    --with github.com/caddy-dns/godaddy

FROM docker.io/library/caddy:latest

COPY --from=builder /go/caddy /usr/bin/caddy
```

### 执行编译命令

```bash
podman build . --loglevel 3 -t caddy_with_godaddy:latest

or

docker build . -t caddy_with_godaddy:latest
```


## caddy自动获取证书

Caddy配置如下，可以自动生成主域名证书和子域名证书，前提是要使用如上构建的带有godaddy的模块的caddy镜像

```
*.mydomain.com:443 {
    tls {
      dns godaddy KEY:SK
    }
    #root * /data/html
    reverse_proxy localhost:443

    # Enable the static file server.
    #file_server  browse
}

mydomain.com:443 {
    tls {
      dns godaddy KEY:SK
    }
    root * /data/html

    # Enable the static file server.
    file_server  browse
}
```

## 手动获取证书


参考手动申请域名进行多域名申请，[[Lets Encrypt证书生成#DNS手动申请域名/泛域名证书]]


```bash
acme.sh --issue -d mydomain.com -d *.mydomain.com --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please

acme.sh --renew -d mydomain.com -d *.mydomain.com --yes-I-know-dns-manual-mode-enough-go-ahead-please
```


acme.sh --renew -d mydomain.com -d *.mydomain.com --yes-I-know-dns-manual-mode-enough-go-ahead-please
```
[Mon Jan 29 18:33:40 CST 2024] The domain 'mydomain.com' seems to have a ECC cert already, lets use ecc cert.
[Mon Jan 29 18:33:40 CST 2024] Renew: 'mydomain.com'
[Mon Jan 29 18:33:40 CST 2024] Renew to Le_API=https://acme.zerossl.com/v2/DV90
[Mon Jan 29 18:33:41 CST 2024] Using CA: https://acme.zerossl.com/v2/DV90
[Mon Jan 29 18:33:41 CST 2024] Multi domain='DNS:mydomain.com,DNS:*.mydomain.com'
[Mon Jan 29 18:33:41 CST 2024] Getting domain auth token for each domain
[Mon Jan 29 18:33:41 CST 2024] Verifying: mydomain.com
[Mon Jan 29 18:33:52 CST 2024] Processing, The CA is processing your order, please just wait. (1/30)
[Mon Jan 29 18:33:56 CST 2024] Success
[Mon Jan 29 18:33:56 CST 2024] Verifying: *.mydomain.com
[Mon Jan 29 18:33:57 CST 2024] Processing, The CA is processing your order, please just wait. (1/30)
[Mon Jan 29 18:34:01 CST 2024] Success
[Mon Jan 29 18:34:01 CST 2024] Verify finished, start to sign.
[Mon Jan 29 18:34:01 CST 2024] Lets finalize the order.
[Mon Jan 29 18:34:01 CST 2024] Le_OrderFinalize='https://acme.zerossl.com/v2/DV90/order/X25Dctgiv7yHJvG1maL_xw/finalize'
[Mon Jan 29 18:34:03 CST 2024] Order status is processing, lets sleep and retry.
[Mon Jan 29 18:34:03 CST 2024] Retry after: 15
[Mon Jan 29 18:34:19 CST 2024] Polling order status: https://acme.zerossl.com/v2/DV90/order/X25Dctgiv7yHJvG1maL_xw
[Mon Jan 29 18:34:23 CST 2024] Downloading cert.
[Mon Jan 29 18:34:23 CST 2024] Le_LinkCert='https://acme.zerossl.com/v2/DV90/cert/Ew9fRRhMHdJOi2Bl82C_Jw'
[Mon Jan 29 18:34:26 CST 2024] Cert success.
-----BEGIN CERTIFICATE-----
MIIECjCCA4+gAwIBAgIRAP4YWVi7bVqNymluolWZ2PwwCgYIKoZIzj0EAwMwSzEL
MAkGA1UEBhMCQVQxEDAOBgNVBAoTB1plcm9TU0wxKjAoBgNVBAMTIVplcm9TU0wg
RUNDIERvbWFpbiBTZWN1cmUgU2l0ZSBDQTAeFw0yNDAxMjkwMDAwMDBaFw0yNDA0
MjgyMzU5NTlaMBcxFTATBgNVBAMTDGlzbm9rZXkuc2hvcDBZMBMGByqGSM49AgEG
CCqGSM49AwEHA0IABAbGUpOSp5jrv4nTcQYkWPfziDp9RtipNc9dsSgg3OKIqO7y
aeh7134NCeU2RDgQy356RcuLdk6ibXB46u2+ZcCjggKGMIICgjAfBgNVHSMEGDAW
gBQPa+ZLzjlHrvZ+kB558DCRkshfozAdBgNVHQ4EFgQUxzv7cTU60ruXUArPXjX4
6OPKiwswDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwHQYDVR0lBBYwFAYI
KwYBBQUHAwEGCCsGAQUFBwMCMEkGA1UdIARCMEAwNAYLKwYBBAGyMQECAk4wJTAj
BggrBgEFBQcCARYXaHR0cHM6Ly9zZWN0aWdvLmNvbS9DUFMwCAYGZ4EMAQIBMIGI
BggrBgEFBQcBAQR8MHowSwYIKwYBBQUHMAKGP2h0dHA6Ly96ZXJvc3NsLmNydC5z
ZWN0aWdvLmNvbS9aZXJvU1NMRUNDRG9tYWluU2VjdXJlU2l0ZUNBLmNydDArBggr
BgEFBQcwAYYfaHR0cDovL3plcm9zc2wub2NzcC5zZWN0aWdvLmNvbTCCAQIGCisG
AQQB1nkCBAIEgfMEgfAA7gB1AHb/iD8KtvuVUcJhzPWHujS0pM27KdxoQgqf5mdM
Wjp0AAABjVTIiGoAAAQDAEYwRAIgCyY1BwWJCO8pHdzg7WKNvy6gKJvjT4JVUeDN
cUKjdHECIB5NE2B9dDL5NL+gSlWjmkHeA5cQWR9jEloRMD2xWgz7AHUAO1N3dT4t
uYBOizBbBv5AO2fYT8P0x70ADS1yb+H61BcAAAGNVMiJIgAABAMARjBEAiAldBho
I28jkrVpRB9hqj7CyLLQzLWwt+9U0CUYCarxxAIgCqeW4O2R374ox/2FzRiHdy1p
1rgQf+NZNYg/+vZzg74wJwYDVR0RBCAwHoIMaXNub2tleS5zaG9wgg4qLmlzbm9r
ZXkuc2hvcDAKBggqhkjOPQQDAwNpADBmAjEAh46y+VcCPntVv29jn862bMhaYu/s
MXZpc+x78579NGEHPxwl7d95lRpyzy2MBGOiAjEA7fz/gWhH+g9Jg7aNqKW6PgdR
92uyLKNDh4e2Ve/O61ytdZrljjINdLTCbNL3G8Pd
-----END CERTIFICATE-----
[Mon Jan 29 18:34:26 CST 2024] Your cert is in: /home/iskey/.acme.sh/mydomain.com_ecc/mydomain.com.cer
[Mon Jan 29 18:34:26 CST 2024] Your cert key is in: /home/iskey/.acme.sh/mydomain.com_ecc/mydomain.com.key
[Mon Jan 29 18:34:26 CST 2024] The intermediate CA cert is in: /home/iskey/.acme.sh/mydomain.com_ecc/ca.cer
[Mon Jan 29 18:34:26 CST 2024] And the full chain certs is there: /home/iskey/.acme.sh/mydomain.com_ecc/fullchain.cer
```