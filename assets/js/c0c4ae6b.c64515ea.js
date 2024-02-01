"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),y=o,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={date:"2024-01-27 16:09",title:"Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",authors:"Iskey",tags:["proxy"]},l="Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",s={unversionedId:"Network/Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",id:"Network/Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",title:"Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",description:"Server\u7aef\u914d\u7f6e",source:"@site/docs/Network/Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406.md",sourceDirName:"Network",slug:"/Network/Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",permalink:"/Network/Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Network/Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406.md",tags:[{label:"proxy",permalink:"/tags/proxy"}],version:"current",lastUpdatedAt:1706606093,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{date:"2024-01-27 16:09",title:"Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406",authors:"Iskey",tags:["proxy"]},sidebar:"tutorialSidebar",previous:{title:"Tsocks\u4f7f\u7528socks5\u4ee3\u7406",permalink:"/Network/Tsocks\u4f7f\u7528socks5\u4ee3\u7406"},next:{title:"Curl\u4f7f\u7528\u4ee3\u7406",permalink:"/Network/curl\u4f7f\u7528\u4ee3\u7406"}},i={},c=[{value:"Server\u7aef\u914d\u7f6e",id:"server\u7aef\u914d\u7f6e",level:2},{value:"\u652f\u6301fallback\u7684xray",id:"\u652f\u6301fallback\u7684xray",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406"},"Xray\u76f4\u63a5\u4f5c\u4e3a\u4ee3\u7406"),(0,o.kt)("h2",{id:"server\u7aef\u914d\u7f6e"},"Server\u7aef\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "inbounds": [{\n            "port": 9090,\n            "listen": "0.0.0.0",\n            "protocol": "http",\n            "settings": {\n                "udp": true\n            }\n        }, {\n            "port": 9091,\n            "listen": "0.0.0.0",\n            "protocol": "socks",\n            "settings": {\n                "udp": true\n            }\n        }\n    ],\n    "outbounds": [{\n            "protocol": "freedom",\n            "tag": "direct"\n        }, {\n            "tag": "block",\n            "protocol": "blackhole"\n        }\n    ],\n    "log": {\n        "dnsLog": true\n    },\n    "routing": {\n        "domainStrategy": "IPOnDemand",\n        "rules": [{\n                "type": "field",\n                "network": "tcp,udp",\n                "outboundTag": "direct"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"\u652f\u6301fallback\u7684xray"},"\u652f\u6301fallback\u7684xray"),(0,o.kt)("p",null,"8080\u662f\u5f53\u524d\u542f\u52a8\u7684web\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u914d\u5957caddy\u670d\u52a1\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "inbounds": [\n    {\n      "port": 443, \n      "protocol": "vless",\n      "settings": {\n        "clients": [\n          {\n            "id": "648f7e2d-69ea-4279-8ead-70f9b311308b"\n          }\n        ],\n        "decryption":"none",\n        "fallbacks": [\n          {\n            "dest": 8080\n          }\n        ]\n      }\n    },\n    {\n      "listen": "127.0.0.1",\n      "port": 10085,\n      "protocol": "dokodemo-door",\n      "settings": {\n        "address": "127.0.0.1"\n      },\n      "tag": "api"\n    }\n  ],\n  "outbounds": [\n    {\n      "protocol": "freedom"\n    }\n  ],\n  "log": {\n    "dnsLog":true\n  },\n  "stats": {},\n  "policy": {\n     "levels": {\n       "0": {\n         "handshake": 4,\n         "connIdle": 300,\n         "uplinkOnly": 2,\n         "downlinkOnly": 5,\n         "statsUserUplink": false,\n         "statsUserDownlink": false,\n         "bufferSize": 4\n      }\n    },\n    "system": {\n      "statsInboundUplink": false,\n      "statsInboundDownlink": false,\n      "statsOutboundUplink": false,\n      "statsOutboundDownlink": false\n    }\n  },\n  "api": {\n    "tag": "api",\n    "services": ["HandlerService", "LoggerService", "StatsService"]\n  },\n  "routing": {\n    "rules": [\n      {\n        "inboundTag": [\n          "api"\n        ],\n        "outboundTag": "api",\n          "type": "field"\n      }\n   ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);