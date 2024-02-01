"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Ovs Qos",date:"2020-02-08 11:28:15 +0800",comments:!0,tags:["ovs"]},s="OVS Qos",l={unversionedId:"Network/ovs qos",id:"Network/ovs qos",title:"Ovs Qos",description:"ovs command",source:"@site/docs/Network/ovs qos.md",sourceDirName:"Network",slug:"/Network/ovs qos",permalink:"/Network/ovs qos",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Network/ovs qos.md",tags:[{label:"ovs",permalink:"/tags/ovs"}],version:"current",frontMatter:{title:"Ovs Qos",date:"2020-02-08 11:28:15 +0800",comments:!0,tags:["ovs"]},sidebar:"tutorialSidebar",previous:{title:"Curl\u4f7f\u7528\u4ee3\u7406",permalink:"/Network/curl\u4f7f\u7528\u4ee3\u7406"}},i={},c=[{value:"ovs command",id:"ovs-command",level:2},{value:"useful command",id:"useful-command",level:2},{value:"\u67e5\u770bQOS\u5c5e\u6027",id:"\u67e5\u770bqos\u5c5e\u6027",level:3},{value:"\u5220\u9664QOS\u5e76\u6e05\u9664\u7f51\u5361QOS",id:"\u5220\u9664qos\u5e76\u6e05\u9664\u7f51\u5361qos",level:3},{value:"libvirtd \u9650\u901f\u63a5\u53e3",id:"libvirtd-\u9650\u901f\u63a5\u53e3",level:3},{value:"\u67e5\u770b\u865a\u673a\u63a5\u53e3\u7684\u9650\u901f\u8bbe\u7f6e",id:"\u67e5\u770b\u865a\u673a\u63a5\u53e3\u7684\u9650\u901f\u8bbe\u7f6e",level:3},{value:"\u8bbe\u7f6e\u865a\u673a\u63a5\u53e3\u9650\u901f",id:"\u8bbe\u7f6e\u865a\u673a\u63a5\u53e3\u9650\u901f",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ovs-qos"},"OVS Qos"),(0,r.kt)("h2",{id:"ovs-command"},"ovs command"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.pica8.com/pages/viewpage.action?pageId=3083175"},"ovs \u547d\u4ee4\u624b\u518c")),(0,r.kt)("h2",{id:"useful-command"},"useful command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ ovs-vsctl list port tap53eeb988-c7\n_uuid               : 4712ae65-bced-4ee3-bf7d-3b7fa1e52bb7\nbond_active_slave   : []\nbond_downdelay      : 0\nbond_fake_iface     : false\nbond_mode           : []\nbond_updelay        : 0\nexternal_ids        : {}\nfake_bridge         : false\ninterfaces          : [1fe8bb0a-6383-45ba-bc86-46e1de03f4e0]\nlacp                : []\nmac                 : []\nname                : "tap53eeb988-c7"\nother_config        : {net_uuid="ea7d53f9-45c6-4027-98b5-23053d10373b", network_type=vlan, physical_network="physnet1", segmentation_id="332", tag="4"}\nqos                 : 82bd0134-4e76-405a-ac1d-22b4ea43e55a\nrstp_statistics     : {}\nrstp_status         : {}\nstatistics          : {}\nstatus              : {}\ntag                 : 4\ntrunks              : []\nvlan_mode           : []\n')),(0,r.kt)("h3",{id:"\u67e5\u770bqos\u5c5e\u6027"},"\u67e5\u770bQOS\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ ovs-vsctl list qos 82bd0134-4e76-405a-ac1d-22b4ea43e55a\n_uuid               : 82bd0134-4e76-405a-ac1d-22b4ea43e55a\nexternal_ids        : {}\nother_config        : {max-rate="800000000"}\nqueues              : {0=cc4e5d2e-2dbb-4e5b-a682-d6a28bd7b743}\ntype                : linux-htb\n')),(0,r.kt)("h3",{id:"\u5220\u9664qos\u5e76\u6e05\u9664\u7f51\u5361qos"},"\u5220\u9664QOS\u5e76\u6e05\u9664\u7f51\u5361QOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ovs-vsctl -- destroy QoS 82bd0134-4e76-405a-ac1d-22b4ea43e55a -- clear Port tap53eeb988 qos\n")),(0,r.kt)("h3",{id:"libvirtd-\u9650\u901f\u63a5\u53e3"},"libvirtd \u9650\u901f\u63a5\u53e3"),(0,r.kt)("p",null,"Libvirtd\u9ed8\u8ba4\u63d0\u4f9bdomiftune\u9650\u5236\u7f51\u5361\u6d41\u91cf"),(0,r.kt)("h3",{id:"\u67e5\u770b\u865a\u673a\u63a5\u53e3\u7684\u9650\u901f\u8bbe\u7f6e"},"\u67e5\u770b\u865a\u673a\u63a5\u53e3\u7684\u9650\u901f\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virsh  domiftune 4ffbd71f-3324-4500-8636-f9a275b6e479 tap53eeb988\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u865a\u673a\u63a5\u53e3\u9650\u901f"},"\u8bbe\u7f6e\u865a\u673a\u63a5\u53e3\u9650\u901f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ virsh domiftune 4ffbd71f-3324-4500-8636-f9a275b6e479 tap53eeb988 --inbound 700000,800000,800000 --outbount 700000,800000,800000 --live\n")),(0,r.kt)("p",null,"\u5355\u4f4d\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"average bandwidth   kilobytes/second \npeak bandwidth      kilobytes/second \nburst size          kilobytes\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662fdomiftune\u53ea\u9488\u5bf9\u7f51\u7edc\u6a21\u5f0f\u4e3anat\uff0croute\u7b49\u65b9\u5f0f\uff0c\u5bf9\u6a21\u578b\u4e3abridge, passthrough, private,\u548chostdev\u662f\u4e0d\u652f\u6301\u9650\u5236\u7684\u3002"))}u.isMDXComponent=!0}}]);