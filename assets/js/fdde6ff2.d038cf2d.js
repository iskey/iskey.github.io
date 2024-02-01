"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7078],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),d=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return l.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),k=r,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||a;return t?l.createElement(m,i(i({ref:n},c),{},{components:t})):l.createElement(m,i({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<a;d++)i[d]=t[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var l=t(7462),r=(t(7294),t(3905));const a={tags:["shell"]},i="Bash\u7684\u5feb\u6377\u952e",o={unversionedId:"Linux/Tools/Shell\u5feb\u6377\u952e",id:"Linux/Tools/Shell\u5feb\u6377\u952e",title:"Bash\u7684\u5feb\u6377\u952e",description:"\u5149\u6807\u79fb\u52a8",source:"@site/docs/Linux/Tools/Shell\u5feb\u6377\u952e.md",sourceDirName:"Linux/Tools",slug:"/Linux/Tools/Shell\u5feb\u6377\u952e",permalink:"/Linux/Tools/Shell\u5feb\u6377\u952e",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Linux/Tools/Shell\u5feb\u6377\u952e.md",tags:[{label:"shell",permalink:"/tags/shell"}],version:"current",lastUpdatedAt:1706606093,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{tags:["shell"]},sidebar:"tutorialSidebar",previous:{title:"Setcap\u547d\u4ee4",permalink:"/Linux/Tools/Setcap\u547d\u4ee4"},next:{title:"Shell\u6587\u4ef6\u63cf\u8ff0\u7b26\u64cd\u4f5c",permalink:"/Linux/Tools/Shell\u6587\u4ef6\u63cf\u8ff0\u7b26"}},p={},d=[{value:"\u5149\u6807\u79fb\u52a8",id:"\u5149\u6807\u79fb\u52a8",level:2},{value:"\u526a\u5207\u7c98\u8d34",id:"\u526a\u5207\u7c98\u8d34",level:2},{value:"\u5927\u5c0f\u5199\u8f6c\u6362",id:"\u5927\u5c0f\u5199\u8f6c\u6362",level:2},{value:"\u5386\u53f2\u547d\u4ee4",id:"\u5386\u53f2\u547d\u4ee4",level:2},{value:"\u7ec8\u7aef\u6307\u4ee4",id:"\u7ec8\u7aef\u6307\u4ee4",level:2},{value:"\u81ea\u5b9a\u4e49\u5feb\u6377\u952e",id:"\u81ea\u5b9a\u4e49\u5feb\u6377\u952e",level:2},{value:"\u67e5\u770bReadline\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570\u540d\u79f0",id:"\u67e5\u770breadline\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570\u540d\u79f0",level:3},{value:"\u67e5\u770b\u5f53\u524d\u7ed1\u5b9a\u7684\u6848\u4ef6\u914d\u7f6e\u4e0e\u5176\u5bf9\u5e94\u7684\u529f\u80fd",id:"\u67e5\u770b\u5f53\u524d\u7ed1\u5b9a\u7684\u6848\u4ef6\u914d\u7f6e\u4e0e\u5176\u5bf9\u5e94\u7684\u529f\u80fd",level:3},{value:"\u5df2\u7ecf\u7ed1\u5b9a\u7684\u5feb\u6377\u952e",id:"\u5df2\u7ecf\u7ed1\u5b9a\u7684\u5feb\u6377\u952e",level:3},{value:"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u6267\u884c\u547d\u4ee4shell\u547d\u4ee4\u7684\u5feb\u6377\u952e",id:"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u6267\u884c\u547d\u4ee4shell\u547d\u4ee4\u7684\u5feb\u6377\u952e",level:3},{value:"\u7ed1\u5b9a\u5185\u7f6e\u51fd\u6570\u529f\u80fd",id:"\u7ed1\u5b9a\u5185\u7f6e\u51fd\u6570\u529f\u80fd",level:3},{value:"\u672c\u4f8b\u6765\u81eaCentOS6.4\u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",id:"\u672c\u4f8b\u6765\u81eacentos64\u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",level:3}],c={toc:d};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bash\u7684\u5feb\u6377\u952e"},"Bash\u7684\u5feb\u6377\u952e"),(0,r.kt)("h2",{id:"\u5149\u6807\u79fb\u52a8"},"\u5149\u6807\u79fb\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5feb\u6377\u952e \u63cf\u8ff0\nCtrl + a    \u79fb\u52a8\u5149\u6807\u5230\u884c\u9996\nCtrl + e    \u79fb\u52a8\u5149\u6807\u5230\u884c\u5c3e\nAlt + b \u79fb\u52a8\u5149\u6807\u540e\u9000\u4e00\u4e2a\u5355\u8bcd\uff08\u8bcd\u9996\uff09\nAlt + f \u79fb\u52a8\u5149\u6807\u524d\u8fdb\u4e00\u4e2a\u5355\u8bcd\uff08\u8bcd\u9996\uff09\nCtrl + f    \u5149\u6807\u524d\u8fdb\u4e00\u4e2a\u5b57\u6bcd\nCtrl + b    \u5149\u6807\u540e\u9000\u4e00\u4e2a\u5b57\u6bcd\nCtrl + xx   \u5f53\u524d\u4f4d\u7f6e\u4e0e\u884c\u9996\u4e4b\u95f4\u5149\u6807\u5207\u6362\n")),(0,r.kt)("h2",{id:"\u526a\u5207\u7c98\u8d34"},"\u526a\u5207\u7c98\u8d34"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5feb\u6377\u952e \u63cf\u8ff0\nCtrl + k    \u5220\u9664\u4ece\u5149\u6807\u5230\u884c\u5c3e\nCtrl + u    \u5220\u9664\u4ece\u5149\u6807\u5230\u884c\u9996\nCtrl + w    \u4ece\u5149\u6807\u5411\u524d\u5220\u9664\u4e00\u4e2a\u5355\u8bcd\nAlt + d \u4ece\u5149\u6807\u5411\u540e\u5220\u9664\u4e00\u4e2a\u5355\u8bcd\nCtrl + d    \u5220\u9664\u5149\u6807\u4e0b\u4e00\u4e2a\u5b57\u6bcd\nCtrl + h    \u5220\u9664\u5149\u6807\u524d\u4e00\u4e2a\u5b57\u6bcd\nAlt + t swap(\u5f53\u524d\u5355\u8bcd, \u4e0a\u4e00\u4e2a\u5355\u8bcd)\nCtrl + t    swap(\u5f53\u524d\u5b57\u6bcd, \u4e0a\u4e00\u4e2a\u5b57\u6bcd)\nCtrl + y    \u7c98\u8d34\u4e0a\u4e00\u6b21\u5220\u9664\u7684\u6587\u672c\n")),(0,r.kt)("h2",{id:"\u5927\u5c0f\u5199\u8f6c\u6362"},"\u5927\u5c0f\u5199\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5feb\u6377\u952e \u63cf\u8ff0\nAlt + c \u5927\u5199\u5f53\u524d\u5b57\u6bcd\uff0c\u5e76\u79fb\u52a8\u5149\u6807\u5230\u5355\u8bcd\u5c3e\nAlt + u \u5927\u5199\u4ece\u5f53\u5149\u6807\u5230\u5355\u8bcd\u5c3e\nAlt + l \u5c0f\u5199\u4ece\u5f53\u5149\u6807\u5230\u5355\u8bcd\u5c3e\n")),(0,r.kt)("h2",{id:"\u5386\u53f2\u547d\u4ee4"},"\u5386\u53f2\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5feb\u6377\u952e \u63cf\u8ff0\nCtrl + r    \u5411\u540e\u641c\u7d22\u5386\u53f2\u547d\u4ee4\nCtrl + g    \u9000\u51fa\u641c\u7d22\nCtrl + p    \u5386\u53f2\u4e2d\u4e0a\u4e00\u4e2a\u547d\u4ee4\nCtrl + n    \u5386\u53f2\u4e2d\u4e0b\u4e00\u4e2a\u547d\u4ee4\nAlt + . \u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u5355\u8bcd\n")),(0,r.kt)("h2",{id:"\u7ec8\u7aef\u6307\u4ee4"},"\u7ec8\u7aef\u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5feb\u6377\u952e \u63cf\u8ff0\nCtrl + l    \u6e05\u5c4f\nCtrl + s    \u505c\u6b62\u8f93\u51fa\uff08\u5728Zsh\u4e2d\u4e3a\u5411\u524d\u641c\u7d22\u5386\u53f2\u547d\u4ee4\uff09\nCtrl + q    \u7ee7\u7eed\u8f93\u51fa\nCtrl + c    \u7ec8\u6b62\u5f53\u524d\u547d\u4ee4\nCtrl + z    \u6302\u8d77\u5f53\u524d\u547d\u4ee4\nCtrl + d    \u7ed3\u675f\u8f93\u5165\uff08\u4ea7\u751f\u4e00\u4e2aEOF\uff09\n")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5feb\u6377\u952e"},"\u81ea\u5b9a\u4e49\u5feb\u6377\u952e"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u81ea\u5df1\u7684Bash\u6709\u90a3\u4e48\u4e00\u4e9b\u4e0d\u540c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5df1\u81ea\u5b9a\u4e49\u5feb\u6377\u952e\uff0c\u4f7f\u7528bind\u547d\u4ee4\u5373\u53ef\uff0cBash\u4e2d\u7684\u5feb\u6377\u952e\u5176\u5b9e\u662fReadline\u6765\u63d0\u4f9b\u7684\uff0c\u56e0\u6b64\uff0c\u8fd9\u91cc\u5feb\u6377\u952e\u7684\u8bbe\u7f6e\u5176\u5b9e\u5c31\u662f\u914d\u7f6eReadline\uff0cReadline\u4e2d\u5206\u4e24\u79cd\u5feb\u6377\u952e\uff0c\u4e00\u79cd\u662fReadline\u5185\u90e8\u7684\u51fd\u6570\u5feb\u6377\u952e\uff0c\u53e6\u5916\u4e00\u79cd\u662f\u6267\u884cShell\u547d\u4ee4\uff0c\u8bbe\u7f6e\u7684\u65f6\u5019\u7a0d\u6709\u4e0d\u540c\uff1a"),(0,r.kt)("h3",{id:"\u67e5\u770breadline\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570\u540d\u79f0"},"\u67e5\u770bReadline\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570\u540d\u79f0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bind -l\n")),(0,r.kt)("h3",{id:"\u67e5\u770b\u5f53\u524d\u7ed1\u5b9a\u7684\u6848\u4ef6\u914d\u7f6e\u4e0e\u5176\u5bf9\u5e94\u7684\u529f\u80fd"},"\u67e5\u770b\u5f53\u524d\u7ed1\u5b9a\u7684\u6848\u4ef6\u914d\u7f6e\u4e0e\u5176\u5bf9\u5e94\u7684\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bind -v\n")),(0,r.kt)("h3",{id:"\u5df2\u7ecf\u7ed1\u5b9a\u7684\u5feb\u6377\u952e"},"\u5df2\u7ecf\u7ed1\u5b9a\u7684\u5feb\u6377\u952e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bind -p\n")),(0,r.kt)("h3",{id:"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u6267\u884c\u547d\u4ee4shell\u547d\u4ee4\u7684\u5feb\u6377\u952e"},"\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u6267\u884c\u547d\u4ee4shell\u547d\u4ee4\u7684\u5feb\u6377\u952e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bind -x '\"/C-x/C-l\":ls -al'\n")),(0,r.kt)("p",null,"\u7ed1\u5b9a\u540e\uff0c\u6309","[C-x,C-L]","\u5c31\u80fd\u6267\u884c\n",(0,r.kt)("inlineCode",{parentName:"p"},"ls -al")),(0,r.kt)("h3",{id:"\u7ed1\u5b9a\u5185\u7f6e\u51fd\u6570\u529f\u80fd"},"\u7ed1\u5b9a\u5185\u7f6e\u51fd\u6570\u529f\u80fd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'bind "/C-x":backword-delte-char')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u662f\u8fd9\u884cReadline\u5e93\u4e2d\u7684\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"backword-delte-char")),(0,r.kt)("p",null,"\u8fd9\u79cd\u8bbe\u7f6e\u53ea\u662f\u9488\u5bf9\u5f53\u524d\u7684\u4f1a\u8bdd\u6709\u6548\uff0c\u4e00\u65e6\u4f1a\u8bdd\u4e22\u5931\uff0c\u8fd9\u6837\u8bbe\u7f6e\u7684\u5feb\u6377\u952e\u5c31\u4f1a\u4e22\u5931\uff0c\u4e3a\u4e86\u80fd\u591f\u8ba9\u8bbe\u7f6e\u7684\u5feb\u6377\u952e\u6c38\u4e45\u6709\u6548\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5c06\u5feb\u6377\u952e\u7684\u914d\u7f6e\u5199\u5165\u6587\u4ef6\u3002\u5728Linux\u7cfb\u7edf\u4e2d\uff0c\u80fd\u6c38\u4e45\u4fdd\u5b58\u5feb\u6377\u952e\u7684\u5730\u65b9\u6709\u4e24\u4e2a\uff0c\u5168\u5c40\u548c\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5168\u5c40\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/inputrc"),"\uff0c\u800c\u7528\u6237\u7684\u662f\u5728\u7528\u6237\u7684\u6839\u76ee\u5f55\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"~/.inputrc"),"\uff0c\u5168\u5c40\u7684\u4f1a\u5f71\u54cd\u6240\u6709\u7684\u7528\u6237\uff0c\u800c\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u7684\u53ea\u4f1a\u5bf9\u76f8\u5e94\u7684\u7528\u6237\u4ea7\u751f\u5f71\u54cd\u3002inputrc\u6587\u4ef6\u7684\u5927\u6982\u6837\u5b50\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,r.kt)("h3",{id:"\u672c\u4f8b\u6765\u81eacentos64\u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6"},"\u672c\u4f8b\u6765\u81eaCentOS6.4\u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$if mode=emacs\n\n# for linux console and RH/Debian xterm\n"/e[1~": beginning-of-line\n"/e[4~": end-of-line\n# commented out keymappings for pgup/pgdown to reach begin/end of history\n#"/e[5~": beginning-of-history\n#"/e[6~": end-of-history\n"/e[5~": history-search-backward\n"/e[6~": history-search-forward\n"/e[3~": delete-char\n"/e[2~": quoted-insert\n"/e[5C": forward-word\n"/e[5D": backward-word\n"/e[1;5C": forward-word\n"/e[1;5D": backward-word\n\n# for rxvt\n"/e[8~": end-of-line\n"/eOc": forward-word\n"/eOd": backward-word\n\n# for non RH/Debian xterm, can\'t hurt for RH/DEbian xterm\n"/eOH": beginning-of-line\n"/eOF": end-of-line\n\n# for freebsd console\n"/e[H": beginning-of-line\n"/e[F": end-of-line\n$endif\n')),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c/C\u4ee3\u8868CTRL\uff0c/M\u4ee3\u8868ALT\uff0c/e\u4ee3\u8868ESC\uff0c//\u662f\u53cd\u659c\u6760/\uff0c/'\u662f\u5355\u5f15\u53f7\uff0c/\"\u662f\u53cc\u5f15\u53f7\uff1b"),(0,r.kt)("p",{parentName:"li"},'/C-    control prefix\n/M-    meta prefix\n/e     an escape character\n//     backslash\n/"     literal ", a double quote\n/\u2019     literal \u2019, a single quote')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u8981\u67e5\u770b\u67d0\u4e00\u4e2a\u529f\u80fd\u952e\u7684\u5b57\u7b26\u5e8f\u5217\u53ef\u4ee5\u901a\u8fc7","[CTRL-V]","\u6765\u5b9e\u73b0\uff0c\u6216\u8005\u8f93\u5165cat\u540e\u56de\u8f66\uff0c\u8fdb\u5165\u7f16\u8f91\u4e2d\uff0c\u76f4\u63a5\u6309\u5feb\u6377\u952e")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ef\u80fd\u4f1a\u4f7f\u7528\u516b\u8fdb\u5236\u6216\u8005\u5341\u516d\u8fdb\u5236\u6765\u8868\u793a\u5b57\u7b26\u3002"))),(0,r.kt)("p",null,"\u3010\u5907\u6ce8\u3011",(0,r.kt)("inlineCode",{parentName:"p"},"zsh"),"\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"bindkey"),"."))}s.isMDXComponent=!0}}]);