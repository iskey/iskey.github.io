---
date: 2024-01-27 15:52
title: Curl使用代理
authors: Iskey
tags:
  - proxy
---
# Curl使用代理

## 代理服务器分类

　　我们比较常用、支持_http(s)_协议代理主要分为两大类：_http代理_和_socks代理_，见下表：

| http代理 | http代理<br/>https代理 | 透明代理 | http服务器知道浏览器端使用了代理，并能获取浏览器端原始IP； |
| ---- | ---- | ---- | ---- |
|  |  | 匿名代理 | http服务器知道浏览器端使用了代理，但无法获取浏览器端原始IP； |
|  |  | 高匿名代理 | http服务器不知道浏览器端使用了代理，且无法获取浏览器端原始IP； |
| SOCKS代理 | SOCKS4 | 被称为全能代理，支持http和其他协议 | 只支持TCP应用； |
|  | SOCKS4A |  | 支持TCP应用；支持服务器端域名解析； |
|  | SOCKS5 |  | 支持TCP和UDP应用；支持服务器端域名解析；<br/>支持多种身份验证；支持IPV6； |
|  |  |  |  |


## Linux curl命令代理设置参数

　　linux curl命令可以使用下面参数设置http(s)代理、socks代理，已经设置它们的用户名、密码以及认证方式：

![](http://pic.isnokey.shop/20221021101402.png)



## Linux curl命令设置代理举例

### linux curl命令设置http代理

```bash
# 指定http代理IP和端口
curl -x 113.185.19.192:80 http://aiezu.com/test.php
curl --proxy 113.185.19.192:80 http://aiezu.com/test.php
 
#指定为http代理
curl -x http_proxy://113.185.19.192:80 http://aiezu.com/test.php
 
#指定为https代理
curl -x HTTPS_PROXY://113.185.19.192:80 http://aiezu.com/test.php
 
#指定代理用户名和密码，basic认证方式
curl -x aiezu:123456@113.185.19.192:80 http://aiezu.com/test.php
curl -x 113.185.19.192:80 -U aiezu:123456 http://aiezu.com/test.php
curl -x 113.185.19.192:80 --proxy-user aiezu:123456 http://aiezu.com/test.php
 
#指定代理用户名和密码，ntlm认证方式
curl -x 113.185.19.192:80 -U aiezu:123456 --proxy-ntlm http://aiezu.com/test.php
 
#指定代理协议、用户名和密码，basic认证方式
curl -x http_proxy://aiezu:123456@113.185.19.192:80 http://aiezu.com/test.php
```
　

### Linux curl命令设置socks代理


```bash
　#使用socks4代理，无需认证方式
curl --socks4 122.192.32.76:7280 http://aiezu.com/test.php
curl -x socks4://122.192.32.76:7280 http://aiezu.com/test.php
 
#使用socks4a代理，无需认证方式
curl --socks4a 122.192.32.76:7280 http://aiezu.com/test.php
curl -x socks4a://122.192.32.76:7280 http://aiezu.com/test.php
 
#使用socks5代理，basic认证方式
curl --socks5 122.192.32.76:7280 -U aiezu:123456 http://aiezu.com/test.php
curl -x socks5://aiezu:123456@122.192.32.76:7280 http://aiezu.com/test.php
 
#使用socks5代理，basic认证方式，ntlm认证方式
curl -x socks5://aiezu:123456@122.192.32.76:7280 --proxy-ntlm http://aiezu.com/test.php
```

## 测试代理的隐匿度

### 测试前准备

　　测试前，我们先在网站根目录也一个php页面“_test.php_”，用于输出http服务器接收到的访客IP地址信息，"test.php"测试页的代码如下：

```php
<?php
$array = array('HTTP_USER_AGENT', 'HTTP_HOST', 'HTTP_ACCEPT', 'PATH', 'SERVER_SIGNATURE', 'SERVER_SOFTWARE', 'SERVER_NAME', 'SERVER_ADDR', 'SERVER_PORT', 'DOCUMENT_ROOT', 'SERVER_ADMIN', 'SCRIPT_FILENAME', 'REMOTE_PORT', 'GATEWAY_INTERFACE', 'SERVER_PROTOCOL', 'REQUEST_METHOD', 'QUERY_STRING', 'REQUEST_URI', 'SCRIPT_NAME', 'PHP_SELF', 'REQUEST_TIME');
//  将 $_SERVER 数组赋予 $srv数组；
$srv = $_SERVER;
// 释放掉 $srv中不相关的键
foreach($array as $name ) {
    unset($srv[ $name ]);
}
print_r($srv);
```

　　保存好"test.php"后，然后我们通过不用代理，和使用透明代理、匿名代理、高匿名代理、SOCKS分别去访问，看页面输出的内容结果。  
　　

### 测试使用不同代理输出结果

　　①.  通过linux curl不使用代理访问：

```bash
[root@aiezu.com ~]# curl http://aiezu.com/test.php
Array
(
    [REMOTE_ADDR] => 114.112.104.126
)
```
　　可以看出，http服务器获取到的"_REMOTE_ADDR_"IP地址为"_114.112.104.126_"，此IP地址就是客户端lcurl的真实IP地址。   
　  
　　②. 通过linux curl命令使用_http透明代理_访问：

```bash
[root@aiezu.com ~]# curl -x 37.139.9.11:80 http://aiezu.com/test.php
Array
(
    [HTTP_VIA] => 1.1 ThunderVPN (squid/3.3.8)
    [HTTP_X_FORWARDED_FOR] => 114.112.104.126
    [HTTP_CACHE_CONTROL] => max-age=259200
    [HTTP_CONNECTION] => keep-alive
    [REMOTE_ADDR] => 37.139.9.11
)
```

　　可以看出_REMOTE_ADDR_字段变成了代理服务器的IP地址，同时真实IP地址也能从HTTP_X_FORWARDED_FOR字段获取到，还多了一个“_HTTP_VIA_”字段，可以看出出代理并不能隐藏真实IP，而且也会让http服务器自动浏览器端使用了代理。  
　  
　　③. 通过linux curl命令使用_http匿名代理_访问：

```bash
[root@aiezu.com ~]# curl -x 60.21.209.114:8080 http://aiezu.com/test.php
Array
(
    [HTTP_PROXY_CONNECTION] => Keep-Alive
    [REMOTE_ADDR] => 60.21.209.114
)
```

　　从上面可以看出，_REMOTE_ADDR_字段变成了代理服务器的IP地址，而且在响应不包含原来的真实IP地址，但是多了_HTTP_PROXY_CONNECTION_，能判断出使用了代理，得出结论此浏览器客户端使用了_匿名代理_。  
  
　　④. 通过linux curl命令使用_http高匿名_代理访问：

```bash
[root@aiezu.com ~]# curl -x 114.232.1.13:8088 http://aiezu.com/test.php
Array
(
    [REMOTE_ADDR] => 114.232.1.13
)
```

　　这次我们惊奇的发现，_REMOTE_ADDR_同样变成了代理的IP地址，同时不留下任何残留证据证明使用了代理，可以得出结论，这就是传说中的_高匿名代理_。  
　　  
　　④. 通过linux curl命令使用_socks5_代理访问：
　　
```bash
[root@aiezu.com ~]# curl --socks5 122.192.32.76:7280 http://aiezu.com/test.php
Array
(
    [REMOTE_ADDR] => 180.96.54.198
)
　　可以看出此SOCKS5代理也是高匿名代理。  
```
　　

## 附录

-   [Linux curl命令详解](http://aiezu.com/article/linux_curl_command.html)