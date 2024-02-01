"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(7294);function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,_=function(e,n){if(null==e)return{};var t,r,_={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(_[t]=e[t]);return _}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(_[t]=e[t])}return _}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,_=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(t),p=_,d=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function p(e,n){var t=arguments,_=n&&n.mdxType;if("string"==typeof e||_){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:_,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(7462),_=(t(7294),t(3905));const o={date:new Date("2017-01-02T15:32:00.000Z"),title:"Kernel C.tom for SourceInsight",categories:"SourceInsight",tags:["kernel","sourceInsight"]},i="Kernel C.tom for SourceInsight",a={unversionedId:"Linux/Tools/Kernel C.tom for SourceInsight",id:"Linux/Tools/Kernel C.tom for SourceInsight",title:"Kernel C.tom for SourceInsight",description:"",source:"@site/docs/Linux/Tools/Kernel C.tom for SourceInsight.md",sourceDirName:"Linux/Tools",slug:"/Linux/Tools/Kernel C.tom for SourceInsight",permalink:"/Linux/Tools/Kernel C.tom for SourceInsight",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Linux/Tools/Kernel C.tom for SourceInsight.md",tags:[{label:"kernel",permalink:"/tags/kernel"},{label:"sourceInsight",permalink:"/tags/source-insight"}],version:"current",frontMatter:{date:"2017-01-02T15:32:00.000Z",title:"Kernel C.tom for SourceInsight",categories:"SourceInsight",tags:["kernel","sourceInsight"]},sidebar:"tutorialSidebar",previous:{title:"Git\u4f7f\u7528\u6280\u5de7",permalink:"/Linux/Tools/Git\u4f7f\u7528\u6280\u5de7"},next:{title:"Oh-my-zsh",permalink:"/Linux/Tools/Oh-my-zsh"}},s={},l=[],c={toc:l};function u(e){let{components:n,...t}=e;return(0,_.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,_.kt)("h1",{id:"kernel-ctom-for-sourceinsight"},"Kernel C.tom for SourceInsight"),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre"},";For Linux Kernel Code\nSYSCALL_DEFINE0(name) long sys_##name(void)\nSYSCALL_DEFINE1(name, t1, v1) long sys_##name(t1 v1)\nSYSCALL_DEFINE2(name, t1, v1, t2, v2) long sys_##name(t1 v1, t2 v2)\nSYSCALL_DEFINE3(name, t1, v1, t2, v2, t3, v3) long sys_##name(t1 v1, t2 v2, t3 v3)\nSYSCALL_DEFINE4(name, t1, v1, t2, v2, t3, v3, t4, v4) long sys_##name(t1 v1, t2 v2, t3 v3, t4 v4)\nSYSCALL_DEFINE5(name, t1, v1, t2, v2, t3, v3, t4, v4, t5, v5) long sys_##name(t1 v1, t2 v2, t3 v3, t4 v4, t5 v5)\n__init\n__initdata\n__initconst\n__exitdata\n__exit_call\n__ref\n__refdata\n__refconst\n__init_refok\n__initdata_refok\n__exit_refok\n__exitused\n__exit\n__devinit\n__devinitdata\n__devinitconst\n__devexit\n__devexitdata\n__devexitconst\n__used\n__must_check\n__compiler_offsetof(a,b)\n__always_inline\n__attribute__\n__user\n__kernel\n__safe\n__force\n__nocast\n__iomem\n__chk_user_ptr(x)\n__chk_io_ptr(x)\n__builtin_warning\n__acquires(x)\n__releases(x)\n__acquire(x)\n__release(x)\n__cond_lock(x,c)\n__percpu\nlikely(x)\nunlikely(x)\n__read_mostly\n____cacheline_aligned\n____cacheline_aligned_in_smp\n__cacheline_aligned\n__cacheline_aligned_in_smp\n____cacheline_internodealigned_in_smp\n__cacheline_internodealigned_in_smp\n__rcu\n__refconst\n__refdata\n__reg_oper0\n__reg_oper1\n__bitwise\n__bitwise__\n__aligned_u64\n__aligned_be64\n__aligned_le64\n__naked\n__noreturn\n__pure\n__always_inline\nDRIVER_ATTR(_name, _mode, _show, _store) struct driver_attribute driver_attr_##_name\nCLASS_ATTR(_name, _mode, _show, _store) struct class_attribute class_attr_##_name\nLIST_HEAD(name) struct list_head name\nDEFINE_MUTEX(mutexname) struct mutex mutexname\nDEFINE_TIMER(_name, _function, _expires, _data) struct timer_list _name\nDECLARE_WORK(n, f) struct work_struct n\nDEFINE_SPINLOCK(x) spinlock_t x\nEXPORT_SYMBOL(sym)\nEXPORT_SYMBOL_GPL(sym)\nEXPORT_SYMBOL_GPL_FUTURE(sym)\nDEFINE_IDA(name) struct ida name\nDECLARE_RWSEM(name) struct rw_semaphore name\nDECLARE_BITMAP(name,bits) unsigned long name[bits/32]\nDEFINE_RWLOCK(x) rwlock_t x\n \n```.\n")))}u.isMDXComponent=!0}}]);