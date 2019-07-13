---
date: 2016-03-27 03:46:31+00:00
layout: post
title: 开源交换机安装环境ONIE
categories: ovs
tags: OCP ONIE
---

# Onie 安装及引导流程
---

## ONIE简要说明
---
ONIE是The Open Network Install Environment的简写，目的是为裸板网络交换机提供一个开源的安装环境，ONIE提供了一个灵活的白盒交换机生态系统使最终用户可以自主选择不同的网络操作系统。

通常，购买来的交换机都已经预装了一个由厂家自己垄断的操作系统，使得用户把自己的网络架构都限定在一个垂直的供应链上。于是整个行业都开始探索“白盒”交换机的可能，其中一个需要解决的问题就是如何让交换机支持不同的网络操作系统，（这正式ONIE的目标）。

按照惯例，这些交换机包换一个基于不同CPU架构的管理子系统，一般都会包含一个串行控制口，带外以太网口，有时还包含一个可插拔的大容量存储设备。这个子系统可以作为一个独立的功能与交换机的ASIC(s)及前端控制台界面分离开来。

ONIE利用linux/busybox等开源项目定义了一套开源的“安装环境”来驱动这个管理子系统。在此“安装环境”下，终端用户和渠道伙伴可以像安装服务器一样，把NOS作为一个单独的数据中心供应件安装在“白盒”交换机设备上。

ONIE使得交换机硬件供应商、分销商和转销商通过自己的管理来减少自己的库存，这将会在制造商、分销商、库存方面产生规模经济效应。并促进网络设备和网络操作系统的空前繁荣。

**ONIE特点**

>- 组合了bootloader、比较新的Linux 内核和Busybox
- 提供了一个可以安装任意NOS的安装环境
- 把终端用户从预装的、垄断的Nos中解放出来
- 有助于实现数据中心的大规模的交换机需求的自动化维护
- 使你可以像管理服务器一样管理你的交换机

##制作ONIE镜像
---
###设备定义文件
在编译某个特定平台的ONIE镜像时，需要预先定义一些这个平台的设备宏，这些宏位于$ONIE_ROOT/machine/`<vender>`/`<vendor>_<model>`.

关于特定平台附件信息可以参考位于machine/`<vendor>`/`<vendor>_<model>`下的INSTALL文件

###准备编译环境
在准备一台新的编译环境时，ONIE依赖一些标准的开发工具包。
对于**Debian-based System**，我们已经准备好了一个**Makefile**目标，可以帮助你自动安装ONIE所依赖的工具包，ONIE会根据当前稳定版本的Debian系统来维护这个**Makefile**目标，此**Makefile**目标需要使用**sudo(8)**命令并要求当前用户具有**root**权限。

```
$ cd build-config 
$ sudo apt-get update 
$ sudo apt-get install build-essential
$ make debian-prepare-build-host
```

对于不同的Linux分发版本，可以参考**Makefile**的`(DEBIAN_BUILD_HOST_PACKAGES)`变量，使用相应分发版本的包管理工具来安装这些工具包。

###准备一个新的构建用户账号
构建账号的环境变量`$PATH`必须包含`/sbin`和`/usr/sbin`，如果使用的是`bash`shell，可以下`$HOME/.bashrc`文件的末尾添加如下语句：
```
export PATH="/sbin:/usr/sbin:$PATH" 
```
###交叉编译工具链
ONIE的构建过程会生成并使用一套基于`gcc`和`uClibc`的交叉工具链，`crosstool-NG`是专门用来管理这套工具链的构建的工程。

构建过程，ONIE需要从Ineternet下载一系列的包文件.你可以把这些包文件放到你的本地镜像服务器（本地镜像通过`onie/build-config/local.make`进行设置）,你可以参考ONIE自带的例子，`onie/build-config/local.make.example`，和`ONIE_MIRROR`、`CROSSTOOL_ONIE_MIRROR`变量。

可以参考FAQ实例[caching downloaded packages](https://github.com/opencomputeproject/onie/wiki/FAQ#can-i-set-up-a-local-cache-of-downloaded-packages-onie-needs)

###交叉编译ONIE
编译ONIE,第一步切换到`build-config`目录，然后输入`make MACHINEROOT=../machine/<vendor> MACHINE=<vendor>_<model> all`，指定目标设备。

如下：

```
$ cd buid-config
$ make -j4 MACHINDROOT=../machine/<vendor> MACHINE=<vendor>_<model> all
```

编译完成后，在`build/images`目录下已经生成了ONIE 二进制文件。

| 文件  |   目的    |
|-----|----|
|onie-`<platform>`-`<version>`.bin| Raw binary, suitable for NOR flash programming
|onie-updater-`<platform>`-`<revision>`|ONIE updater, for use with the ONIE update mechanism

###制作ONIE启动安装盘
详细的关于ONIE启动安装盘制作过程可以进一步阅读`machin/<platform>`目录下的`INSTALL`文件。

build目录一般会生成一个iso（或bin）文件，这个iso（或bin）文件可以用来：

>- 设备厂商用来初始化安装一个新的空设备。
- 修复被损坏的ONIE 操作系统

通常会把iso文件烧写到U盘来使用，可以使用如下命令：

```
$ dd if=<machine>.iso of=/dev/sdX bs=10M
```




## FAQ
---

> 1. ONIE多久发布一次？
<br>ONIE每三个月会发布一次，详细信息，请移步**代码更新周期**章节。
2. 我有一台从XYZ厂商购买的交换机，没有安装ONIE，我可以自己安装吗？
<br>简单的说，不能。
3. 为什么默认的Console的波特率是115200？
<br>
这都21世纪了，为什么不用一个合理的较快的波特率呢?
