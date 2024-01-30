---
title: IPSec使用
date: 2019-07-13 10:25:17 +0000
comments: true
tags:
  - 数通
---

# IPSec使用

前几天用eNSP模拟的实验了一下IPSec的用法,这里简单记录一下


![](http://pic.isnokey.shop/PicRepo/20240129140229.png)



交换机基本配置

```
interface g 0/0/0
  ip address 192.168.1.254 24
interface g 0/0/1
  ip address 200.1.1.1 24
firewall zone trust
  add int g 0/0/0
  quit
firewall zone untrust
  add int g 0/0/1
  quit
ip route-static 0.0.0.0 0 200.1.1.2
#

acl 3000
  rule  permit ip source 192.168.1.0 0.0.0.255 destination 192.168.2.0 0.0.0.255

####IKE 阶段一  策略
ike proposal 1
  ike proposal 1
  authentication-method pre-share
  authentication-algorithm md5
  encryption-algorithm 3des-cbc
  quit

####IKE 阶段一 对等体
ike peer fw2 v1
  pre-shared-key simple huawei
  ike-proposal 1
  remote-address 200.2.2.2

#### IKE阶段二的策略
ipsec proposal myset
  transform esp
  esp authentication-algorithm sha1
  esp encryption-algorithm 3des

####整合成 ipsec policy
ipsec policy mymap 10 isakmp
  security acl 3000
  ike-peer fw2
  proposal myset

####使能端口QoS策略
interface g 0/0/1
  ipsec policy mymap

```

[iskey_img]:https://github.com/iskey/iskey.github.io/tree/source/source/images/blogs/