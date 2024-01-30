"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(r),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const l={date:"2024-01-27 15:56",title:"FRP\u4f7f\u7528",authors:"Iskey",tags:["proxy"]},a="FRP",p={unversionedId:"Network/FRP\u4f7f\u7528",id:"Network/FRP\u4f7f\u7528",title:"FRP\u4f7f\u7528",description:"Xray",source:"@site/docs/Network/FRP\u4f7f\u7528.md",sourceDirName:"Network",slug:"/Network/FRP\u4f7f\u7528",permalink:"/Network/FRP\u4f7f\u7528",draft:!1,editUrl:"https://github.com/iskey/docusaurus-2/tree/main/packages/create-docusaurus/templates/shared/docs/Network/FRP\u4f7f\u7528.md",tags:[{label:"proxy",permalink:"/tags/proxy"}],version:"current",frontMatter:{date:"2024-01-27 15:56",title:"FRP\u4f7f\u7528",authors:"Iskey",tags:["proxy"]},sidebar:"tutorialSidebar",previous:{title:"\u8fdc\u7a0b\u6570\u636e\u540c\u6b65\u53ca\u64cd\u4f5c\u65b9\u6cd5",permalink:"/Linux/Tools/\u8fdc\u7a0b\u6570\u636e\u540c\u6b65\u53ca\u64cd\u4f5c\u65b9\u6cd5"},next:{title:"Tsocks\u4f7f\u7528socks5\u4ee3\u7406",permalink:"/Network/Tsocks\u4f7f\u7528socks5\u4ee3\u7406"}},s={},i=[{value:"Xray",id:"xray",level:2},{value:"Xray Server",id:"xray-server",level:3},{value:"Xray Client",id:"xray-client",level:3},{value:"FRP",id:"frp-1",level:2},{value:"\u6d6e\u5c45\u5185\u7f51\u7a7f\u900f",id:"\u6d6e\u5c45\u5185\u7f51\u7a7f\u900f",level:3},{value:"Server",id:"server",level:4},{value:"\u5728server\u4e0a\u521b\u5efa\u96a7\u9053",id:"\u5728server\u4e0a\u521b\u5efa\u96a7\u9053",level:5},{value:"\u67e5\u770b\u96a7\u9053\u4fe1\u606f",id:"\u67e5\u770b\u96a7\u9053\u4fe1\u606f",level:5},{value:"Frp Client",id:"frp-client",level:4},{value:"CONFIG",id:"config",level:5},{value:"\u547d\u4ee4\u884c\u542f\u52a8",id:"\u547d\u4ee4\u884c\u542f\u52a8",level:5},{value:"Curl\u9a8c\u8bc1",id:"curl\u9a8c\u8bc1",level:5},{value:"\u5185\u7f51\u4ee3\u7406\u670d\u52a1\u5668",id:"\u5185\u7f51\u4ee3\u7406\u670d\u52a1\u5668",level:2},{value:"CCProxy",id:"ccproxy",level:3},{value:"Proxy\u672c\u5730\u4ee3\u7406",id:"proxy\u672c\u5730\u4ee3\u7406",level:2},{value:"Proxy\u4f7f\u7528",id:"proxy\u4f7f\u7528",level:2},{value:"Chrome\u542f\u7528socks",id:"chrome\u542f\u7528socks",level:3},{value:"Windows10\u4f7f\u7528socks\u4ee3\u7406",id:"windows10\u4f7f\u7528socks\u4ee3\u7406",level:3}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frp"},"FRP"),(0,o.kt)("h2",{id:"xray"},"Xray"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://pic.isnokey.shop/20221022110300.png",alt:null})),(0,o.kt)("h3",{id:"xray-server"},"Xray Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "inbounds": [\n    {\n      "port": 1080, // \u670d\u52a1\u5668\u76d1\u542c\u7aef\u53e3\n      "protocol": "vmess",\n      "settings": {\n        "clients": [\n          {\n            "id": "b831381d-6324-4d53-ad4f-8cda48b30811"\n          }\n        ]\n      }\n    }\n  ],\n  "outbounds": [\n    {\n      "protocol": "freedom"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"xray-client"},"Xray Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "inbounds": [\n    {\n      "port": 8080, // SOCKS \u4ee3\u7406\u7aef\u53e3\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u9700\u914d\u7f6e\u4ee3\u7406\u5e76\u6307\u5411\u8fd9\u4e2a\u7aef\u53e3\n      "listen": "127.0.0.1",\n      "protocol": "socks",\n      "settings": {\n        "udp": true\n      }\n    }\n  ],\n  "outbounds": [\n    {\n      "protocol": "vmess",\n      "settings": {\n        "vnext": [\n          {\n            "address": "server", // \u670d\u52a1\u5668\u5730\u5740\uff0c\u8bf7\u4fee\u6539\u4e3a\u4f60\u81ea\u5df1\u7684\u670d\u52a1\u5668 ip \u6216\u57df\u540d\n            "port": 20888, // \u670d\u52a1\u5668\u7aef\u53e3\n            "users": [\n              {\n                "id": "b831381d-6324-4d53-ad4f-8cda48b30811"\n              }\n            ]\n          }\n        ]\n      }\n    },\n    {\n      "protocol": "freedom",\n      "tag": "direct"\n    }\n  ],\n  "routing": {\n    "domainStrategy": "IPOnDemand",\n    "rules": [\n      {\n        "type": "field",\n        "ip": ["geoip:private"],\n        "outboundTag": "direct"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"frp-1"},"FRP"),(0,o.kt)("h3",{id:"\u6d6e\u5c45\u5185\u7f51\u7a7f\u900f"},(0,o.kt)("a",{parentName:"h3",href:"https://www.frp.cool/"},"\u6d6e\u5c45\u5185\u7f51\u7a7f\u900f")),(0,o.kt)("h4",{id:"server"},"Server"),(0,o.kt)("h5",{id:"\u5728server\u4e0a\u521b\u5efa\u96a7\u9053"},"\u5728server\u4e0a\u521b\u5efa\u96a7\u9053"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://pic.isnokey.shop/20221021094113.png",alt:null})),(0,o.kt)("h5",{id:"\u67e5\u770b\u96a7\u9053\u4fe1\u606f"},"\u67e5\u770b\u96a7\u9053\u4fe1\u606f"),(0,o.kt)("p",null,"\u5728\u6d6e\u5c45\u7f51\u9875\u9762\uff0c\u67e5\u770b\u81ea\u5df1\u7684\u96a7\u9053\u4fe1\u606f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://pic.isnokey.shop/20221021094356.png",alt:null})),(0,o.kt)("h4",{id:"frp-client"},"Frp Client"),(0,o.kt)("h5",{id:"config"},"CONFIG"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[common]\nserver_addr=x.x.x.x //FRP\u670d\u52a1\u5668\u5730\u5740\u6216\u8005\u57df\u540d\nserver_port=7000\ntcp_mux=true\nprotocol=tcp\nuser=xxxxxxxxxxxxxxxxxx\ntoken=xxxxxxxxxxxxxxxx\ndns_server=233.5.5.5\n\n[iskey_cc]\nprivilege_mode=true\ntype=tcp\nlocal_ip=127.16.0.5 // \u672c\u5730\u5730\u5740\nlocal_port=1080\nremote_port =20888\nuse_encryption = false\nuse_compression = false\n")),(0,o.kt)("h5",{id:"\u547d\u4ee4\u884c\u542f\u52a8"},"\u547d\u4ee4\u884c\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"frpc.exe -c frpc.ini\n")),(0,o.kt)("h5",{id:"curl\u9a8c\u8bc1"},"Curl\u9a8c\u8bc1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"crul \u7248\u672c >= 7.21.7 \u65f6\u4f7f\u7528\u547d\u4ee4:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -x socks5://free1.frp.cool:12508 http://www.google.com\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"crul \u7248\u672c >= 7.18.0 \u65f6\u4f7f\u7528\u547d\u4ee4:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --socks5-hostname free1.frp.cool:12508 http://www.google.com\n")),(0,o.kt)("p",null,"\u66f4\u591a\u7684curl\u4ee3\u7406\u4f7f\u7528\u65b9\u6cd5\uff1a[","[docusaurus/docs/Network/Curl\u4f7f\u7528\u4ee3\u7406]","]"),(0,o.kt)("h2",{id:"\u5185\u7f51\u4ee3\u7406\u670d\u52a1\u5668"},"\u5185\u7f51\u4ee3\u7406\u670d\u52a1\u5668"),(0,o.kt)("h3",{id:"ccproxy"},"CCProxy"),(0,o.kt)("p",null,"\u4f7f\u7528\u5185\u7f51\u4ee3\u7406\u670d\u52a1\u5668CCProxy\uff08\u5185\u7f51\u7684\u673a\u5668\u53ef\u4ee5\u8bbf\u95eegoogle\uff09\uff0c\u914d\u7f6e\u4e86socks\u4ee3\u7406\uff0c\u4f5c\u4e3afrp\u7684\u8df3\u677f\u3002\u5728linux\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528socks 5\u642d\u5efasocks\u4ee3\u7406",(0,o.kt)("a",{parentName:"p",href:"https://blog.51cto.com/wzlinux/1692775"},"Linux\u4e0b\u642d\u5efasocks5\u4ee3\u7406"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://pic.isnokey.shop/20221021102700.png",alt:null})),(0,o.kt)("h2",{id:"proxy\u672c\u5730\u4ee3\u7406"},"Proxy\u672c\u5730\u4ee3\u7406"),(0,o.kt)("p",null,"\u53cd\u5411\u7684http/https\u4ee3\u7406\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4e5f\u6bd4\u8f83\u7b80\u5355\u3002\u4f46\u662f\u901a\u5e38\u9700\u8981\u7ed1\u5b9a\u4e00\u4e2a\u57df\u540d\uff08\u4e3a\u4ec0\u4e48\u9700\u8981\u7ed1\u5b9a\u57df\u540d\uff0c\u4e0d\u7ed1\u5b9a\u57df\u540d\u884c\u4e0d\u884c\uff1f\uff09\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528socks\u4ee3\u7406\uff0c\u6700\u597d\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u4ee3\u7406\u5ba2\u6237\u7aef\u6765\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u5e38\u7528\u7684\u4ee3\u7406\u5ba2\u6237\u7aef\u6709\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CCproxy\uff08\u672a\u9a8c\u8bc1\uff09\nCCProxy\u652f\u6301\u4e8c\u7ea7\u4ee3\u7406\uff0c\u4f7f\u5f97\u5b83\u53ef\u4ee5\u628asocks5\u4ee3\u7406\uff0c\u8f6c\u6362\u4e3ahttp\u4ee3\u7406\uff0c\u4f9b\u672c\u5730\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"ProxyDroid(Android)")),(0,o.kt)("h2",{id:"proxy\u4f7f\u7528"},"Proxy\u4f7f\u7528"),(0,o.kt)("h3",{id:"chrome\u542f\u7528socks"},"Chrome\u542f\u7528socks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u547d\u4ee4\u884c\u5e26\u53c2\u6570\u542f\u52a8\uff08\u5c1d\u8bd5\u6ca1\u6709\u6548\u679c\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe   --show-app-list  --proxy-server="SOCKS5://192.168.1.10:1080\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u63d2\u4ef6\n\u5b89\u88c5",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=zh-CN"},"Proxy witchyOmega"))),(0,o.kt)("h3",{id:"windows10\u4f7f\u7528socks\u4ee3\u7406"},"Windows10\u4f7f\u7528socks\u4ee3\u7406"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://pic.isnokey.shop/20221021103259.png",alt:null})))}u.isMDXComponent=!0}}]);