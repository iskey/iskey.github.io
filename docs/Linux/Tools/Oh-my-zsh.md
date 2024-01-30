---
tags:
- powerShell
- shell
---

[oh-my-zsh](https://link.zhihu.com/?target=https%3A//github.com/robbyrussell/oh-my-zsh) 是基于 zsh 的，比 bash 更强大更方便，同时它的主题更多更美观比如 agnoster

![](https://pic3.zhimg.com/80/v2-2d752970ec8dcdd81720406ef623d662_720w.jpg)

我的目的就是能在 wsl 使用到这样的 shell

## 安装 zsh

先看下自己有哪一些 shell

```bash
cat /etc/shells
```

如果没有 zsh 需要安装

```text
sudo apt-get install zsh #Ubuntu Linux记得先升级下 apt-get
sudo yum install zsh #Redhat Linux

chsh -s /bin/zsh #安装完成后设置当前用户使用 zsh 并重启 wsl
```

## 安装 oh my zsh

此时我们需要下载 [oh-my-zsh](https://link.zhihu.com/?target=https%3A//github.com/robbyrussell/oh-my-zsh)

```text
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

看项目 readme 还是写的非常详细的，安装好后重启 wsl 便是用的 oh my zsh

此时我们可以根据该项目 readme 切换主题

```text
sudo apt-get install vim #debain 默认命令 vi 并没有安装 vim
vi ~/.zshrc
```

修改

```text
ZSH_THEME="agnoster"
```

^140e39

保存后

```text
source ~/.zshrc
```

## 解决 wsl 乱码

主题已经运用上了但是一会发现是乱码

![](https://pic1.zhimg.com/80/v2-4d20119736cb7f850eef7e15d350fc64_720w.png)

查看 readme 会看到这样一句

> _Note: many themes require installing the_ [Powerline Fonts](https://link.zhihu.com/?target=https%3A//github.com/powerline/fonts) _in order to render properly._

所以得先安装 [Powerline Fonts](https://link.zhihu.com/?target=https%3A//github.com/powerline/fonts) 这样才会没有乱码，我们不能再 wsl 里面安装该字体，需要在 win10 下安装

```text
git clone https://github.com/powerline/fonts.git --depth=1 # windos 下需先安装 git
```

克隆下来后打开文件夹，有一个 ps1 的 powershell 文件以管理员打开就能自动安装字体。再次打开 wsl 发现乱码还在此时需要修改 wsl 字体

左上角图标-->属性-->字体-->XXX for powerline

![](https://pic3.zhimg.com/80/v2-51ca887b4a1050a3970be8845b562b3a_720w.jpg)

就能看到想要的命令行了

![](https://pic4.zhimg.com/80/v2-cee16e5652751032ff877564d2e529ff_720w.jpg)

## 解决 vscode 使用 wsl 的 乱码

我常常会使用 vscode 编写代码，所以将默认命令行也使用的 wsl 但是又发现乱码

使用更美的编写代码时的字体 [FiraCode](https://link.zhihu.com/?target=https%3A//github.com/tonsky/FiraCode) 安装并编辑 vscode setting

```json
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
```

此时就完美解决了问题

![](https://pic3.zhimg.com/80/v2-18c04782b9357648b197b188fd9f3c2a_720w.jpg)

如此这样我们就能很方便的在 win10 下使用 linux 命令行且足够美观，可以说微软近几年拥抱开源使得 windows 更有活力更加方便开发者，期待即将发布预览版的 [terminal](https://link.zhihu.com/?target=https%3A//github.com/microsoft/terminal)


## WSL下命令行太慢

```
git config --add oh-my-zsh.hide-status 1
git config --add oh-my-zsh.hide-dirty 1

```
