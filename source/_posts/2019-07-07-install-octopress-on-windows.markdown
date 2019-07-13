---
layout: post
title: "install octopress on windows"
date: 2019-07-07 00:45:05 +0000
comments: true
categories: octopress tool
---


最近在windows上安装了octopress（在linux的步骤差不多），简单记录一下，防止以后自己忘了

## 安装git
因为我们需要用github来存放我们生成的pages

## 安装ruby

- 下载安装包

这里要注意一下octopress要求的ruby版本，我自己fork的octpress分支的readme.markdown里有如下字样

    Note: Octopress requires a minimum Ruby version of 1.9.3-p0

到ruby的官方网站下载最接近的ruby版本就可以了，[Ruby](https://rubyinstaller.org/downloads/),
我选用的是[Ruby 2.2.6(x64)](https://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.2.6-x64.exe).

对应的Developmenet Kit是[DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe](DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe) 
(`注:Developmenet Kit是Ruby的开发工具集，安装octopress过程中，有些库需要编译`)

- 安装Ruby（运行安装包，把Ruby安装到`D:/Ruby23-64`目录）

- 安装DevKit

解压安装包到`D:/DevKit`，命令行进到`D:/DevKit`目录，执行

    ruby dk.rb init

执行完成后，打开`D:/DevKit`目录下的`config.yml`,查看里边有没有`- D:\Ruby23-64`字样，如果没有需要手动加上，继续执行命令

    ruby dk.rb install

另外记得把ruby的bin目录添加到系统环境变量

### 安装Python

安装Python2.7,不要用Python3

### 安装octopress

+ 下载octopress，我这里用自己的fork的repo，[My octopres](https://github.com/iskey/iskey.github.io)

新建一个目录，`D:/octopress`,在该目录下用git

    git clone https://github.com/iskey/iskey.github.io


切换到`D:/octopress`，然后执行如下命令，切换一下gem的源（国内访问国外的源比较慢）

    gem sources -a https://ruby.taobao.org/
    gem sources -r http://rubygems.org/
    gem sources -l

然后，执行如下命令，安装gem库

    gem install bundler
    bundle install

安装Octopress主题

    rake install

## octopress使用

+ 编写新文章

    rake new_post

根据提示输入标题，或者直接使用如下命令

    rake new_post['welcome']

+ 发布、预览

运行命令，设置github的pages地址

    rake setup_Github_pages 

发布文章到Github

    rake generate 
    rake deploy

本地预览

    rake preview
