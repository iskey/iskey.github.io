"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2753],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return r?t.createElement(f,s(s({ref:n},l),{},{components:r})):t.createElement(f,s({ref:n},l))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,s[1]=d;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const a={date:new Date("2016-03-03T16:26:00.000Z"),title:"\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",tags:["broadcast"]},s="\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",d={unversionedId:"Linux/System/\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",id:"Linux/System/\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",title:"\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",description:"sender.c",source:"@site/docs/Linux/System/\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b.md",sourceDirName:"Linux/System",slug:"/Linux/System/\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",permalink:"/Linux/System/\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",draft:!1,editUrl:"https://github.com/iskey/iskey.github.io/tree/main/docs/Linux/System/\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b.md",tags:[{label:"broadcast",permalink:"/tags/broadcast"}],version:"current",frontMatter:{date:"2016-03-03T16:26:00.000Z",title:"\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b",tags:["broadcast"]},sidebar:"tutorialSidebar",previous:{title:"\u6539\u53d8\u8fd0\u884c\u7a0b\u5e8f\u7684\u73af\u5883\u53d8\u91cf",permalink:"/Linux/System/\u6539\u53d8\u8fd0\u884c\u7a0b\u5e8f\u7684\u73af\u5883\u53d8\u91cf"},next:{title:"\u8bc1\u4e66\u7b80\u4ecb",permalink:"/Linux/System/\u8bc1\u4e66\u7b80\u4ecb"}},o={},c=[{value:"sender.c",id:"senderc",level:2},{value:"receiver.c",id:"receiverc",level:2},{value:"Makefile",id:"makefile",level:2}],l={toc:c};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b"},"\u7ec4\u64ad\u901a\u8baf\u5b9e\u4f8b"),(0,i.kt)("h2",{id:"senderc"},"sender.c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdlib.h>  \n#include <sys/types.h>  \n#include <sys/socket.h>  \n#include <netinet/in.h>  \n#include <arpa/inet.h>  \n#include <time.h>  \n#include <string.h>  \n#include <stdio.h>  \n#include <unistd.h>  \n  \n#define HELLO_PORT 12345  \n#define HELLO_GROUP "225.0.0.37"  \n  \nint main(int argc, char *argv[])  \n{  \n    struct sockaddr_in addr;  \n    int fd, cnt;  \n    struct ip_mreq mreq;  \n    char *message="Hello, World!";  \n  \n    /* create what looks like an ordinary UDP socket */  \n    if ((fd=socket(AF_INET,SOCK_DGRAM,0)) < 0)   \n    {  \n        perror("socket");  \n        exit(1);  \n    }  \n  \n    /* set up destination address */  \n    memset(&addr,0,sizeof(addr));  \n    addr.sin_family=AF_INET;  \n    addr.sin_addr.s_addr=inet_addr(HELLO_GROUP);  \n    addr.sin_port=htons(HELLO_PORT);  \n  \n    /* now just sendto() our destination! */  \n    while (1)  \n    {  \n        if (sendto(fd,message, strlen(message), 0, (struct sockaddr *) &addr, sizeof(addr)) < 0)   \n        {  \n            perror("sendto");  \n            exit(1);  \n        }  \n        sleep(1);  \n    }  \n}  \n')),(0,i.kt)("h2",{id:"receiverc"},"receiver.c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdlib.h>  \n#include <sys/types.h>  \n#include <sys/socket.h>  \n#include <netinet/in.h>  \n#include <arpa/inet.h>  \n#include <time.h>  \n#include <string.h>  \n#include <stdio.h>  \n#include <unistd.h>  \n  \n#define HELLO_PORT  12345  \n#define HELLO_GROUP "225.0.0.37"  \n#define MSGBUFSIZE 256  \n  \nint main(int argc, char *argv[])  \n{  \n    struct sockaddr_in addr;  \n    int fd, nbytes,addrlen;  \n    struct ip_mreq mreq;  \n    char msgbuf[MSGBUFSIZE];  \n  \n    u_int yes=1; /*** MODIFICATION TO ORIGINAL */  \n  \n    /* create what looks like an ordinary UDP socket */  \n    if ((fd=socket(AF_INET,SOCK_DGRAM,0)) < 0)   \n    {  \n        perror("socket");  \n        exit(1);  \n    }  \n  \n  \n    /**** MODIFICATION TO ORIGINAL */  \n    /* allow multiple sockets to use the same PORT number */  \n    if (setsockopt(fd,SOL_SOCKET,SO_REUSEADDR,&yes,sizeof(yes)) < 0)   \n    {  \n        perror("Reusing ADDR failed");  \n        exit(1);  \n    }  \n    /*** END OF MODIFICATION TO ORIGINAL */  \n  \n    /* set up destination address */  \n    memset(&addr,0,sizeof(addr));  \n    addr.sin_family=AF_INET;  \n    addr.sin_addr.s_addr=htonl(INADDR_ANY); /* N.B.: differs from sender */  \n    addr.sin_port=htons(HELLO_PORT);  \n  \n    /* bind to receive address */  \n    if (bind(fd,(struct sockaddr *) &addr,sizeof(addr)) < 0)  \n    {  \n        perror("bind");  \n        exit(1);  \n    }  \n  \n    /* use setsockopt() to request that the kernel join a multicast group */  \n    mreq.imr_multiaddr.s_addr=inet_addr(HELLO_GROUP);  \n    mreq.imr_interface.s_addr=htonl(INADDR_ANY);  \n    if (setsockopt(fd,IPPROTO_IP,IP_ADD_MEMBERSHIP,&mreq,sizeof(mreq)) < 0)   \n    {  \n        perror("setsockopt");  \n        exit(1);  \n    }  \n  \n    /* now just enter a read-print loop */  \n    while (1)   \n    {  \n        addrlen=sizeof(addr);  \n        if ((nbytes=recvfrom(fd,msgbuf,MSGBUFSIZE,0, (struct sockaddr *) &addr,(socklen_t*)&addrlen)) < 0)   \n        {  \n            perror("recvfrom");  \n            exit(1);  \n        }  \n        puts(msgbuf);  \n    }  \n  \n    return 0;  \n}  \n')),(0,i.kt)("h2",{id:"makefile"},"Makefile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-makefile"},"CC = gcc  \nCXX = g++  \nCFLAGS = -Wall -D_DEBUG -DDEBUG -g -O0  \nLDFLAGS =   \n  \nMODULE_INC = -I/usr/include  \nMODULE_LIB = -L/usr/lib  \n  \nCFLAGS  += $(MODULE_INC)  \nLDFLAGS += $(MODULE_LIB)  \n  \n  \nSENDOBJS = sender.o  \nRECVOBJS = receiver.o  \n  \n  \nTARGET = sender receiver  \n  \nall: $(TARGET)  \n  \nsender: $(SENDOBJS)  \n\n    $(CXX) -o $@ $^ $(LDFLAGS)  \n  \nreceiver: $(RECVOBJS)  \n    \n    $(CXX) -o $@ $^ $(LDFLAGS)  \n  \nclean:   \n    rm -f *.o \n    rm -f $(TARGET)  \n    rm -f http/*.o  \n# make rule  \n%.o : %.c  \n    $(CC) $(CFLAGS) -c $^ -o $@   \n  \n%.o : %.cpp  \n    $(CC) $(CFLAGS) -c $^ -o $@  \n")))}u.isMDXComponent=!0}}]);