---
title: "Linux sysctl.conf 优化"
date: 2018-04-27 09:32:43 +0800
comments: true
tags: 
  - sysctl
  - linux
---

# Linux sysctl.conf 优化

可以通过/etc/sysctl.conf控制和配置Linux内核及网络设置。

## sysctl配置


## 避免放大攻击
``` bash
net.ipv4.icmp_echo_ignore_broadcasts = 1
```
## 开启恶意icmp错误消息保护
```bash
net.ipv4.icmp_ignore_bogus_error_responses = 1
```
## 开启SYN洪水攻击保护
```bash
net.ipv4.tcp_syncookies = 1
```

## 开启并记录欺骗，源路由和重定向包
```bash
net.ipv4.conf.all.log_martians = 1
net.ipv4.conf.default.log_martians = 1
```

## 处理无源路由的包
```bash
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
```

## 开启反向路径过滤
```bash
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
```

## 确保无人能修改路由表
```bash
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.secure_redirects = 0
net.ipv4.conf.default.secure_redirects = 0
```

## 不充当路由器
```bash
net.ipv4.ip_forward = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
```

## 开启execshild
```bash
kernel.exec-shield = 1
kernel.randomize_va_space = 1
```

## IPv6设置
```bash
net.ipv6.conf.default.router_solicitations = 0
net.ipv6.conf.default.accept_ra_rtr_pref = 0
net.ipv6.conf.default.accept_ra_pinfo = 0
net.ipv6.conf.default.accept_ra_defrtr = 0
net.ipv6.conf.default.autoconf = 0
net.ipv6.conf.default.dad_transmits = 0
net.ipv6.conf.default.max_addresses = 1
```

## 优化LB使用的端口

## 增加系统文件描述符限制
```bash
fs.file-max = 65535
```

## 允许更多的PIDs 
(减少滚动翻转问题); may break some programs 32768

```bash
kernel.pid_max = 65536
```

## 增加系统IP端口限制
```bash
net.ipv4.ip_local_port_range = 2000 65000
```

## 增加TCP最大缓冲区大小
```bash
net.ipv4.tcp_rmem = 4096 87380 8388608
net.ipv4.tcp_wmem = 4096 87380 8388608
```
- 增加Linux自动调整TCP缓冲区限制
- 最小，默认和最大可使用的字节数
- 最大值不低于4MB，如果你使用非常高的BDP路径可以设置得更高

## Tcp窗口等
```bash
net.core.rmem_max = 8388608
net.core.wmem_max = 8388608
net.core.netdev_max_backlog = 5000
net.ipv4.tcp_window_scaling = 1
```
