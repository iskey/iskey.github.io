"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7025],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,v=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(v,l(l({ref:t},m),{},{components:r})):n.createElement(v,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={date:new Date("2016-04-22T20:36:00.000Z"),title:"Vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",categories:"vim regax",tags:["regex","vim"]},l="vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",a={unversionedId:"Linux/Tools/vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",id:"Linux/Tools/vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",title:"Vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",description:"vim\u4e0eperl\u7684\u96f6\u5bbd\u65ad\u8a00\u8868\u8fbe\u5f0f\u76f8\u6bd4\uff0c(?\u6362\u6210\u4e86\\@\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7b26\u53f7\u5e94\u8be5\u8ddf\u5728\u5339\u914d\u6a21\u5f0f\u7684\u540e\u8fb9\u3002",source:"@site/docs/Linux/Tools/vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6.md",sourceDirName:"Linux/Tools",slug:"/Linux/Tools/vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",permalink:"/Linux/Tools/vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Linux/Tools/vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6.md",tags:[{label:"regex",permalink:"/tags/regex"},{label:"vim",permalink:"/tags/vim"}],version:"current",lastUpdatedAt:1706606093,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{date:"2016-04-22T20:36:00.000Z",title:"Vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6",categories:"vim regax",tags:["regex","vim"]},sidebar:"tutorialSidebar",previous:{title:"SVN\u6e90\u7801\u6811\u5feb\u7167\u751f\u6210\u5de5\u5177",permalink:"/Linux/Tools/svn\u6e90\u7801\u6811\u5feb\u7167\u751f\u6210\u5de5\u5177"},next:{title:"Win sshfs",permalink:"/Linux/Tools/win sshfs"}},s={},p=[{value:"@=   (?= \u987a\u5e8f\u73af\u89c6",id:"----\u987a\u5e8f\u73af\u89c6",level:2},{value:"@!   (?! \u987a\u5e8f\u5426\u5b9a\u73af\u89c6",id:"----\u987a\u5e8f\u5426\u5b9a\u73af\u89c6",level:2},{value:"@&lt;=   (?&lt;= \u9006\u5e8f\u73af\u89c6",id:"----\u9006\u5e8f\u73af\u89c6",level:2},{value:"@&lt;!   (?&lt;! \u9006\u5e8f\u5426\u5b9a\u73af\u89c6",id:"----\u9006\u5e8f\u5426\u5b9a\u73af\u89c6",level:2},{value:"@&gt;   (?&gt; \u56fa\u5316\u5206\u7ec4",id:"----\u56fa\u5316\u5206\u7ec4",level:2},{value:"%(atom)   (?: \u975e\u6355\u83b7\u578b\u62ec\u53f7",id:"atom----\u975e\u6355\u83b7\u578b\u62ec\u53f7",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6"},"vim\u4e2d\u65ad\u96f6\u5bbd\u65ad\u8a00-\u6b63\u5219\u73af\u89c6"),(0,o.kt)("p",null,"vim\u4e0eperl\u7684\u96f6\u5bbd\u65ad\u8a00\u8868\u8fbe\u5f0f\u76f8\u6bd4\uff0c(?\u6362\u6210\u4e86\\@\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7b26\u53f7\u5e94\u8be5\u8ddf\u5728\u5339\u914d\u6a21\u5f0f\u7684\u540e\u8fb9\u3002"),(0,o.kt)("h2",{id:"----\u987a\u5e8f\u73af\u89c6"},"\\@=   (?= \u987a\u5e8f\u73af\u89c6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eg:\u67e5\u627e\u540e\u9762\u662fsql\u7684my\uff1a /my\\(sql\\)\\@=\n")),(0,o.kt)("h2",{id:"----\u987a\u5e8f\u5426\u5b9a\u73af\u89c6"},"\\@!   (?! \u987a\u5e8f\u5426\u5b9a\u73af\u89c6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eg:\u67e5\u627e\u540e\u9762\u4e0d\u662fsql\u7684my\uff1a /my\\(sql\\)\\@!\n")),(0,o.kt)("h2",{id:"----\u9006\u5e8f\u73af\u89c6"},"\\@<=   (?<= \u9006\u5e8f\u73af\u89c6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eg: \u67e5\u627e\u524d\u9762\u662fmy\u7684sql\uff1a /\\(my\\)\\@<=sql\n")),(0,o.kt)("h2",{id:"----\u9006\u5e8f\u5426\u5b9a\u73af\u89c6"},"\\@<!   (?<! \u9006\u5e8f\u5426\u5b9a\u73af\u89c6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eg:\u67e5\u627e\u524d\u9762\u4e0d\u662fmy\u7684sql\uff1a /\\(my\\)\\@<!sql\n")),(0,o.kt)("h2",{id:"----\u56fa\u5316\u5206\u7ec4"},"\\@>   (?> \u56fa\u5316\u5206\u7ec4"),(0,o.kt)("h2",{id:"atom----\u975e\u6355\u83b7\u578b\u62ec\u53f7"},"\\%(atom",")","   (?: \u975e\u6355\u83b7\u578b\u62ec\u53f7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u610f\u601d\u662f\uff0c\u6b64\u5206\u7ec4\u4e0d\u6355\u83b7\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e0d\u7b97\u5728\u5206\u7ec4\u4fe1\u606f\u4e2d\uff0ceg\uff1a\n:%s/\\%(my\\)sql\\(ok\\)/\\1\n\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u5c06mysqlok\u66ff\u6362\u4e3a ok \uff0c\u7531\u4e8emy\u4e3a\u6355\u83b7\u5728\u5206\u7ec4\u4e2d\uff0c\u6545\u7ec4\u4e2d\\1 \u4e3aok\u3002\n")))}c.isMDXComponent=!0}}]);