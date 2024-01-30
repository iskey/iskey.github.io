---
title: Shell文件描述符操作
date: 2018-04-24 10:39:25 +0800
comments: true
categories: shell
---
# Shell文件描述符


shell在产生一个新进程后，新进程的前三个文件描述符都默认指向三个相关文件。
这三个文件描述符对应的数组下标分别为**0，1，2**。

	- 0  对应的文件叫做标准输入（stdin）
	- 1  对应的文件叫做标准输出（stdout）
	- 2  对应的文件叫做标准报错(stderr)
 
## 理解标准描述符

但是实际上，默认跟人交互的**输入是键盘、鼠标，输出是显示器屏幕**，这些硬件设备对于程序来说都是不认识的，所以操作系统借用了原来“终端”的概念，将键盘鼠标显示器都表现成一个终端文件。于是**stdin、stdout和stderr**就最重都指向了这所谓的终端文件上。

于是，从键盘输入的内容，进程可以从标准输入的0号文件描述符读取，正常的输出内容从1号描述符写出，报错信息被定义为从2号描述符写出。这就是标准输入、标准输出和标准报错对应的描述符编号是0、1、2的原因。这也是为什么对报错进行重定向要使用2>的原因(其实1>也是可以用的)。

明白了以上内容之后，很多重定向的数字魔法就好理解了，比如：

```bash
[zorro@zorrozou-pc0 prime]$ find /etc -name passwd > /dev/null 
find: ‘/etc/docker’: Permission denied
find: ‘/etc/sudoers.d’: Permission denied
find: ‘/etc/lvm/cache’: Permission denied
find: ‘/etc/pacman.d/gnupg/openpgp-revocs.d’: Permission denied
find: ‘/etc/pacman.d/gnupg/private-keys-v1.d’: Permission denied
find: ‘/etc/polkit-1/rules.d’: Permission denied
```
这相当于只看报错信息。

```bash
[zorro@zorrozou-pc0 prime]$ find /etc -name passwd 2> /dev/null 
/etc/default/passwd
/etc/pam.d/passwd
/etc/passwd
```
这相当于只看正确输出信息。

```bash
[zorro@zorrozou-pc0 prime]$ find /etc -name passwd &> /dev/null
```
所有输出都不看，也可以写成”>&”。

```bash
[zorro@zorrozou-pc0 prime]$ find /etc -name passwd 2>&1
/etc/default/passwd
find: ‘/etc/docker’: Permission denied
/etc/pam.d/passwd
find: ‘/etc/sudoers.d’: Permission denied
find: ‘/etc/lvm/cache’: Permission denied
find: ‘/etc/pacman.d/gnupg/openpgp-revocs.d’: Permission denied
find: ‘/etc/pacman.d/gnupg/private-keys-v1.d’: Permission denied
find: ‘/etc/polkit-1/rules.d’: Permission denied
/etc/passwd
```
将标准报错输出的，重定向到标准输出再输出。

```bash
[zorro@zorrozou-pc0 prime]$ echo hello > /tmp/out 
[zorro@zorrozou-pc0 prime]$ cat /tmp/out
hello
[zorro@zorrozou-pc0 prime]$ echo hello2 >> /tmp/out 
[zorro@zorrozou-pc0 prime]$ cat /tmp/out
hello
hello2
```

## 描述符重定向

“>>”表示追加重定向。

相信大家对**&>>、1>&2、？2>&3、6>&8、>>file 2>&1**这样的写法应该也都能理解了。
进程可以打开多个文件，多个描述符之间都可以进行重定向。当然，输入也可以，比如：3<表示从描述符3读取。

下面我们罗列一下其他重定向符号和用法：
Here Document：
语法：

```bash
<<[-]word
    here-document
delimiter
```
这是一种特殊的输入重定向，重定向的内容并不是来自于某个文件，而是从当前输入读取，直到输入中写入了delimiter字符标记结束。用法：

