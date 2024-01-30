---
date: 2024-01-27 15:29
title: Clang format
authors: Iskey
tags:
  - clang
---
##  导出clang当前配置

```bash
clang-format.exe -style=Google -dump-config  test.java > .clang-format
```

## Intellij 使用clang-format

安裝插件 ClangFormatIJ

自己修改clang-format后，保存在工程目录的父目录即可

