---
layout: post
title: "reset-env-for-running-process"
date: 2019-05-28 00:07:38 +0800
comments: true
categories: LinuxC
---


### LD_PRELOAD注入 

linux环境变量LD_PRELOAD可以指定程序运行时优先加载的动态链接库，在该环境变量路径下的动态链接库中的符号具有最高优先级。
通过自己编写malloc/free动态链接库，并在LD_PRELOAD环境变量中指定该路径，就可以替换libc.so中的malloc/free函数。

注：该方法对静态链接的程序无效。

```
(gdb) attach process_id
(gdb) call putenv ("LD_PRELOAD=/mylib.so")
(gdb) detach
```

### 使用libc库的装饰器

### 使用宏/函数替换malloc/free
