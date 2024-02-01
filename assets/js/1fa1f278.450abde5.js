"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={date:new Date("2017-03-06T21:12:00.000Z"),title:"user mode linux",categories:"kernel",tags:["kernel"]},o="user mode linux",i={unversionedId:"Linux/Kernal/user mode linux",id:"Linux/Kernal/user mode linux",title:"user mode linux",description:"\u4ee5\u524d\u7814\u7a76\u5185\u6838\uff0c\u603b\u662f\u8981\u4f9d\u9760\u5f00\u53d1\u677f\u6216\u8005\u81ea\u5df1\u7f16\u8bd1\u5185\u6838\uff0e\u8fd1\u6765\u7559\u610f\u5230\u4e86\uff35\uff2d\uff2c\uff0c\u624d\u53d1\u73b0linux\u53ef\u4ee5\u50cf\u8fdb\u7a0b\u4e00\u6837\u8dd1\u8d77\u6765\uff0c\u800c\u4e14\u8dd1\u8d77\u6765\u4e0d\u4e0d\u96be\uff0c\u6df1\u611f\u60ed\u6127\uff0c\u4ee5\u4e0b\u662f\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u6cd5\u4ecb\u7ecd\uff0e",source:"@site/docs/Linux/Kernal/user mode linux.md",sourceDirName:"Linux/Kernal",slug:"/Linux/Kernal/user mode linux",permalink:"/Linux/Kernal/user mode linux",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Linux/Kernal/user mode linux.md",tags:[{label:"kernel",permalink:"/tags/kernel"}],version:"current",lastUpdatedAt:1706606093,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{date:"2017-03-06T21:12:00.000Z",title:"user mode linux",categories:"kernel",tags:["kernel"]},sidebar:"tutorialSidebar",previous:{title:"Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",permalink:"/Linux/Kernal/Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49"},next:{title:"\u4e00\u4e2anetfilter\u9a71\u52a8\u7684\u4f8b\u5b50",permalink:"/Linux/Kernal/\u4e00\u4e2anetfilter\u9a71\u52a8\u7684\u4f8b\u5b50"}},u={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7f16\u8bd1\u5185\u6838",id:"\u7f16\u8bd1\u5185\u6838",level:2},{value:"\u4ee5-O2\u7f16\u8bd1\u5185\u6838",id:"\u4ee5-o2\u7f16\u8bd1\u5185\u6838",level:3},{value:"\u4ee5-O0\u7f16\u8bd1\u5185\u6838",id:"\u4ee5-o0\u7f16\u8bd1\u5185\u6838",level:3},{value:"\u6839\u6587\u4ef6\u7cfb\u7edf",id:"\u6839\u6587\u4ef6\u7cfb\u7edf",level:2},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user-mode-linux"},"user mode linux"),(0,l.kt)("p",null,"\u4ee5\u524d\u7814\u7a76\u5185\u6838\uff0c\u603b\u662f\u8981\u4f9d\u9760\u5f00\u53d1\u677f\u6216\u8005\u81ea\u5df1\u7f16\u8bd1\u5185\u6838\uff0e\u8fd1\u6765\u7559\u610f\u5230\u4e86\uff35\uff2d\uff2c\uff0c\u624d\u53d1\u73b0linux\u53ef\u4ee5\u50cf\u8fdb\u7a0b\u4e00\u6837\u8dd1\u8d77\u6765\uff0c\u800c\u4e14\u8dd1\u8d77\u6765\u4e0d\u4e0d\u96be\uff0c\u6df1\u611f\u60ed\u6127\uff0c\u4ee5\u4e0b\u662f\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u6cd5\u4ecb\u7ecd\uff0e"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"\u7528\u6237\u6a21\u5f0fLinux\uff08User ModeLinux\uff0cUML\uff09\u4e0d\u540c\u4e8e\u5176\u4ed6Linux\u865a\u62df\u5316\u9879\u76ee\uff0cUML\u5c3d\u91cf\u5c06\u5b83\u81ea\u5df1\u4f5c\u4e3a\u4e00\u4e2a\u666e\u901a\u7684\u7a0b\u5e8f\u3002\u4eceLinux2.6.9\u7248\u672c\u8d77\uff0c\u7528\u6237\u6a21\u5f0fLinux\uff08User mode Linux,UML\uff09\u5df2\u968fLinux\u5185\u6838\u6e90\u4ee3\u7801\u4e00\u8d77\u53d1\u5e03\uff0c\u5b83\u5b58\u653e\u4e8earch/um\u76ee\u5f55\u4e0b\u3002\u7f16\u8bd1\u597dUML\u7684\u5185\u6838\u4e4b\u540e\uff0c\u53ef\u76f4\u63a5\u7528gdb\u8fd0\u884c\u7f16\u8bd1\u597d\u7684\u5185\u6838\u5e76\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://uml.devloop.org.uk/howto.html"},"http://uml.devloop.org.uk/howto.html")),(0,l.kt)("h2",{id:"\u7f16\u8bd1\u5185\u6838"},"\u7f16\u8bd1\u5185\u6838"),(0,l.kt)("h3",{id:"\u4ee5-o2\u7f16\u8bd1\u5185\u6838"},"\u4ee5-O2\u7f16\u8bd1\u5185\u6838"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make ARCH=um defconfig\nmake menuconfig ARCH=um\nmake ARCH=um\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://user-mode-linux.sourceforge.net/source.html"},"\u53c2\u8003")),(0,l.kt)("h3",{id:"\u4ee5-o0\u7f16\u8bd1\u5185\u6838"},"\u4ee5-O0\u7f16\u8bd1\u5185\u6838"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://blog.chinaunix.net/uid-234303-id-2425015.html"},"\u53c2\u8003")),(0,l.kt)("h2",{id:"\u6839\u6587\u4ef6\u7cfb\u7edf"},"\u6839\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://fs.devloop.org.uk/"},"\u4e0b\u8f7d\u73b0\u6210\u7684\u6839\u6587\u4ef6\u7cfb\u7edf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://fancymore.com/reading/linux-kernel-debugging.html"},"\u5236\u4f5c\u6839\u6587\u4ef6\u7cfb\u7edf"))),(0,l.kt)("h2",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"~ gdb ./linux   \n(gdb) handle SIGSEGV pass nostop noprint   \n(gdb) handle SIGUSR1 pass nostop noprint \n(gdb) start ubd0=/root/srcpkg/filesystem/CentOS6.x-x86-root_fs mem=256m\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://blog.csdn.net/ztz0223/article/details/7874759")),(0,l.kt)("p",null,"\u4e94\u3001\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("p",null,"1\u3001\n",(0,l.kt)("a",{parentName:"p",href:"http://moodlearchive.epfl.ch/2010-2011/mod/forum/discuss.php?d=108781"},"http://moodlearchive.epfl.ch/2010-2011/mod/forum/discuss.php?d=108781")),(0,l.kt)("p",null,"2\u3001\n",(0,l.kt)("a",{parentName:"p",href:"http://www.lenky.info/archives/2012/04/1471"},"http://www.lenky.info/archives/2012/04/1471")))}c.isMDXComponent=!0}}]);