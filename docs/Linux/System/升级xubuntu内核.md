---
title: 升级xubuntu内核
date: 2019-05-28 23:37:53 +0800
comments: true
tags:
  - ubuntu
---
# 升级xubuntu内核
---
`apt-get upgrade`命令进行升级，如果内核有更新，会直接更新
## 关于boot分区
现在的ubuntu系统，一般都不建议再单独安装/boot分区来存放内核/initrd等文件了，可以直接放到根分区之下，如果要单独划分/boot分区的话,最好设置的大一点（以前翻看资料经典的推荐设置200M，现在推荐设置500M~1G）,避免后续升级的时候,出现空间不够用.
## 清理旧的系统映像
经过几次更新以后，boot分区一般会保留了好多不用的旧版本内核/初始文件系统，可以使用命令`sudo apt-get autoremove`来进行清理，
也可以制定版本号进行清理：`sudo apt-get remove linux-image-(版本号) `

## 升级内核之后，设备异常（一般是网卡/声卡）
我在升级完成后，就遇到了网卡不识别的问题，这时候通过grub启动菜单，切换回之前的版本，查看一下网卡驱动
```
~: lspci -k | grep Ethernet -A5
05:00.0 Ethernet controller: Qualcomm Atheros AR8161 Gigabit Ethernet (rev 10)
	Subsystem: Gigabyte Technology Co., Ltd AR8161 Gigabit Ethernet
	Kernel driver in use: alx
	Kernel modules: alx
```
可以看到旧的内核用的驱动是`alx`,通过查询资料`Qualcomm Atheros AR8161 Gigabit Ethernet`,找到了`https://mirrors.edge.kernel.org/pub/linux/kernel/projects/backports/`,打开后可以看到如下：
```
v3.8-rc5/                                          26-Jan-2013 17:47       -
v3.8-rc7/                                          10-Feb-2013 23:35       -
v3.8.2/                                            11-Mar-2013 23:44       -
v3.8.3/                                            15-Mar-2013 21:55       -
v3.9-rc1/                                          09-Mar-2013 07:20       -
v3.9-rc2/                                          12-Mar-2013 00:45       -
v3.9-rc3/                                          29-Mar-2013 02:43       -
v3.9-rc4/                                          29-Mar-2013 06:04       -
v4.0.1/                                            29-Apr-2015 20:14       -
v4.1-rc1/                                          28-Apr-2015 21:26       -
v4.1.1/                                            01-Jul-2015 21:14       -
v4.14-rc2/                                         30-Sep-2017 16:02       -
v4.19-rc5/                                         25-Sep-2018 20:14       -
v4.19.23/                                          15-Feb-2019 19:41       -
v4.19.32/                                          28-Mar-2019 14:42       -
v4.19.7/                                           07-Dec-2018 19:25       -
v4.2-rc1/                                          11-Jul-2015 23:32       -
v4.2.6/                                            15-Nov-2015 21:22       -
v4.20-rc5/                                         06-Dec-2018 22:27       -
v4.20.10/                                          15-Feb-2019 22:03       -
v4.20.17/                                          28-Mar-2019 12:58       -
v4.3/                                              15-Nov-2015 18:31       -
v4.4-rc2/                                          25-Nov-2015 22:24       -
v4.4.2/                                            18-Feb-2016 21:44       -
v5.0-rc6/                                          13-Feb-2019 20:46       -
v5.0.5/                                            28-Mar-2019 01:06       -
v5.1-rc2/                                          27-Mar-2019 23:17       -
```
左边一列是内核版本号，找到与自己的内核版本对应的版本，查看内核版本号的方法如下：
```
~ uname -r
4.4.0-145-generic
```
所以我下载了`v4.4-rc2`的版本（`backports-4.4-rc2-1.tar.gz`[https://mirrors.edge.kernel.org/pub/linux/kernel/projects/backports/stable/v4.4-rc2/backports-4.4-rc2-1.tar.gz]），

下载并解压，编译并安装alx驱动，就可以了
```
| Your backport package isn't configured, please configure it
| using one of the following options:
| To configure manually:
|     make oldconfig
|     make menuconfig
|
| To get defaults for certain drivers:
|     make defconfig-alx
|     make defconfig-ar5523
|     make defconfig-ath10k
|     make defconfig-ath5k
|     make defconfig-ath6kl
|     make defconfig-ath9k
|     make defconfig-ath9k-debug
|     make defconfig-b43
|     make defconfig-b43legacy
|     make defconfig-brcmfmac
|     make defconfig-brcmsmac
|     make defconfig-carl9170
|     make defconfig-cw1200
|     make defconfig-hwsim
|     make defconfig-ieee802154
|     make defconfig-igb
|     make defconfig-iwlwifi
|     make defconfig-media
|     make defconfig-nfc
|     make defconfig-rtlwifi
|     make defconfig-wcn36xx
|     make defconfig-wifi
|     make defconfig-wil6210
|     make defconfig-wwan
\--
Makefile.real:45: recipe for target '.config' failed
make[2]: *** [.config] Error 1
Makefile:40: recipe for target 'modules' failed
make[1]: *** [modules] Error 2
Makefile:30: recipe for target 'default' failed
make: *** [default] Error 2
```
```
~: sudo make defconfig-alx
~: sudo make install
~: reboot
```
安装完成后，重启就可以找到网卡了

###　其它
中间有个插曲，升级后Grub进不去了，不得已，用ubuntuＵ盘系统进去，使用boot-repaire重新修复了Grub,
```
sudo apt-add-repository ppa:yannubuntu/boot-repair

sudo apt-get update

sudo apt-get install -y boot-repair

boot-repair
```

但是Grub菜单里的Windows系统没有了，所有又安装了grub-customizer进行调整：
```
1. Open terminal either via Ctrl+Alt+T or by searching for ‘terminal’ from app launcher. When it opens, run command to add the PPA:

sudo add-apt-repository ppa:danielrichter2007/grub-customizer

Input your password (no visual feedback while typing) when it prompts and hit Enter to continue.

grub-customizer-ppa

2. After added the PPA, run commands one by one to refresh package cache and install Grub Customizer:

sudo apt-get update

sudo apt-get install grub-customizer

Once installed, launch the software from your application launcher and enjoy!
Uninstall:

To remove the software, run command in terminal:

sudo apt-get remove --autoremove grub-customizer
```