---
title: "python获取当前行号"
date: 2015-09-13 23:44:00+00:00
comments: true
categories: python
---

# python获取当前行号

对于python，这几天一直有两个问题在困扰我:
- **python中没办法直接取得当前的行号和函数名?**,
这是有人在论坛里提出的问题，底下一群人只是在猜测python为什么不像__file__一样提供__line__和__func__，但是却最终也没有找到解决方案。
- **如果一个函数在不知道自己名字的情况下，怎么才能递归调用自己**。
这是我一个同事问我的，其实也是获取函数名，但是当时也是回答不出来。

## logging模块

一切还要从我用python的logging模块说起，logging中的format中是有如下选项的:

```python
%(name)s            Name of the logger (logging channel)
%(levelno)s         Numeric logging level for the message (DEBUG, INFO,
                    WARNING, ERROR, CRITICAL)
%(levelname)s       Text logging level for the message ("DEBUG", "INFO",
                    "WARNING", "ERROR", "CRITICAL")
%(pathname)s        Full pathname of the source file where the logging
                    call was issued (if available)
%(filename)s        Filename portion of pathname
%(module)s          Module (name portion of filename)
%(lineno)d          Source line number where the logging call was issued
                    (if available)
%(funcName)s        Function name
%(created)f         Time when the LogRecord was created (time.time()
                    return value)
%(asctime)s         Textual time when the LogRecord was created
%(msecs)d           Millisecond portion of the creation time
%(relativeCreated)d Time in milliseconds when the LogRecord was created,
                    relative to the time the logging module was loaded
                    (typically at application startup time)
%(thread)d          Thread ID (if available)
%(threadName)s      Thread name (if available)
%(process)d         Process ID (if available)
%(message)s         The result of record.getMessage(), computed just as
                    the record is emitted
```

也就是说，logging是能够获取到调用者的行号和函数名的，那会不会也可以获取到自己的行号和函数名呢？
我们来看一下源码，主要部分如下:

```python
def currentframe():
    """Return the frame object for the caller's stack frame."""
    try:
        raise Exception
    except:
        return sys.exc_info()[2].tb_frame.f_back
def findCaller(self):
    """
    Find the stack frame of the caller so that we can note the source
    file name, line number and function name.
    """
    f = currentframe()
    #On some versions of IronPython, currentframe() returns None if
    #IronPython isn't run with -X:Frames.
    if f is not None:
        f = f.f_back
    rv = "(unknown file)", 0, "(unknown function)"
    while hasattr(f, "f_code"):
        co = f.f_code
        filename = os.path.normcase(co.co_filename)
        if filename == _srcfile:
            f = f.f_back
            continue
        rv = (co.co_filename, f.f_lineno, co.co_name)
        break
    return rv
def _log(self, level, msg, args, exc_info=None, extra=None):
    """
    Low-level logging routine which creates a LogRecord and then calls
    all the handlers of this logger to handle the record.
    """
    if _srcfile:
        #IronPython doesn't track Python frames, so findCaller throws an
        #exception on some versions of IronPython. We trap it here so that
        #IronPython can use logging.
        try:
            fn, lno, func = self.findCaller()
        except ValueError:
            fn, lno, func = "(unknown file)", 0, "(unknown function)"
    else:
        fn, lno, func = "(unknown file)", 0, "(unknown function)"
    if exc_info:
        if not isinstance(exc_info, tuple):
            exc_info = sys.exc_info()
    record = self.makeRecord(self.name, level, fn, lno, msg, args, exc_info, func, extra)
    self.handle(record)
```

我简单解释一下，实际上是通过在currentframe函数中抛出一个异常，然后通过向上查找的方式，找到调用的信息。其中
```python
rv = (co.co_filename, f.f_lineno, co.co_name)
```

的三个值分别为文件名，行号，函数名。(可以去http://docs.python.org/library/sys.html 来看一下代码中几个系统函数的说明)
OK，如果已经看懂了源码，那获取当前位置的行号和函数名相信也非常清楚了，代码如下:

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
'''
#=============================================================================
#  Author:          dantezhu - http://www.vimer.cn
#  Email:           zny2008@gmail.com
#  FileName:        xf.py
#  Description:     获取当前位置的行号和函数名
#  Version:         1.0
#  LastChange:      2010-12-17 01:19:19
#  History:         
#=============================================================================
'''
import sys
def get_cur_info():
    """Return the frame object for the caller's stack frame."""
    try:
        raise Exception
    except:
        f = sys.exc_info()[2].tb_frame.f_back
    return (f.f_code.co_name, f.f_lineno)

def callfunc():
    print get_cur_info()


if __name__ == '__main__':
    callfunc()
```

输出结果是：
```python
('callfunc', 24)
```

后来发现，其实也可以有更简单的方法，如下:

```python
import sys
def get_cur_info():
    print sys._getframe().f_code.co_name
    print sys._getframe().f_back.f_code.co_name
get_cur_info()
```

调用结果是:

```python
get_cur_info
<module>
```

[转载地址](http://www.vimer.cn/2010/12/%E5%9C%A8python%E4%B8%AD%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E4%BD%8D%E7%BD%AE%E6%89%80%E5%9C%A8%E7%9A%84%E8%A1%8C%E5%8F%B7%E5%92%8C%E5%87%BD%E6%95%B0%E5%90%8D.html)
