---
title: Win sshfs
date: 2019-07-13 11:46:51 +0000
comments: true
tags:
  - tool
---

# Win sshfs

代码开发时，有时候必须要把代码拷贝到远程的主机上去执行，这时候大部分我们会用ssh登上去，用vim修改，但是如果改的代码比较多，对于不太习惯vim的同学，就会觉得比较累。这时候一般的做法是在本地用编辑器（SourceInsighet/PyCharm）等修改代码，然后再传到服务器上去。[Pycharm专业版可以上传到ssh远端哦~]

这里推荐一个开源的win-sshfs工具，可以利用ssh在本地建立一个远端的目录映射，将ssh远端服务器的目录映射成本地的一个目录，这样就可以直接利用本地丰富的编辑器来改代码了，改完之后，直接在远端执行就可以了。

## win-sshfs下载、安装

首先需要下载dokan和win-sshfs，dokan提供win-sshfs需要的驱动和库文件，下载的时候一定要注意版本问题~，[win-sshfs Releases](https://github.com/feo-cz/win-sshfs/releases),在下载链接里一遍会标注推荐的dokan版本号。
我这里用的是[DokanSetup_redist-1.0.5.1000](https://github.com/dokan-dev/dokany/releases/tag/v1.0.5)和[WinSSHFS-1.6.1.13-devel](https://github.com/feo-cz/win-sshfs/releases/tag/1.6.1)

## ## win-sshfs使用

UI界面很容易看懂，mount之后，就会在本地多一个磁盘出来，操作磁盘里的文件，就相当于操作远程ssh服务器上的文件。
