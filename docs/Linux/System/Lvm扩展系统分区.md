---
title: Lvm扩展系统分区
date: 2019-07-07 15:28:26 +0000
comments: true
tags:
  - linux
  - tool
  - lvm
---

# Lvm扩展系统分区

装完Linux系统后，如果当时规划的根分区太小了，有几种方法：
- 新挂一个盘，挂着到某个目录，比如`/usr1`,后续所有的大文件尽量放到/usr1
- 对跟分区进行扩容

新挂磁盘，比较简单，这里主要介绍一下如何对根分区进行扩容，对根分区进行扩容分两种情况：
- 根分区是非Linux LVM格式
- 根分区是Linux LVM格式

## 扩容Linux LVM格式的分区

查看当前分区，根分区挂的是`/dev/mapper/rhel-root`卷

    [root@bms-slave-0001 ~]# df -h
    Filesystem             Size  Used Avail Use% Mounted on
    /dev/mapper/rhel-root  8G  6.5G  8G   80% /

查看当前磁盘:

    root@bms-slave-0001 ~]# fdisk -l

    Disk /dev/sda: 599.0 GB, 598999040000 bytes, 1169920000 sectors
    Units = sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 262144 bytes / 262144 bytes
    Disk label type: dos
    Disk identifier: 0x000afd24

    Device Boot      Start         End      Blocks   Id  System
    /dev/sda1   *        2048     2099199     1048576   83  Linux
    /dev/sda2         2099200    20479999     9190400   8e  Linux LVM
    /dev/sda3      1169788928  1169919999       65536   83  Linux

发现磁盘上还有很多空间，用fdisk，新建一个分区

    [root@bms-slave-0001 ~]# fdisk -l

    Disk /dev/sda: 599.0 GB, 598999040000 bytes, 1169920000 sectors
    Units = sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 262144 bytes / 262144 bytes
    Disk label type: dos
    Disk identifier: 0x000afd24

    Device Boot      Start         End      Blocks   Id  System
    /dev/sda1   *        2048     2099199     1048576   83  Linux
    /dev/sda2         2099200    20479999     9190400   8e  Linux LVM
    /dev/sda3      1169788928  1169919999       65536   83  Linux
    /dev/sda4        20480000  1169788927   574654464    5  Extended
    /dev/sda5        20482048  1169788927   574653440   8e  Linux LVM

新建分区保存退出之后，执行一下`partprobe`命令，这样不用重启系统就可以重新加载分区表了。

这里有个小知识，如果硬盘的分区模式是BIOS+MBR，受限于MBR的容量，只能有4个主分区
如果采用ELF+GPT模式，则不受此限制。

我的主机是BIOS+MBR模式，所以就新建一个扩展分区，然后在扩展分区里新建一个分区格式是Linux LVM的分区`/dev/sda5`

现在基于`/dev/sda5`，创建一个物理卷

    # pvcreate /dev/sda5

把`/dev/sda5`加入到根分区卷组，但是首先要查看根分区卷组


    # vgdisplay
    --- Volume group ---
    VG Name               rhel
    System ID
    Format                lvm2
    Metadata Areas        2
    Metadata Sequence No  5
    VG Access             read/write
    VG Status             resizable
    MAX LV                0
    Cur LV                2
    Open LV               1
    Max PV                0
    Cur PV                2
    Act PV                2
    VG Size               556.79 GiB
    PE Size               4.00 MiB
    Total PE              142539
    Alloc PE / Size       130243 / 508.76 GiB
    Free  PE / Size       12296 / 48.03 GiB
    VG UUID               1KHMUX-rlrd-Pypj-ucQZ-zPwA-TZd2-5oeHzv

    # vgextend rhel /dev/sda5

扩容卷组之后，对根分区逻辑卷进行扩容

    # lvextend -L +500G /dev/mapper/rhel-root

    [root@bms-slave-0001 ~]# df -h
    Filesystem             Size  Used Avail Use% Mounted on
    /dev/mapper/rhel-root  508G  6.5G  502G   2% /
    devtmpfs               126G     0  126G   0% /dev
    tmpfs                  126G     0  126G   0% /dev/shm
    tmpfs                  126G   19M  126G   1% /run
    tmpfs                  126G     0  126G   0% /sys/fs/cgroup


卷扩容之后，需要用re-size对文件系统进行扩容

    # resize2fs /dev/mapper/rhel-root

如果在centos/redhat上的话，可以用如下命令进行扩容

    # xfs_growfs /dev/mapper/rhel-root

## 扩容非Lininx LVM格式的分区