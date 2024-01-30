---
date: 2015-06-18 08:44:00+00:00
title: linux自解压文件
tags: [shell]
---

经常从网络上下载.run格式的安装包，直接运行就能够执行程序安装了，很简单方便，一直也没有仔细研究过，前段时间学习开源交换机ONIE的NOS安装镜像，需要自己制作一个NOS的安装镜像，于是就学习了一下。

### 网上最常用的一种方式是通过tail命令+tar命令来实现：

- 首先把想要安装的文件通过tar命令进行打包，当然也可用zip、gunzip等命令

```
$ls
target

$tar -cvf target.tar target/
target/
target/t.sh
target/System.map

$ls
target.tar
```

- 新建自解压脚本，本例取名self_extract.sh,可以自己修改这个脚本，添加自己的安装过程。

```
$cat self_extract.sh                                                                      
#/bin/sh

lines=%%SELF_EXTRACT_LINES%%
target_file=$(readlink -f $0)

tail $lines $target_file | tar xf -

#添加你自己的安装过程

exit 0
```

- 修改这个self_extract.sh文件中的```%%SELF_EXTRACT_LINES%%```变量。

```
$LINE=$(wc -l self_extract.sh | awk -F" " '{print $1+1}')| echo $LINE | sed -i -e "s/%%SELF_EXTRACT_LINES%%/$LINE/" self_extract.sh
```

修改后的脚本文件为：

```
#/bin/sh

lines=10

target_file=$(readlink -f $0)

tail -n +$lines $target_file | tar xf -

exit 0

```

- 把第一步生成的target.tar文件追加到slef_extract.sh脚本。

```
$cat target.tar >> self_extract.sh
```

- 执行最终生成的self_extract.sh后，目录下就会最终生成target目录了。

```
$./self_extract.sh 
$ls
self_extract.sh  target
```

### ONIE的做法
-  ONIE的做法更加简洁：

```
$cat self_extract.sh 
#/bin/sh

target_file=$(readlink -f $0)

sed -e '1,/^__exit_marker__$/d' $target_file | tar xf -

exit 0

__exit_marker__
```

- 追加target.tar到self_extrac.sh文件。

```
$cat target.tar >> self_extract.sh
```

- 执行self_extract.sh就可以了

```
$./self_extract.sh 
$ls
self_extract.sh  target
```

### ONIE格式的安装包加入校验

```
sha1=$(sed -e '1,/^__exit_marker__$/d' "$0" | sha1sum | awk '{ print $1 }')

payload_sha1=%%IMAGE_SHA1%%

if [ "$sha1" != "$payload_sha1" ] ; then
    echo
    echo "ERROR: Unable to verify archive checksum"
    echo "Expected: $payload_sha1"
    echo "Found   : $sha1"
    exit 1
fi
```

需要在把target.tar文件追加到self_extract.sh之前，先替换```%%IMAGS_SHA1%%```变量。

```
$SHASUM=$(sha1sum target.tar | awk '{print $1}') | sed -i -e 's/%%IMAGE_SHA1%%/$SHASUM' self_extrac.sh
```
