---
layout: post
title: "helloworld_of_systemd"
date: 2019-07-07 15:31:20 +0000
comments: true
categories: systemd
---

## init系统.

linux操作系统首先从BIOS启动开始，接下来进入bootloader（桌面系统现在一般用Grub），bootloader载入内核并进行初始化。内核初始化的最好一步就是启动PID为1的init进程。init进程是以守护进程的方式存在，是所有其他进程的祖先。

init系统的演进路线经历了sysvinit->upstart->systemd。

## systemd系统简介

借用一下帮助文档里的关系图(man bootup)


           local-fs-pre.target
                    |
                    v
           (various mounts and   (various swap   (various cryptsetup
            fsck services...)     devices...)        devices...)       (various low-level   (various low-level
                    |                  |                  |             services: udevd,     API VFS mounts:
                    v                  v                  v             tmpfiles, random     mqueue, configfs,
             local-fs.target      swap.target     cryptsetup.target    seed, sysctl, ...)      debugfs, ...)
                    |                  |                  |                    |                    |
                    \__________________|_________________ | ___________________|____________________/
                                                         \|/
                                                          v
                                                   sysinit.target
                                                          |
                     ____________________________________/|\________________________________________
                    /                  |                  |                    |                    \
                    |                  |                  |                    |                    |
                    v                  v                  |                    v                    v
                (various           (various               |                (various          rescue.service
               timers...)          paths...)              |               sockets...)               |
                    |                  |                  |                    |                    v
                    v                  v                  |                    v              rescue.target
              timers.target      paths.target             |             sockets.target
                    |                  |                  |                    |
                    \__________________|_________________ | ___________________/
                                                         \|/
                                                          v
                                                    basic.target
                                                          |
                     ____________________________________/|                                 emergency.service
                    /                  |                  |                                         |
                    |                  |                  |                                         v
                    v                  v                  v                                 emergency.target
                display-        (various system    (various system
            manager.service         services           services)
                    |             required for            |
                    |            graphical UIs)           v
                    |                  |           multi-user.target
                    |                  |                  |
                    \_________________ | _________________/
                                      \|/
                                       v
                             graphical.target


## systemd 使用

+ 显示某个服务的实时日志

```java
journalctl --no-pager -f -u hello.service   
```

+ 编写服务配置文件

```java
# cat /root/hello
NAME=xxxxyyyyzzz
```

+ 编写服务脚本

```java
# cat /usr//local/bin/hello.sh
#!/bin/bash

name=$1
while true
do
    echo Hello World $name
    echo "*" >> /root/hello.log
    sleep 1
done
```

+ 编写服务的systemd配置文件
  可以放到`/lib/systemd/system`目录，也可以放到`/etc/systemd/system`目录下，`/etc/systemd/system`的优先级更高

```java
[Unit]
Description=Hello world Service

[Service]
EnvironmentFile=/root/hello
ExecStartPre=-/usr/bin/touch /root/hello.start
ExecStartPre=-/usr/bin/pkill hello.sh
ExecStart=/usr/local/bin/hello.sh ${NAME}
#Type=forking
Restart=on-success
RestartSec=5
```

+ 设置服务的cgroups参数

```
systemctl set-property hello CPUShares=1600 MemoryLimit=600M --runtime
```

+ systemd-run examples
  
```
systemd-run --user --on-calendar '2017-08-12 14:46' /bin/bash -c 'echo done >/tmp/done'
```

## service/socket example

+ with golang [Httpserver](https://github.com/coreos/go-systemd/tree/v14/examples/activation/httpserver) 
+ with python [Httpserver](https://gist.github.com/drmalex07/333d8a88c4918954e8e4)