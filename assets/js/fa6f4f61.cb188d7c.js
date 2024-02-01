"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={date:"2024-01-26 17:17",title:"X.509\u8bc1\u4e66",authors:"Iskey",tags:["cert"]},i=void 0,c={unversionedId:"Cert/X.509\u8bc1\u4e66",id:"Cert/X.509\u8bc1\u4e66",title:"X.509\u8bc1\u4e66",description:"X.509 \u8bc1\u4e66\u6587\u4ef6\u7684\u4e0d\u540c\u540e\u7f00PEM DER CRT CER\u5176\u5b9e\u5bf9\u5e94\u4e24\u79cd\u7f16\u7801\u65b9\u6848",source:"@site/docs/Cert/X.509\u8bc1\u4e66.md",sourceDirName:"Cert",slug:"/Cert/X.509\u8bc1\u4e66",permalink:"/Cert/X.509\u8bc1\u4e66",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Cert/X.509\u8bc1\u4e66.md",tags:[{label:"cert",permalink:"/tags/cert"}],version:"current",frontMatter:{date:"2024-01-26 17:17",title:"X.509\u8bc1\u4e66",authors:"Iskey",tags:["cert"]},sidebar:"tutorialSidebar",previous:{title:"Let's Encrypt\u8bc1\u4e66\u751f\u6210",permalink:"/Cert/Lets Encrypt\u8bc1\u4e66\u751f\u6210"},next:{title:"openssl\u8bc1\u4e66\u547d\u4ee4",permalink:"/Cert/openssl\u8bc1\u4e66\u547d\u4ee4"}},o={},p=[{value:"PEM",id:"pem",level:2},{value:"DER( Distinguished Encoding Rules)",id:"der-distinguished-encoding-rules",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"X.509 \u8bc1\u4e66\u6587\u4ef6\u7684\u4e0d\u540c\u540e\u7f00PEM DER CRT CER\u5176\u5b9e\u5bf9\u5e94\u4e24\u79cd\u7f16\u7801\u65b9\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Base64\u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"DER\u7f16\u7801")),(0,a.kt)("h2",{id:"pem"},"PEM"),(0,a.kt)("p",null,"PEM(",(0,a.kt)("inlineCode",{parentName:"p"},"Privacy Enhanced Mail"),")\u662f\u6700\u5e38\u7528\u7684X.509 \u8bc1\u4e66\u6587\u4ef6\u540e\u7f00,\u662f\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\uff0c\u91c7\u7528\u4e86Base64 ASCII \u7f16\u7801,\u4e00\u4e2aPEM\u6587\u4ef6\u53ef\u4ee5\u5305\u542b\u516c\u94a5\u8bc1\u4e66/\u79c1\u94a5/\u6216\u8005\u80fd\u5f62\u6210\u8bc1\u4e66\u94fe\u7684\u591a\u4e2a\u8bc1\u4e66,\u4ee5\u4e0b\u662fPEM\u6587\u4ef6\u7684\u5e38\u89c1\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"-----BEGIN CERTIFICATE-----\nMIICADCCAaOgAwIBAgIGAXKoPs9DMAwGCCqBHM9VAYN1BQAwSzELMAkGA1UEBhMCQ04xDjAMBgNV........\n-----END CERTIFICATE -----\n")),(0,a.kt)("p",null,"PEM\u6587\u4ef6\u7684\u540e\u7f00\u53ef\u4ee5\u662f\uff1a.crt, .pem, .cer, and .key\n\u4f7f\u7528openSSL\u547d\u4ee4\u53ef\u4ee5\u89e3\u7801base64\uff0c\u663e\u793a\u53ef\u8bfb\u7684\u660e\u6587\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -in CERTIFICATE.pem -text -noout \n")),(0,a.kt)("p",null,"\u4f8b\u5b50\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: 1591960588099 (0x172a83ecf43)\n        Signature Algorithm: 1.2.156.10197.1.501\n        Issuer: C = CN, O = GMSSL, OU = PKI/SM2, CN = MiddleCA for Test\n        Validity\n            Not Before: Dec 31 16:00:00 2015 GMT\n            Not After : Dec 30 16:00:00 2035 GMT\n        Subject: C = CN, O = GMSSL, OU = PKI/SM2, CN = demo1.gmssl.cn\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n                    04:de:8a:c0:d2:d5:91:6e:17:8c:9c:ef:02:92:94:\n                    40:90:57:2f:f4:4e:a1:94:21:fb:50:19:98:81:07:\n                    14:19:c1:0d:7b:5c:05:10:44:8c:d6:ca:ad:c6:73:\n                    44:18:2d:14:99:2f:96:70:1f:e1:c2:32:b8:4b:2c:\n                    50:65:88:44:64\n                ASN1 OID: SM2\n        X509v3 extensions:\n            X509v3 Authority Key Identifier: \n                keyid:F9:7F:55:B4:27:94:33:62:A6:56:CA:6F:CC:5D:1A:FF\n \n            X509v3 Subject Alternative Name: \n                DNS:demo1.gmssl.cn\n            X509v3 Subject Key Identifier: \n                1F:E8:22:1B:5C:7A:45:94:CE:F4:B2:88:72:2A:10:E3\n            X509v3 Basic Constraints: \n                CA:FALSE\n            X509v3 Key Usage: critical\n                Key Encipherment, Data Encipherment, Key Agreement\n    Signature Algorithm: 1.2.156.10197.1.501\n         30:46:02:21:00:b5:ee:4b:37:56:f9:01:c9:f4:84:91:04:17:\n         1d:d5:51:f1:76:01:a6:a8:8c:14:80:3d:f2:c2:ea:7f:ed:fe:\n         38:02:21:00:8a:69:ed:84:2c:6c:42:4d:8d:5a:fc:b8:cd:c4:\n         7e:8e:80:31:60:af:7b:a7:03:48:39:4e:b1:d5:43:72:a0:fb\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5c06PEM\u6587\u4ef6\u8f6c\u6362\u4e3aDER\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -outform der -in CERTIFICATE.pem -out CERTIFICATE.der\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5c06PEM\u6587\u4ef6\u8f6c\u4e3a PKCS#7\u6587\u4ef6\uff0c\u540e\u7f00\u4e3ap7b\uff0c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PKCS#7\u6587\u4ef6\u662f\u542b\u6709\u591a\u4e2a\u8bc1\u4e66\uff0c\u5f62\u6210\u8bc1\u4e66\u94fe\u3002"),(0,a.kt)("li",{parentName:"ul"},"-certfile MORE.pem\u7528\u6765\u6307\u5b9a\u94fe\u63a5\u7684 ntermediate \u6216 root \u8bc1\u4e66\uff1b"),(0,a.kt)("li",{parentName:"ul"},"KCS#7\u6587\u4ef6\u4e0d\u542b\u79c1\u94a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"PKCS#7\u6587\u4ef6\u901a\u5e38\u7528\u4e8eWindows and Java server contexts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl crl2pkcs7 -nocrl -certfile CERTIFICATE.pem -certfile MORE.pem -out CERTIFICATE.p7b\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5c06PEM\u6587\u4ef6\u8f6c\u6362\u4e3aPKCS#12\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PKCS#12\u6587\u4ef6\u662f\u542b\u6709\u591a\u4e2a\u8bc1\u4e66\uff0c\u5f62\u6210\u8bc1\u4e66\u94fe"),(0,a.kt)("li",{parentName:"ul"},"PKCS#12\u6587\u4ef6\u542b\u6709\u79c1\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7f00\u4e3a.p12\u6216\u8005 pfx"),(0,a.kt)("li",{parentName:"ul"},"-inkey PRIVATEKEY.key \u7528\u6765\u589e\u52a0\u79c1\u94a5"),(0,a.kt)("li",{parentName:"ul"},"-certfile MORE.pem\u7528\u6765\u6307\u5b9a\u94fe\u63a5\u7684 ntermediate \u6216 root \u8bc1\u4e66\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u547d\u4ee4\u8fc7\u7a0b\u4e2d\u4f1a\u63d0\u793a\u8bbe\u7f6epassword\u6765\u4fdd\u62a4PKCS#12\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl pkcs12 -export -out CERTIFICATE.pfx -inkey PRIVATEKEY.key -in CERTIFICATE.crt -certfile MORE.crt\n")),(0,a.kt)("h2",{id:"der-distinguished-encoding-rules"},"DER( Distinguished Encoding Rules)"),(0,a.kt)("p",null,"DER \u6587\u4ef6\u662f\u516c\u94a5\u8bc1\u4e66\u6216\u8005\u79c1\u94a5\u901a\u8fc7DER\u7f16\u7801\u4ee5\u540e\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e38\u7528\u4e8eJava contexts"),(0,a.kt)("li",{parentName:"ul"},"DER\u6587\u4ef6\u901a\u5e38\u540e\u7f00\u4e3ader\u6216cer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"3082 07fd 3082 05e5 a003 0201 0202 1068\n1604 dff3 34f1 71d8 0a73 5599 c141 7230\n0d06 092a 8648 86f7 0d01 010b 0500 3072\n310b 3009 0603 5504 0613 0255 5331 0e30\n0c06 0355 0408 0c05 5465 7861 7331 1030\n0e06 0355 0407 0c07 486f 7573 746f 6e31\n1130 0f06 0355 040a 0c08 5353 4c20 436f\n7270 312e 302c 0603 5504 030c 2553 534c\n2e63 6f6d 2045 5620 5353 4c20 496e 7465\n726d 6564 6961 7465 2043 4120 5253 4120\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7openssl\u547d\u4ee4\u6765\u663e\u793a\u53ef\u8bfb\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -inform der -in CERTIFICATE.der -text -noout\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5c06DER\u6587\u4ef6\u8f6c\u6362\u4e3aPEM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -inform der -in CERTIFICATE.der -out CERTIFICATE.pem\n")),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u5176\u5b9e\u8bc1\u4e66\u6216\u8005\u79c1\u94a5\uff0c\u90fd\u662f\u5148\u6839\u636e\u89c4\u8303\u7ed9ASN.1\u63cf\u8ff0\uff0c\u7136\u540e\u8fdb\u884cDER\u7f16\u7801\uff0c\u751f\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\uff08DER\uff09\uff0c\u7136\u540e\u5bf9\u4e8c\u8fdb\u5236\u6587\u4ef6\u518dBase64\u7f16\u7801\uff0c\u5373\u53ef\u4ee5\u751f\u6210ASCII\u7801\u6587\u4ef6\uff08PEM\uff09\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5DER\u5230PEM\u8f6c\u6362\uff0c\u5176\u5b9e\u5c31\u662fBase64\u7f16\u7801\uff0c\u53cd\u4e4b\uff0c\u5219\u662fBase64\u89e3\u7801\u3002"))}s.isMDXComponent=!0}}]);