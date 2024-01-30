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
iskey.me:443 {
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

