---
layout: post
title: "simple example of ansible"
date: 2019-07-07 15:34:11 +0000
comments: true
categories: ansible tool
---

Ansible 是一个自动化运维工具，相似的工具还有SaltStack、Puppet、Chef、Fabric，其中Ansible、SaltStack、Fabri都是用Python实现的，现在使用Python的同学比较多，维护起来也比较顺手，而Puppet、Chef是用ruby写的，各有各的拥趸。

各个工具的对比:

工具 |	语言 |  架构 |	协议
:-----:| :-----:| :-----: | :-----:
Puppet |	Ruby |	C/S |	HTTP 
Chef |	Ruby |	C/S |	HTTP 
Ansible |	Python | 无Client |	SSH 
Saltstack |	Python |	C/S(可无Client) |	SSH/ZMQ/RAET 

----

### 一个简单的使用ansible的例子

我们的例子里，在当前目录有三个文件：`ansible.cfg`,`first.yml`,`hosts`

#### ansible.cfg

其中`ansible.cfg`文件是我们例子的ansible命令的配置文件，这里主要修改inventory字段，指定我们需要使用当前目录的hosts文件作为主机列表配置文件

```C
[defaults]

# some basic default values...

inventory      = ./hosts
#inventory      = /root/work/ansible/hosts
#library        = /usr/share/my_modules/
#remote_tmp     = $HOME/.ansible/tmp
#forks          = 5
#poll_interval  = 15
#sudo_user      = root
#ask_sudo_pass = True
#ask_pass      = True
#transport      = smart
#remote_port    = 22
#module_lang    = C
```

ansible命令执行的时候，会按照如下顺序搜索配置文件:

- ANSIBLE_CONFIG (an environment variable)
- ansible.cfg (in the current directory)
- .ansible.cfg (in the home directory)
- /etc/ansible/ansible.cfg

#### hosts

hosts文件指定了我们需要的管理的主机列表：

```C
# cat hosts
[host_iskey]
x.x.x.1
x.x.x.2


[host_iskey:vars]
ansible_ssh_pass='xxxxxxxx'
ansible_ssh_user='root'
```

#### first.yml

first.yml是我们的playbook，运行了一个很简单的命令，`touch /iskey`

```C  
# cat first.yml
- hosts: host_iskey
  gather_facts: smart
  remote_user: root
  tasks:
    - name: touch_iskey
      command: "/usr/bin/touch /iskey && sleep 3"
```

- hosts:host_iskey

说明要对hosts文件中的host_iskey组的主机列表进行操作

- gater_facts:smart

ansible执行过程中，会收集远程主机的信息，如果每次都收集的话，非常浪费时间，可以设置facts缓存为smart，这样第一次收集之后，后边就不会再收集了，如果不需要收集可以直接设置为`no`来关掉主机信息收集

#### 鉴权方式

##### 密码

ansible可以使用密码方式进行鉴权，前提是需要安装`sshpass`工具，`apt install sshpass`, ssh命令本身不提供参数来支持密码登陆，一般都是通过`sshpass`工具来实现。

需要在hosts文件中，添加用户的密码，如下`host_iskey:vars`字段

```C
# cat hosts
[host_iskey]
x.x.x.1
x.x.x.2

[host_iskey:vars]
ansible_ssh_pass='xxxxxxxx'
ansible_ssh_user='root'
```

##### 秘钥

如果使用秘钥的话，可以用ssh-keygen生成秘钥，在当前目录生成名为ansible的秘钥

    ssh-keygen -f ansible

把生成的公钥，追加到host主机的`.ssh/authorized_keys`文件中去，


```C
# cat hosts
[host_iskey]
x.x.x.1
x.x.x.2

[host_iskey:vars]
ansible_ssh_user='root'
ansible_ssh_private_key_file='./ansible'
```

执行ansible-playbook，

```C
# ansible-playbook  first.yml

PLAY [host_iskey] ****************************************************************************************************************************

TASK [touch_iskey] ***************************************************************************************************************************
 [WARNING]: Consider using the file module with state=touch rather than running 'touch'.  If you need to use command because file is
insufficient you can add 'warn: false' to this command task or set 'command_warnings=False' in ansible.cfg to get rid of this message.

changed: [x.x.x.1]
changed: [x.x.x.2]

PLAY RECAP ***********************************************************************************************************************************
x.x.x.1              : ok=1    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
x.x.x.2               : ok=1    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
****
```

#### 当然，可以通过ansible命令来执行一些简单的命令

```C
ansible -i ./hosts all -m command  -a "touch /xxxx"  --private-key=./key/ansible
```

如果密钥的权限不是700，可能会提醒如下错误

```C
# ansible -i ./ansible/hosts all -m command  -a "touch /isno"  --private-key=./ansible/ansible
x.x.x.1 | UNREACHABLE! => {
    "changed": false,
    "msg": "Failed to connect to the host via ssh: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\r\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\nPermissions 0755 for './ansible' are too open.\r\nIt is required that your private key files are NOT accessible by others.\r\nThis private key will be ignored.\r\nLoad key \"./ansible\": bad permissions\r\nPermission denied (publickey,password).",
    "unreachable": true
}
x.x.x.2 | UNREACHABLE! => {
    "changed": false,
    "msg": "Failed to connect to the host via ssh: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\r\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\nPermissions 0755 for './ansible' are too open.\r\nIt is required that your private key files are NOT accessible by others.\r\nThis private key will be ignored.\r\nLoad key \"./ansible\": bad permissions\r\nPermission denied (publickey,password).",
    "unreachable": true
}
```

当然，如果不想用密钥的方式，也可以把密码直接写在hosts文件里。