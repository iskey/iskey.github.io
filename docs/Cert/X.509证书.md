---
date: 2024-01-26 17:17
title: X.509证书
authors: Iskey
tags:
  - cert
---

 X.509 证书文件的不同后缀PEM DER CRT CER其实对应两种编码方案

- Base64编码
- DER编码

## PEM

PEM(`Privacy Enhanced Mail`)是最常用的X.509 证书文件后缀,是一个文本文件，采用了Base64 ASCII 编码,一个PEM文件可以包含公钥证书/私钥/或者能形成证书链的多个证书,以下是PEM文件的常见格式：

```bash
-----BEGIN CERTIFICATE-----
MIICADCCAaOgAwIBAgIGAXKoPs9DMAwGCCqBHM9VAYN1BQAwSzELMAkGA1UEBhMCQ04xDjAMBgNV........
-----END CERTIFICATE -----
```
PEM文件的后缀可以是：.crt, .pem, .cer, and .key
使用openSSL命令可以解码base64，显示可读的明文：
```bash
openssl x509 -in CERTIFICATE.pem -text -noout 
```
例子输出：
```
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 1591960588099 (0x172a83ecf43)
        Signature Algorithm: 1.2.156.10197.1.501
        Issuer: C = CN, O = GMSSL, OU = PKI/SM2, CN = MiddleCA for Test
        Validity
            Not Before: Dec 31 16:00:00 2015 GMT
            Not After : Dec 30 16:00:00 2035 GMT
        Subject: C = CN, O = GMSSL, OU = PKI/SM2, CN = demo1.gmssl.cn
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:de:8a:c0:d2:d5:91:6e:17:8c:9c:ef:02:92:94:
                    40:90:57:2f:f4:4e:a1:94:21:fb:50:19:98:81:07:
                    14:19:c1:0d:7b:5c:05:10:44:8c:d6:ca:ad:c6:73:
                    44:18:2d:14:99:2f:96:70:1f:e1:c2:32:b8:4b:2c:
                    50:65:88:44:64
                ASN1 OID: SM2
        X509v3 extensions:
            X509v3 Authority Key Identifier: 
                keyid:F9:7F:55:B4:27:94:33:62:A6:56:CA:6F:CC:5D:1A:FF
 
            X509v3 Subject Alternative Name: 
                DNS:demo1.gmssl.cn
            X509v3 Subject Key Identifier: 
                1F:E8:22:1B:5C:7A:45:94:CE:F4:B2:88:72:2A:10:E3
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Key Usage: critical
                Key Encipherment, Data Encipherment, Key Agreement
    Signature Algorithm: 1.2.156.10197.1.501
         30:46:02:21:00:b5:ee:4b:37:56:f9:01:c9:f4:84:91:04:17:
         1d:d5:51:f1:76:01:a6:a8:8c:14:80:3d:f2:c2:ea:7f:ed:fe:
         38:02:21:00:8a:69:ed:84:2c:6c:42:4d:8d:5a:fc:b8:cd:c4:
         7e:8e:80:31:60:af:7b:a7:03:48:39:4e:b1:d5:43:72:a0:fb
```
也可以将PEM文件转换为DER文件：
```bash
openssl x509 -outform der -in CERTIFICATE.pem -out CERTIFICATE.der
```
也可以将PEM文件转为 PKCS#7文件，后缀为p7b，

- PKCS#7文件是含有多个证书，形成证书链。
- -certfile MORE.pem用来指定链接的 ntermediate 或 root 证书；
- KCS#7文件不含私钥。
- PKCS#7文件通常用于Windows and Java server contexts
```bash
openssl crl2pkcs7 -nocrl -certfile CERTIFICATE.pem -certfile MORE.pem -out CERTIFICATE.p7b
```
也可以将PEM文件转换为PKCS#12文件
- PKCS#12文件是含有多个证书，形成证书链
- PKCS#12文件含有私钥
- 后缀为.p12或者 pfx
- -inkey PRIVATEKEY.key 用来增加私钥
- -certfile MORE.pem用来指定链接的 ntermediate 或 root 证书；
- 运行命令过程中会提示设置password来保护PKCS#12文件
```bash
openssl pkcs12 -export -out CERTIFICATE.pfx -inkey PRIVATEKEY.key -in CERTIFICATE.crt -certfile MORE.crt
```
## DER( Distinguished Encoding Rules)

DER 文件是公钥证书或者私钥通过DER编码以后生成的二进制文件；

- 常用于Java contexts
- DER文件通常后缀为der或cer
 
```
3082 07fd 3082 05e5 a003 0201 0202 1068
1604 dff3 34f1 71d8 0a73 5599 c141 7230
0d06 092a 8648 86f7 0d01 010b 0500 3072
310b 3009 0603 5504 0613 0255 5331 0e30
0c06 0355 0408 0c05 5465 7861 7331 1030
0e06 0355 0407 0c07 486f 7573 746f 6e31
1130 0f06 0355 040a 0c08 5353 4c20 436f
7270 312e 302c 0603 5504 030c 2553 534c
2e63 6f6d 2045 5620 5353 4c20 496e 7465
726d 6564 6961 7465 2043 4120 5253 4120
```
可以通过openssl命令来显示可读格式：

```bash
openssl x509 -inform der -in CERTIFICATE.der -text -noout
```
也可以将DER文件转换为PEM

```bash
openssl x509 -inform der -in CERTIFICATE.der -out CERTIFICATE.pem
```
## 总结

其实证书或者私钥，都是先根据规范给ASN.1描述，然后进行DER编码，生成二进制文件（DER），然后对二进制文件再Base64编码，即可以生成ASCII码文件（PEM）。

所以DER到PEM转换，其实就是Base64编码，反之，则是Base64解码。
