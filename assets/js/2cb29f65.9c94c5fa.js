"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[697],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(b,o(o({ref:n},s),{},{components:t})):a.createElement(b,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={title:"\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",date:"2019-07-13 11:45:27 +0000",comments:!0,tags:["MQ","linux"]},o="\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",l={unversionedId:"Linux/System/\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",id:"Linux/System/\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",title:"\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",description:"RabbitMQ",source:"@site/docs/Linux/System/\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50.md",sourceDirName:"Linux/System",slug:"/Linux/System/\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",permalink:"/Linux/System/\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",draft:!1,editUrl:"https://github.com/iskey/docusaurus-2/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/System/\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50.md",tags:[{label:"MQ",permalink:"/tags/mq"},{label:"linux",permalink:"/tags/linux"}],version:"current",frontMatter:{title:"\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50",date:"2019-07-13 11:45:27 +0000",comments:!0,tags:["MQ","linux"]},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u4e2a\u4f7f\u7528Ansible\u7684\u4f8b\u5b50",permalink:"/Linux/System/\u4e00\u4e2a\u4f7f\u7528Ansible\u7684\u4f8b\u5b50"},next:{title:"\u4e00\u4e2a\u4f7f\u7528Systemd\u7684\u4f8b\u5b50",permalink:"/Linux/System/\u4e00\u4e2a\u4f7f\u7528Systemd\u7684\u4f8b\u5b50"}},c={},u=[{value:"RabbitMQ",id:"rabbitmq",level:2},{value:"RabbitMQ\u8bbe\u7f6e\u8fdc\u7a0b\u94fe\u63a5\u8d26\u53f7\u5bc6\u7801",id:"rabbitmq\u8bbe\u7f6e\u8fdc\u7a0b\u94fe\u63a5\u8d26\u53f7\u5bc6\u7801",level:3},{value:"\u8f6e\u8be2\u6d88\u8d39\u6a21\u5f0f",id:"\u8f6e\u8be2\u6d88\u8d39\u6a21\u5f0f",level:3},{value:"producer\u751f\u4ea7\u8005",id:"producer\u751f\u4ea7\u8005",level:4},{value:"consumer\u6d88\u8d39\u8005",id:"consumer\u6d88\u8d39\u8005",level:4},{value:"\u961f\u5217\u6301\u4e45\u5316",id:"\u961f\u5217\u6301\u4e45\u5316",level:3},{value:"producer\u751f\u4ea7\u8005",id:"producer\u751f\u4ea7\u8005-1",level:4},{value:"consumer\u6d88\u8d39\u8005",id:"consumer\u6d88\u8d39\u8005-1",level:4},{value:"\u5e7f\u64ad\u6a21\u5f0f",id:"\u5e7f\u64ad\u6a21\u5f0f",level:3},{value:"consumer\u751f\u4ea7\u8005",id:"consumer\u751f\u4ea7\u8005",level:4},{value:"producer\u751f\u4ea7\u8005",id:"producer\u751f\u4ea7\u8005-2",level:4}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e00\u4e2a\u4f7f\u7528rabbitmq\u7684\u4f8b\u5b50"},"\u4e00\u4e2a\u4f7f\u7528RabbitMQ\u7684\u4f8b\u5b50"),(0,r.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,r.kt)("p",null,"MQ\u5e76\u4e0d\u662fpython\u5185\u7f6e\u7684\u6a21\u5757\uff0c\u800c\u662f\u4e00\u4e2a\u9700\u8981\u4f60\u989d\u5916\u5b89\u88c5\uff08ubuntu\u53ef\u76f4\u63a5apt-get\u5176\u4f59\u8bf7\u81ea\u884c\u767e\u5ea6\u3002\uff09\u7684\u7a0b\u5e8f\uff0c\u5b89\u88c5\u5b8c\u6bd5\u540e\u53ef\u901a\u8fc7python\u4e2d\u5185\u7f6e\u7684pika\u6a21\u5757\u6765\u8c03\u7528MQ\u53d1\u9001\u6216\u63a5\u6536\u961f\u5217\u8bf7\u6c42\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u770b\u51e0\u79cdpython\u8c03\u7528MQ\u7684\u6a21\u5f0f\uff08\u4f5c\u8005\u81ea\u5b9a\u4e49\u4e2d\u6587\u5f62\u8c61\u7684\u6a21\u5f0f\u540d\u79f0\uff09\u4e0e\u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"rabbitmq\u8bbe\u7f6e\u8fdc\u7a0b\u94fe\u63a5\u8d26\u53f7\u5bc6\u7801"},"RabbitMQ\u8bbe\u7f6e\u8fdc\u7a0b\u94fe\u63a5\u8d26\u53f7\u5bc6\u7801"),(0,r.kt)("p",null,"\u542f\u52a8rabbitmq web\u670d\u52a1\uff1a\n\u8fdc\u7a0b\u8bbf\u95eerabbitmq:\u81ea\u5df1\u589e\u52a0\u4e00\u4e2a\u7528\u6237\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2aadmin\u7528\u6237\uff1asudo rabbitmqctl add_user admin 123123"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8be5\u7528\u6237\u4e3aadministrator\u89d2\u8272\uff1asudo rabbitmqctl set_user_tags admin administrator"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6743\u9650\uff1asudo rabbitmqctl  set_permissions  -p  '/'  admin '.' '.' '.'"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u542frabbitmq\u670d\u52a1\uff1asudo service rabbitmq-server restart\n\u4e4b\u540e\u5c31\u80fd\u7528admin\u7528\u6237\u8fdc\u7a0b\u8fde\u63a5rabbitmq server\u4e86\u3002")),(0,r.kt)("h3",{id:"\u8f6e\u8be2\u6d88\u8d39\u6a21\u5f0f"},"\u8f6e\u8be2\u6d88\u8d39\u6a21\u5f0f"),(0,r.kt)("p",null,"\u6b64\u6a21\u5f0f\u4e0b\uff0c\u53d1\u9001\u961f\u5217\u7684\u4e00\u65b9\u628a\u6d88\u606f\u5b58\u5165mq\u7684\u6307\u5b9a\u961f\u5217\u540e\uff0c\u82e5\u6709\u6d88\u8d39\u8005\u7aef\u8054\u5165\u76f8\u5e94\u961f\u5217\uff0c\u5373\u4f1a\u83b7\u53d6\u5230\u6d88\u606f\uff0c\u5e76\u4e14\u961f\u5217\u4e2d\u7684\u6d88\u606f\u4f1a\u88ab\u6d88\u8d39\u6389\u3002"),(0,r.kt)("p",null,"\u82e5\u6709\u591a\u4e2a\u6d88\u8d39\u7aef\u540c\u65f6\u8fde\u63a5\u7740\u961f\u5217\uff0c\u5219\u4f1a\u5df2\u8f6e\u8be2\u7684\u65b9\u5f0f\u5c06\u961f\u5217\u4e2d\u7684\u6d88\u606f\u6d88\u8d39\u6389\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u4ee3\u7801\u5b9e\u4f8b\uff1a"),(0,r.kt)("h4",{id:"producer\u751f\u4ea7\u8005"},"producer\u751f\u4ea7\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# !/usr/bin/env python\nimport pika\ncredentials = pika.PlainCredentials('admin','123456')\nconnection = pika.BlockingConnection(pika.ConnectionParameters(\n    '192.168.56.19',5672,'/',credentials))\nchannel = connection.channel()\n\n# \u58f0\u660equeue\nchannel.queue_declare(queue='balance')\n\n# n RabbitMQ a message can never be sent directly to the queue, it always needs to go through an exchange.\nchannel.basic_publish(exchange='',\n                      routing_key='balance',\n                      body='Hello World!')\nprint(\" [x] Sent 'Hello World!'\")\nconnection.close()\n")),(0,r.kt)("p",null,"\u53d1\u9001\u8fc7\u961f\u5217\u540e\uff0c\u53ef\u5728MQ\u670d\u52a1\u5668\u4e2d\u67e5\u770b\u961f\u5217\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost ~]# rabbitmqctl list_queues\nListing queues ...\nhello    1\n")),(0,r.kt)("h4",{id:"consumer\u6d88\u8d39\u8005"},"consumer\u6d88\u8d39\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# _*_coding:utf-8_*_\n__author__ = 'Alex Li'\nimport pika\n\ncredentials = pika.PlainCredentials('admin','123456')\nconnection = pika.BlockingConnection(pika.ConnectionParameters(\n    '192.168.56.19',5672,'/',credentials))\nchannel = connection.channel()\n\n# You may ask why we declare the queue again \u2012 we have already declared it in our previous code.\n# We could avoid that if we were sure that the queue already exists. For example if send.py program\n# was run before. But we're not yet sure which program to run first. In such cases it's a good\n# practice to repeat declaring the queue in both programs.\nchannel.queue_declare(queue='balance')\n\n\ndef callback(ch, method, properties, body):\n    print(\" [x] Received %r\" % body)\n\n\nchannel.basic_consume(callback,\n                      queue='balance',\n                      no_ack=True)\n\nprint(' [*] Waiting for messages. To exit press CTRL+C')\nchannel.start_consuming()\n")),(0,r.kt)("p",null,"\u63a5\u6536\u961f\u5217\u540e\uff0c\u67e5\u770b\u4e00\u4e0b\u961f\u5217\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost ~]#  rabbitmqctl list_queues\nListing queues ...\nhello    0\n")),(0,r.kt)("h3",{id:"\u961f\u5217\u6301\u4e45\u5316"},"\u961f\u5217\u6301\u4e45\u5316"),(0,r.kt)("p",null,"\u5f53rabbitMQ\u610f\u5916\u5b95\u673a\u65f6\uff0c\u53ef\u80fd\u4f1a\u6709\u6301\u4e45\u5316\u4fdd\u5b58\u961f\u5217\u7684\u9700\u6c42\uff08\u961f\u5217\u4e2d\u7684\u6d88\u606f\u4e0d\u6d88\u5931\uff09\u3002"),(0,r.kt)("h4",{id:"producer\u751f\u4ea7\u8005-1"},"producer\u751f\u4ea7\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# !/usr/bin/env python\nimport pika\n\ncredentials = pika.PlainCredentials('admin','123456')\nconnection = pika.BlockingConnection(pika.ConnectionParameters(\n    '192.168.56.19',5672,'/',credentials))\nchannel = connection.channel()\n\n# \u58f0\u660equeue\nchannel.queue_declare(queue='durable',durable=True)\n\n# n RabbitMQ a message can never be sent directly to the queue, it always needs to go through an exchange.\nchannel.basic_publish(exchange='',\n                      routing_key='durable',\n                      body='Hello cheng!',\n                      properties=pika.BasicProperties(\n                          delivery_mode=2,  # make message persistent\n                      )\n                      )\nprint(\" [x] Sent 'Hello cheng!'\")\nconnection.close()\n")),(0,r.kt)("p",null,"\u6267\u884c\u540e\u67e5\u770b\u961f\u5217\uff0c\u8bb0\u4e0b\u961f\u5217\u540d\u5b57\u4e0e\u961f\u5217\u4e2d\u6240\u542b\u6d88\u606f\u7684\u6570\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost ~]# rabbitmqctl list_queues\nListing queues ...\ndurable    1\n#\u91cd\u542frabbitmq\n[root@localhost ~]# systemctl restart rabbitmq-server\n#\u91cd\u542f\u5b8c\u6bd5\u540e\u518d\u6b21\u67e5\u770b\n[root@localhost ~]# rabbitmqctl list_queues\nListing queues ...\ndurable   #\u961f\u5217\u4ee5\u53ca\u6d88\u606f\u5e76\u672a\u6d88\u5931\n")),(0,r.kt)("h4",{id:"consumer\u6d88\u8d39\u8005-1"},"consumer\u6d88\u8d39\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# _*_coding:utf-8_*_\n__author__ = 'Alex Li'\nimport pika\n\ncredentials = pika.PlainCredentials('admin','123456')\nconnection = pika.BlockingConnection(pika.ConnectionParameters(\n    '192.168.56.19',5672,'/',credentials))\nchannel = connection.channel()\n\n# You may ask why we declare the queue again \u2012 we have already declared it in our previous code.\n# We could avoid that if we were sure that the queue already exists. For example if send.py program\n# was run before. But we're not yet sure which program to run first. In such cases it's a good\n# practice to repeat declaring the queue in both programs.\nchannel.queue_declare(queue='durable',durable=True)\n\n\ndef callback(ch, method, properties, body):\n    print(\" [x] Received %r\" % body)\n    ch.basic_ack(delivery_tag=method.delivery_tag)\n\nchannel.basic_consume(callback,\n                      queue='durable',\n                      #no_ack=True\n                      )\n\nprint(' [*] Waiting for messages. To exit press CTRL+C')\nchannel.start_consuming()\n")),(0,r.kt)("p",null,"\u53ef\u6b63\u786e\u63a5\u6536\u5230\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u518d\u6b21\u67e5\u770b\u961f\u5217\u7684\u60c5\u51b5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost ~]# rabbitmqctl list_queues\nListing queues ...\ndurable    0\n")),(0,r.kt)("h3",{id:"\u5e7f\u64ad\u6a21\u5f0f"},"\u5e7f\u64ad\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5f53producer\u53d1\u9001\u6d88\u606f\u5230\u961f\u5217\u540e\uff0c\u6240\u6709\u7684consumer\u90fd\u4f1a\u6536\u5230\u6d88\u606f\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b64\u6a21\u5f0f\u4e0bproducer\u4e0econcerned\u4e4b\u95f4\u7684\u5173\u7cfb\u7c7b\u4f3c\u4e0e\u5e7f\u64ad\u7535\u53f0\u4e0e\u6536\u97f3\u673a\uff0c\u5982\u679c\u5e7f\u64ad\u540e\u6536\u97f3\u673a\u6ca1\u6709\u63a5\u53d7\u5230\uff0c\u90a3\u4e48\u6d88\u606f\u5c31\u4f1a\u4e22\u5931\u3002"),(0,r.kt)("p",null,"\u5efa\u8bae\u5148\u6267\u884cconsumer"),(0,r.kt)("h4",{id:"consumer\u751f\u4ea7\u8005"},"consumer\u751f\u4ea7\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# _*_coding:utf-8_*_\n__author__ = 'Alex Li'\nimport pika\n\ncredentials = pika.PlainCredentials('admin','123456')\nconnection = pika.BlockingConnection(pika.ConnectionParameters(\n    '192.168.56.19',5672,'/',credentials))\nchannel = connection.channel()\n\nchannel.exchange_declare(exchange='Clogs',\n                         type='fanout')\n\nresult = channel.queue_declare(exclusive=True)  # \u4e0d\u6307\u5b9aqueue\u540d\u5b57,rabbit\u4f1a\u968f\u673a\u5206\u914d\u4e00\u4e2a\u540d\u5b57,exclusive=True\u4f1a\u5728\u4f7f\u7528\u6b64queue\u7684\u6d88\u8d39\u8005\u65ad\u5f00\u540e,\u81ea\u52a8\u5c06queue\u5220\u9664\nqueue_name = result.method.queue\n\nchannel.queue_bind(exchange='Clogs',\n                   queue=queue_name)\n\nprint(' [*] Waiting for logs. To exit press CTRL+C')\n\n\ndef callback(ch, method, properties, body):\n    print(\" [x] %r\" % body)\n\n\nchannel.basic_consume(callback,\n                      queue=queue_name,\n                      no_ack=True)\n\nchannel.start_consuming()\n")),(0,r.kt)("h4",{id:"producer\u751f\u4ea7\u8005-2"},"producer\u751f\u4ea7\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pika\nimport sys\n\ncredentials = pika.PlainCredentials('admin','123456')\nconnection = pika.BlockingConnection(pika.ConnectionParameters(\n    '192.168.56.19',5672,'/',credentials))\nchannel = connection.channel()\n\nchannel.exchange_declare(exchange='Clogs',\n                         type='fanout')\n\nmessage = ' '.join(sys.argv[1:]) or \"info: Hello World!\"\nchannel.basic_publish(exchange='Clogs',\n                      routing_key='',\n                      body=message)\nprint(\" [x] Sent %r\" % message)\nconnection.close()\n")))}p.isMDXComponent=!0}}]);