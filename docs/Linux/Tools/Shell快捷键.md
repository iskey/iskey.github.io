---
tags: [shell]
---
# Bash的快捷键

## 光标移动
    快捷键	描述
    Ctrl + a	移动光标到行首
    Ctrl + e	移动光标到行尾
    Alt + b	移动光标后退一个单词（词首）
    Alt + f	移动光标前进一个单词（词首）
    Ctrl + f	光标前进一个字母
    Ctrl + b	光标后退一个字母
    Ctrl + xx	当前位置与行首之间光标切换
## 剪切粘贴
    快捷键	描述
    Ctrl + k	删除从光标到行尾
    Ctrl + u	删除从光标到行首
    Ctrl + w	从光标向前删除一个单词
    Alt + d	从光标向后删除一个单词
    Ctrl + d	删除光标下一个字母
    Ctrl + h	删除光标前一个字母
    Alt + t	swap(当前单词, 上一个单词)
    Ctrl + t	swap(当前字母, 上一个字母)
    Ctrl + y	粘贴上一次删除的文本
## 大小写转换
    快捷键	描述
    Alt + c	大写当前字母，并移动光标到单词尾
    Alt + u	大写从当光标到单词尾
    Alt + l	小写从当光标到单词尾
## 历史命令
    快捷键	描述
    Ctrl + r	向后搜索历史命令
    Ctrl + g	退出搜索
    Ctrl + p	历史中上一个命令
    Ctrl + n	历史中下一个命令
    Alt + .	上一个命令的最后一个单词
## 终端指令
    快捷键	描述
    Ctrl + l	清屏
    Ctrl + s	停止输出（在Zsh中为向前搜索历史命令）
    Ctrl + q	继续输出
    Ctrl + c	终止当前命令
    Ctrl + z	挂起当前命令
    Ctrl + d	结束输入（产生一个EOF）

## 自定义快捷键

如果你想自己的Bash有那么一些不同，你也可以自己自定义快捷键，使用bind命令即可，Bash中的快捷键其实是Readline来提供的，因此，这里快捷键的设置其实就是配置Readline，Readline中分两种快捷键，一种是Readline内部的函数快捷键，另外一种是执行Shell命令，设置的时候稍有不同：

### 查看Readline中可以使用的函数名称
```bash
bind -l
```
### 查看当前绑定的案件配置与其对应的功能
```bash
bind -v
```
### 已经绑定的快捷键
```bash
bind -p
```

### 绑定自定义执行命令shell命令的快捷键
```bash
bind -x '"/C-x/C-l":ls -al'
```
绑定后，按[C-x,C-L]就能执行
``ls -al``

### 绑定内置函数功能
``bind "/C-x":backword-delte-char``

这个是这行Readline库中的函数`backword-delte-char`

这种设置只是针对当前的会话有效，一旦会话丢失，这样设置的快捷键就会丢失，为了能够让设置的快捷键永久有效，我们就需要将快捷键的配置写入文件。在Linux系统中，能永久保存快捷键的地方有两个，全局和用户的配置文件，全局的是`/etc/inputrc`，而用户的是在用户的根目录下`~/.inputrc`，全局的会影响所有的用户，而用户根目录下的只会对相应的用户产生影响。inputrc文件的大概样子像下面这样：

### 本例来自CentOS6.4的默认配置文件

```bash
$if mode=emacs

# for linux console and RH/Debian xterm
"/e[1~": beginning-of-line
"/e[4~": end-of-line
# commented out keymappings for pgup/pgdown to reach begin/end of history
#"/e[5~": beginning-of-history
#"/e[6~": end-of-history
"/e[5~": history-search-backward
"/e[6~": history-search-forward
"/e[3~": delete-char
"/e[2~": quoted-insert
"/e[5C": forward-word
"/e[5D": backward-word
"/e[1;5C": forward-word
"/e[1;5D": backward-word

# for rxvt
"/e[8~": end-of-line
"/eOc": forward-word
"/eOd": backward-word

# for non RH/Debian xterm, can't hurt for RH/DEbian xterm
"/eOH": beginning-of-line
"/eOF": end-of-line

# for freebsd console
"/e[H": beginning-of-line
"/e[F": end-of-line
$endif
```

说明：

1.  在配置文件中，/C代表CTRL，/M代表ALT，/e代表ESC，//是反斜杠/，/'是单引号，/"是双引号；
    
    /C-    control prefix
    /M-    meta prefix
    /e     an escape character
    //     backslash
    /"     literal ", a double quote
    /’     literal ’, a single quote
    
2.  如果要查看某一个功能键的字符序列可以通过[CTRL-V]来实现，或者输入cat后回车，进入编辑中，直接按快捷键
3.  配置文件中可能会使用八进制或者十六进制来表示字符。

【备注】`zsh`中使用`bindkey`.