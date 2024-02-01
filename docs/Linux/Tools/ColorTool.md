---
tags:
- powerShell
---
# ColorTool

## 简介
ColorTool 是微软团队开发的修改颜色的小程序，可以很便捷地把 Windows 控制台包括 PowerShell 或者 cmd 的颜色方案按照别人分享的配置修改。

Vim 有一款 Gruvbox 配色，非常赏心悦目，还据说很护眼，许多人很喜欢。

![](https://sand.litofu.com/assets/20220527-colortool-for-powershell-1.jpg "漂亮的 Gruvbox Dark 配色")

作为一个不怎么用 Vim 的麻瓜，我也想享受下魔法师们的 Gruvbox，无奈我平时最多也就是用 PowerShell 运行点脚本而已，所以我有了点小心思，想把 PowerShell 的配色修改下。网上修改 PowerShell 配色都多是基于 Windows Terminal，而我公司的电脑是几年前 LSTC 版本，没有 Windows Store，我又懒得折腾，最后发现了 ColorTool。

## 配置 ColorTool

ColorTool 可以在 [GitHub](https://github.com/microsoft/terminal/tree/main/src/tools/ColorTool) 下载使用，把程序所在目录加入 `path` 环境变量里。用 choco 或者 scoop 安装可以不用修改 `path`，方便。

ColorTool 使用比较简单。`ColorTool.exe` 文件所在目录下的 `schemes` 目录就是默认配色方案的保存目录，可以通过 `colortool -l` 查看配色方案保存处的完整路径。

> colortool -l  
C:\ProgramData\chocolatey\lib\colortool\content\schemes  

ColorTool.exe 所在的目录是 `C:\ProgramData\chocolatey\lib\colortool\content\`，配色方案在目录下面的 `schemes` 目录里。

ColorTool 也自带一些配色方案，可以通过 `colortool -s` 查看现有的配色方案。

## 配色方案下载

ColorTool 支持三种格式的配色方案，格式分别是 .itermcolors，.json 和 .ini。

支持 ColorTool 的配色方案可以到 [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes) 下载。在项目的 `schemes` 目录里有很多方案，找到 Gruvbox Dark.itermcolors 和 Gruvbox Light.itermcolors，下载下来丢到刚才 ColorTool.exe 目录中的 schemes 目录里。再执行 `colortool -s`，就能看到刚刚下载的 Gruvbox 配色方案了。

再执行 ：
```
colortool -b "Gruvbox Dark.itermcolors"  
```

改变控制台的配色。

完成后执行：

```
colortool -c  
```

可以查看当前方案的效果。

当然还没完，**修改完配色默认是不保存的**。右击标题栏打开属性，再直接点确认，配色的方案就保存下来了。


## 字体

最后，字体不妨用[等距更纱黑体+Nerd图标字体库](https://github.com/laishulu/Sarasa-Mono-SC-Nerd)。 ^e064b6