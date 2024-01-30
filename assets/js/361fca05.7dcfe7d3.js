"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={date:new Date("2016-06-18T20:21:00.000Z"),title:"Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",tags:["linux","kernel","ARM"]},l="Kernel Defines for ARM",s={unversionedId:"Linux/Kernal/Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",id:"Linux/Kernal/Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",title:"Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",description:"Linux Kernel\u5bf9\u4e8eARM\u7684\u4e00\u4e9b\u6709\u7528\u7684\u5b8f\u5b9a\u4e49.",source:"@site/docs/Linux/Kernal/Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49.md",sourceDirName:"Linux/Kernal",slug:"/Linux/Kernal/Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",permalink:"/Linux/Kernal/Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",draft:!1,editUrl:"https://github.com/iskey/docusaurus-2/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/Kernal/Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49.md",tags:[{label:"linux",permalink:"/tags/linux"},{label:"kernel",permalink:"/tags/kernel"},{label:"ARM",permalink:"/tags/arm"}],version:"current",frontMatter:{date:"2016-06-18T20:21:00.000Z",title:"Kernel\u4e2dARM\u7684\u4e00\u4e9b\u5b8f\u5b9a\u4e49",tags:["linux","kernel","ARM"]},sidebar:"tutorialSidebar",previous:{title:"Ovs Qos",permalink:"/Linux/Architecture/ovs qos"},next:{title:"user mode linux",permalink:"/Linux/Kernal/user mode linux"}},o={},d=[{value:"Initial definitions",id:"initial-definitions",level:2},{value:"Decompressor Symbols",id:"decompressor-symbols",level:2},{value:"ZTEXTADDR",id:"ztextaddr",level:3},{value:"ZBSSADDR",id:"zbssaddr",level:3},{value:"ZRELADDR",id:"zreladdr",level:3},{value:"INITRD_PHYS",id:"initrd_phys",level:3},{value:"INITRD_VIRT",id:"initrd_virt",level:3},{value:"PARAMS_PHYS",id:"params_phys",level:3},{value:"Kernel Symbols",id:"kernel-symbols",level:2},{value:"PHYS_OFFSET",id:"phys_offset",level:3},{value:"PAGE_OFFSET",id:"page_offset",level:3},{value:"TASK_SIZE",id:"task_size",level:3},{value:"TEXTADDR",id:"textaddr",level:3},{value:"DATAADDR",id:"dataaddr",level:3},{value:"VMALLOC_START",id:"vmalloc_start",level:3},{value:"VMALLOC_END",id:"vmalloc_end",level:3},{value:"VMALLOC_OFFSET",id:"vmalloc_offset",level:3},{value:"Architecture Specific Macros",id:"architecture-specific-macros",level:2},{value:"BOOT_MEM(pram,pio,vio)",id:"boot_memprampiovio",level:3},{value:"BOOT_PARAMS",id:"boot_params",level:3},{value:"FIXUP(func)",id:"fixupfunc",level:3},{value:"MAPIO(func)",id:"mapiofunc",level:3},{value:"INITIRQ(func)",id:"initirqfunc",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kernel-defines-for-arm"},"Kernel Defines for ARM"),(0,a.kt)("p",null,"Linux Kernel\u5bf9\u4e8eARM\u7684\u4e00\u4e9b\u6709\u7528\u7684\u5b8f\u5b9a\u4e49."),(0,a.kt)("h2",{id:"initial-definitions"},"Initial definitions"),(0,a.kt)("p",null,"The following symbol definitions rely on you knowing the translation that\n",(0,a.kt)("inlineCode",{parentName:"p"},"__virt_to_phys()")," does for your machine.  This macro converts the passed\nvirtual address to a physical address.  Normally, it is simply:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"phys = virt - PAGE_OFFSET + PHYS_OFFSET")),(0,a.kt)("h2",{id:"decompressor-symbols"},"Decompressor Symbols"),(0,a.kt)("h3",{id:"ztextaddr"},"ZTEXTADDR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Start address of decompressor.  There's no point in talking about\nvirtual or physical addresses here, since the MMU will be off at\nthe time when you call the decompressor code.  You normally call\nthe kernel at this address to start it booting.  This doesn't have\nto be located in RAM, it can be in flash or other read-only or\nread-write addressable medium.\n")),(0,a.kt)("h3",{id:"zbssaddr"},"ZBSSADDR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Start address of zero-initialised work area for the decompressor.\nThis must be pointing at RAM.  The decompressor will zero initialise\nthis for you.  Again, the MMU will be off.\n")),(0,a.kt)("h3",{id:"zreladdr"},"ZRELADDR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This is the address where the decompressed kernel will be written,\nand eventually executed.  The following constraint must be valid:\n\n    __virt_to_phys(TEXTADDR) == ZRELADDR\n\nThe initial part of the kernel is carefully coded to be position\nindependent.\n")),(0,a.kt)("h3",{id:"initrd_phys"},"INITRD_PHYS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Physical address to place the initial RAM disk.  Only relevant if\nyou are using the bootpImage stuff (which only works on the old\nstruct param_struct).\n")),(0,a.kt)("h3",{id:"initrd_virt"},"INITRD_VIRT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Virtual address of the initial RAM disk.  The following  constraint\nmust be valid:\n\n    __virt_to_phys(INITRD_VIRT) == INITRD_PHYS\n")),(0,a.kt)("h3",{id:"params_phys"},"PARAMS_PHYS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Physical address of the struct param_struct or tag list, giving the\nkernel various parameters about its execution environment.\n")),(0,a.kt)("h2",{id:"kernel-symbols"},"Kernel Symbols"),(0,a.kt)("h3",{id:"phys_offset"},"PHYS_OFFSET"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Physical start address of the first bank of RAM.\n")),(0,a.kt)("h3",{id:"page_offset"},"PAGE_OFFSET"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Virtual start address of the first bank of RAM.  During the kernel\nboot phase, virtual address PAGE_OFFSET will be mapped to physical\naddress PHYS_OFFSET, along with any other mappings you supply.\nThis should be the same value as TASK_SIZE.\n")),(0,a.kt)("h3",{id:"task_size"},"TASK_SIZE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The maximum size of a user process in bytes.  Since user space\nalways starts at zero, this is the maximum address that a user\nprocess can access+1.  The user space stack grows down from this\naddress.\n\nAny virtual address below TASK_SIZE is deemed to be user process\narea, and therefore managed dynamically on a process by process\nbasis by the kernel.  I'll call this the user segment.\n\nAnything above TASK_SIZE is common to all processes.  I'll call\nthis the kernel segment.\n\n(In other words, you can't put IO mappings below TASK_SIZE, and\nhence PAGE_OFFSET).\n")),(0,a.kt)("h3",{id:"textaddr"},"TEXTADDR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Virtual start address of kernel, normally PAGE_OFFSET + 0x8000.\nThis is where the kernel image ends up.  With the latest kernels,\nit must be located at 32768 bytes into a 128MB region.  Previous\nkernels placed a restriction of 256MB here.\n")),(0,a.kt)("h3",{id:"dataaddr"},"DATAADDR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Virtual address for the kernel data segment.  Must not be defined\nwhen using the decompressor.\n")),(0,a.kt)("h3",{id:"vmalloc_start"},"VMALLOC_START"),(0,a.kt)("h3",{id:"vmalloc_end"},"VMALLOC_END"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Virtual addresses bounding the vmalloc() area.  There must not be\nany static mappings in this area; vmalloc will overwrite them.\nThe addresses must also be in the kernel segment (see above).\nNormally, the vmalloc() area starts VMALLOC_OFFSET bytes above the\nlast virtual RAM address (found using variable high_memory).\n")),(0,a.kt)("h3",{id:"vmalloc_offset"},"VMALLOC_OFFSET"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Offset normally incorporated into VMALLOC_START to provide a hole\nbetween virtual RAM and the vmalloc area.  We do this to allow\nout of bounds memory accesses (eg, something writing off the end\nof the mapped memory map) to be caught.  Normally set to 8MB.\n")),(0,a.kt)("h2",{id:"architecture-specific-macros"},"Architecture Specific Macros"),(0,a.kt)("h3",{id:"boot_memprampiovio"},"BOOT_MEM(pram,pio,vio)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`pram' specifies the physical start address of RAM.  Must always\nbe present, and should be the same as PHYS_OFFSET.\n\n`pio' is the physical address of an 8MB region containing IO for\nuse with the debugging macros in arch/arm/kernel/debug-armv.S.\n\n`vio' is the virtual address of the 8MB debugging region.\n\nIt is expected that the debugging region will be re-initialised\nby the architecture specific code later in the code (via the\nMAPIO function).\n")),(0,a.kt)("h3",{id:"boot_params"},"BOOT_PARAMS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Same as, and see PARAMS_PHYS.\n")),(0,a.kt)("h3",{id:"fixupfunc"},"FIXUP(func)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Machine specific fixups, run before memory subsystems have been\ninitialised.\n")),(0,a.kt)("h3",{id:"mapiofunc"},"MAPIO(func)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Machine specific function to map IO areas (including the debug\nregion above).\n")),(0,a.kt)("h3",{id:"initirqfunc"},"INITIRQ(func)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Machine specific function to initialise interrupts.\n")))}p.isMDXComponent=!0}}]);