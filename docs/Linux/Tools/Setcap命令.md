---
date: 2024-01-27 15:39
title: Setcap命令
authors: Iskey
tags:
  - linux
---
# Setcap命令

## 赋予命令绑定特权端口的权限
setcap 'CAP_NET_BIND_SERVICE=+ep' /path/to/program
## 删除命令绑定特权端口的权限
setcap 'CAP_NET_BIND_SERVICE=-ep' /path/to/program
## 清除程序的所有能力
`setcap -r /path/to/program`清除(remove)该程序的所有能力