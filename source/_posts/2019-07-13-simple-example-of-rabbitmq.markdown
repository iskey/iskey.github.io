---
layout: post
title: "simple_example_of_rabbitmq"
date: 2019-07-13 11:45:27 +0000
comments: true
categories: tool MQ
---


# simple example of rabbitmq

关于python的queue介绍
关于python的队列，内置的有两种，一种是线程queue，另一种是进程queue，但是这两种queue都是只能在同一个进程下的线程间或者父进程与子进程之间进行队列通讯，并不能进行程序与程序之间的信息交换，这时候我们就需要一个中间件，来实现程序之间的通讯。

## RabbitMQ
MQ并不是python内置的模块，而是一个需要你额外安装（ubuntu可直接apt-get其余请自行百度。）的程序，安装完毕后可通过python中内置的pika模块来调用MQ发送或接收队列请求。接下来我们就看几种python调用MQ的模式（作者自定义中文形象的模式名称）与方法。

### RabbitMQ设置远程链接账号密码
启动rabbitmq web服务：
远程访问rabbitmq:自己增加一个用户，步骤如下：
- 创建一个admin用户：sudo rabbitmqctl add_user admin 123123
- 设置该用户为administrator角色：sudo rabbitmqctl set_user_tags admin administrator
- 设置权限：sudo rabbitmqctl  set_permissions  -p  '/'  admin '.' '.' '.'
- 重启rabbitmq服务：sudo service rabbitmq-server restart
之后就能用admin用户远程连接rabbitmq server了。

### 轮询消费模式
此模式下，发送队列的一方把消息存入mq的指定队列后，若有消费者端联入相应队列，即会获取到消息，并且队列中的消息会被消费掉。

若有多个消费端同时连接着队列，则会已轮询的方式将队列中的消息消费掉。

接下来是代码实例：

#### producer生产者

```python
# !/usr/bin/env python
import pika
credentials = pika.PlainCredentials('admin','123456')
connection = pika.BlockingConnection(pika.ConnectionParameters(
    '192.168.56.19',5672,'/',credentials))
channel = connection.channel()

# 声明queue
channel.queue_declare(queue='balance')

# n RabbitMQ a message can never be sent directly to the queue, it always needs to go through an exchange.
channel.basic_publish(exchange='',
                      routing_key='balance',
                      body='Hello World!')
print(" [x] Sent 'Hello World!'")
connection.close()
```

发送过队列后，可在MQ服务器中查看队列状态

```
[root@localhost ~]# rabbitmqctl list_queues
Listing queues ...
hello    1
```

#### consumer消费者

```python
# _*_coding:utf-8_*_
__author__ = 'Alex Li'
import pika

credentials = pika.PlainCredentials('admin','123456')
connection = pika.BlockingConnection(pika.ConnectionParameters(
    '192.168.56.19',5672,'/',credentials))
channel = connection.channel()

# You may ask why we declare the queue again ‒ we have already declared it in our previous code.
# We could avoid that if we were sure that the queue already exists. For example if send.py program
# was run before. But we're not yet sure which program to run first. In such cases it's a good
# practice to repeat declaring the queue in both programs.
channel.queue_declare(queue='balance')


def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)


channel.basic_consume(callback,
                      queue='balance',
                      no_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()
```

接收队列后，查看一下队列状态

```
[root@localhost ~]#  rabbitmqctl list_queues
Listing queues ...
hello    0
```
 
### 队列持久化
当rabbitMQ意外宕机时，可能会有持久化保存队列的需求（队列中的消息不消失）。

#### producer生产者

```python
# !/usr/bin/env python
import pika

credentials = pika.PlainCredentials('admin','123456')
connection = pika.BlockingConnection(pika.ConnectionParameters(
    '192.168.56.19',5672,'/',credentials))
channel = connection.channel()

# 声明queue
channel.queue_declare(queue='durable',durable=True)

# n RabbitMQ a message can never be sent directly to the queue, it always needs to go through an exchange.
channel.basic_publish(exchange='',
                      routing_key='durable',
                      body='Hello cheng!',
                      properties=pika.BasicProperties(
                          delivery_mode=2,  # make message persistent
                      )
                      )
print(" [x] Sent 'Hello cheng!'")
connection.close()
```

执行后查看队列，记下队列名字与队列中所含消息的数量


```
[root@localhost ~]# rabbitmqctl list_queues
Listing queues ...
durable    1
#重启rabbitmq
[root@localhost ~]# systemctl restart rabbitmq-server
#重启完毕后再次查看
[root@localhost ~]# rabbitmqctl list_queues
Listing queues ...
durable   #队列以及消息并未消失
```

#### consumer消费者

```python
# _*_coding:utf-8_*_
__author__ = 'Alex Li'
import pika

credentials = pika.PlainCredentials('admin','123456')
connection = pika.BlockingConnection(pika.ConnectionParameters(
    '192.168.56.19',5672,'/',credentials))
channel = connection.channel()

# You may ask why we declare the queue again ‒ we have already declared it in our previous code.
# We could avoid that if we were sure that the queue already exists. For example if send.py program
# was run before. But we're not yet sure which program to run first. In such cases it's a good
# practice to repeat declaring the queue in both programs.
channel.queue_declare(queue='durable',durable=True)


def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    ch.basic_ack(delivery_tag=method.delivery_tag)

channel.basic_consume(callback,
                      queue='durable',
                      #no_ack=True
                      )

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()
```

可正确接收到信息。

再次查看队列的情况。

```
[root@localhost ~]# rabbitmqctl list_queues
Listing queues ...
durable    0
```

### 广播模式

当producer发送消息到队列后，所有的consumer都会收到消息，需要注意的是，此模式下producer与concerned之间的关系类似与广播电台与收音机，如果广播后收音机没有接受到，那么消息就会丢失。

建议先执行consumer

#### consumer生产者

```python
# _*_coding:utf-8_*_
__author__ = 'Alex Li'
import pika

credentials = pika.PlainCredentials('admin','123456')
connection = pika.BlockingConnection(pika.ConnectionParameters(
    '192.168.56.19',5672,'/',credentials))
channel = connection.channel()

channel.exchange_declare(exchange='Clogs',
                         type='fanout')

result = channel.queue_declare(exclusive=True)  # 不指定queue名字,rabbit会随机分配一个名字,exclusive=True会在使用此queue的消费者断开后,自动将queue删除
queue_name = result.method.queue

channel.queue_bind(exchange='Clogs',
                   queue=queue_name)

print(' [*] Waiting for logs. To exit press CTRL+C')


def callback(ch, method, properties, body):
    print(" [x] %r" % body)


channel.basic_consume(callback,
                      queue=queue_name,
                      no_ack=True)

channel.start_consuming()
```

#### producer生产者

```python
import pika
import sys

credentials = pika.PlainCredentials('admin','123456')
connection = pika.BlockingConnection(pika.ConnectionParameters(
    '192.168.56.19',5672,'/',credentials))
channel = connection.channel()

channel.exchange_declare(exchange='Clogs',
                         type='fanout')

message = ' '.join(sys.argv[1:]) or "info: Hello World!"
channel.basic_publish(exchange='Clogs',
                      routing_key='',
                      body=message)
print(" [x] Sent %r" % message)
connection.close()
```