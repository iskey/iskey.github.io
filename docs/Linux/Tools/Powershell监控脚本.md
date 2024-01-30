---
title: "Powershell监控脚本"
date: 2019-07-13 11:45:27 +0000
comments: true
tags: [powerShell]
---

# Powershell监控实用脚本

标签（空格分隔）： 未分类

---

## 监控文件变化
```
# 定义要监控的文件夹，这个文件夹必须先存在。

$folder = 'D:\test'

# 定义每次监控的间隔时间，这时定义为1000毫秒，即1秒

$timeout = 1000

# 创建文件系统监视对象

$FileSystemWatcher = New-Object System.IO.FileSystemWatcher $folder

Write-Host ”按 CTRL+C 来退出对文件夹 $folder 的监控”

while ($true) {

  # 监控文件夹内的所有变化

  $result = $FileSystemWatcher.WaitForChanged('all', $timeout)

  if ($result.TimedOut -eq $false)

   {

   # 当文件夹的内容变化时，发出警告提示

   Write-Warning ('File {0} : {1}' -f $result.ChangeType, $result.name)

   }

} 

Write-Host '监控被取消.'
    
```




