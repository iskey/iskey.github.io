"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,g=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={date:"2024-01-27 15:29",title:"Clang format",authors:"Iskey",tags:["clang"]},l=void 0,c={unversionedId:"Linux/Tools/Clang format",id:"Linux/Tools/Clang format",title:"Clang format",description:"\u5bfc\u51faclang\u5f53\u524d\u914d\u7f6e",source:"@site/docs/Linux/Tools/Clang format.md",sourceDirName:"Linux/Tools",slug:"/Linux/Tools/Clang format",permalink:"/Linux/Tools/Clang format",draft:!1,editUrl:"https://github.com/iskey/docusaurus-2/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/Tools/Clang format.md",tags:[{label:"clang",permalink:"/tags/clang"}],version:"current",frontMatter:{date:"2024-01-27 15:29",title:"Clang format",authors:"Iskey",tags:["clang"]},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u8bd5\u4e32\u53e3\u8f6c\u5e94\u7528\u4e32\u53e3",permalink:"/Linux/System/\u8c03\u8bd5\u4e32\u53e3\u8f6c\u5e94\u7528\u4e32\u53e3"},next:{title:"ColoerTool",permalink:"/Linux/Tools/ColoerTool"}},i={},u=[{value:"\u5bfc\u51faclang\u5f53\u524d\u914d\u7f6e",id:"\u5bfc\u51faclang\u5f53\u524d\u914d\u7f6e",level:2},{value:"Intellij \u4f7f\u7528clang-format",id:"intellij-\u4f7f\u7528clang-format",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5bfc\u51faclang\u5f53\u524d\u914d\u7f6e"},"\u5bfc\u51faclang\u5f53\u524d\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"clang-format.exe -style=Google -dump-config  test.java > .clang-format\n")),(0,a.kt)("h2",{id:"intellij-\u4f7f\u7528clang-format"},"Intellij \u4f7f\u7528clang-format"),(0,a.kt)("p",null,"\u5b89\u88dd\u63d2\u4ef6 ClangFormatIJ"),(0,a.kt)("p",null,"\u81ea\u5df1\u4fee\u6539clang-format\u540e\uff0c\u4fdd\u5b58\u5728\u5de5\u7a0b\u76ee\u5f55\u7684\u7236\u76ee\u5f55\u5373\u53ef"))}p.isMDXComponent=!0}}]);