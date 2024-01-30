---
date: 2020-01-05 08:44:00+00:00
title: perf for python
tags:
  - perf
---

<!-- TOC -->

- [1. 合适的工具](#1-合适的工具)
    - [1.1. pyflame使用](#11-pyflame使用)
        - [1.1.1. 安装依赖并构建（Debian or Ubuntu）](#111-安装依赖并构建debian-or-ubuntu)
        - [1.1.2. 使用pyflame](#112-使用pyflame)
        - [1.1.3. 分析结果](#113-分析结果)

<!-- /TOC -->

当前python程序的调试还是比较方便的，不管是用pdb，还是用pycharm的调试IDE（远程的话
可以用远程的SSH解释器来进行调试）都是非常方便的，但是当涉及到需要快速的了解代码热点流程，多线程
程序（其实一般是绿线程或协程），用这种调试方法就比较低效了，这时候可以用perf工具，来
周期性的采集一些python进程的栈信息，从而可以快速的达到上述目的。

# 1. 合适的工具

原始的perf工具，只能跟踪C语言等，或者系统调用等栈信息，如果用来分析python程序的话，
输出的栈信息，会包含python解释器的一些信息，使得栈信息非常不清晰，难以分析。


我们这里用的pyflame工具，进行python的栈信息采样，`https://github.com/uber-archive/pyflame/tree/v1.6.6`

## 1.1. pyflame使用


### 1.1.1. 安装依赖并构建（Debian or Ubuntu）

```
sudo apt-get install autoconf automake autotools-dev g++ pkg-config python-dev python3-dev libtool make
Once you have the build dependencies installed:

./autogen.sh
./configure
make
```

### 1.1.2. 使用pyflame

```
# Attach to PID 12345 and profile it for 1 second
pyflame -p 12345

# Attach to PID 768 and profile it for 5 seconds, sampling every 0.01 seconds
pyflame -s 5 -r 0.01 -p 768

# Run py.test against tests/, emitting sample data to prof.txt
pyflame -o prof.txt -t py.test tests/
```

### 1.1.3. 分析结果

可以使用flamegraph.pl对采集的Prof.txt结果进行解析，flamegraph.pl是一个火焰图生成工具，
可以从如下地址下载。`https://raw.githubusercontent.com/brendangregg/FlameGraph/master/flamegraph.pl`


利用如下命令可以讲pyflame生成的结果转换为火焰图：

```
./flamegraph.pl prof.txt > prof.svg
```