```bash
[zorro@zorrozou-pc0 prime]$ cat << EOF
> hello world!
> I am zorro
> 
> 
> 
> sadfsdf
> ertert
> eof
> EOF
hello world!
I am zorro



sadfsdf
ertert
eof
```
这个例子可以看到，最后cat输出的内容都是在上面写入的内容，而且内容中不包括EOF，因为EOF是标记输入结束的字符串。这个功能在脚本中通常可以用于需要交互式处理的某些命令的输入和文件编辑，比如想在脚本中使用fdisk命令新建一个分区：

```bash
[root@zorrozou-pc0 prime]# cat fdisk.sh 
#!/bin/bash

fdisk /dev/sdb << EOF
n
p


w
EOF
```

当然这个脚本大家千万不要乱执行，可能会修改你的分区表。其中要输入的内容，相信熟悉fdisk命令的人应该都能明白，我就不多解释了。
Here strings：
语法：

```bash
<<<word
```
使用方式：
```bash
[zorro@zorrozou-pc0 prime]$ cat <<< asdasdasd
asdasdasd
```

其实就是将<<<符号后面的字符串当成要输入的内容给cat，而不是定向一个文件描述符。这样是不是就相当于把cat当echo用了？

## 描述符复制

**复制输入文件描述符：[n]<&word**

如果n没有指定数字，则默认复制0号文件描述符。
word一般写一个已经打开的并且用来作为输入的描述符数字，表示将制订的n号描述符在制定的描述符上复制一个。
如果word写的是“-”符号，则表示关闭这个文件描述符。如果word指定的不是一个用来输入的文件描述符，则会报错。

**复制输出文件描述符：[n]>&word**

复制一个输出的描述符，字段描述参考上面的输入复制，例子上面已经讲过了。这里还需要知道的就是1>&-表示关闭1号描述符。

## 描述符移动

**移动输入描述符：[n]<&digit-**
**移动输出描述符：[n]>&digit-**

这两个符号的意思都是将原有描述符在新的描述符编号上打开，并且关闭原有描述符。

## 描述符新建


```bash
**新建一个用来输入的描述符：[n]<word**
**新建一个用来输出的描述符：[n]>word**
**新建一个用来输入和输出的描述符：[n]<>word**
```

word都应该写一个文件路径，用来表示这个文件描述符的关联文件是谁。

## 一个例子

下面我们来看相关的编程例子：

```bash
	#!/bin/bash
	
	# example 1
	#打开3号fd用来输入，关联文件为/etc/passwd
	exec 3< /etc/passwd
	#让3号描述符成为标准输入
	exec 0<&3
	#此时cat的输入将是/etc/passwd，会在屏幕上显示出/etc/passwd的内容。
	cat
	
	#关闭3号描述符。
	exec 3>&-
	
	# example 2
	#打开3号和4号描述符作为输出，并且分别关联文件。
	exec 3> /tmp/stdout
	
	exec 4> /tmp/stderr
	
	#将标准输入关联到3号描述符，关闭原来的1号fd。
	exec 1>&3-
	#将标准报错关联到4号描述符，关闭原来的2号fd。
	exec 2>&4-
	
	#这个find命令的所有正常输出都会写到/tmp/stdout文件中，错误输出都会写到/tmp/stderr文件中。
	find /etc/ -name "passwd"
	
	#关闭两个描述符。
	exec 3>&-
	exec 4>&-
```

以上脚本要注意的地方是，一般输入输出重定向都是放到命令后面作为后缀使用，所以如果单纯改变脚本的描述符，需要在前面加exec命令。这种用法也叫做描述符魔术。某些特殊符号还有一些特殊用法，比如：

```bash
zorro@zorrozou-pc0 bash]$ > /tmp/out
```
表示清空文件，当然也可以写成：

```bash
[zorro@zorrozou-pc0 bash]$ :> /tmp/out
```
因为”:”是一个内建命令，跟true是同样的功能，所以没有任何输出，所以这个命令清空文件的作用。
