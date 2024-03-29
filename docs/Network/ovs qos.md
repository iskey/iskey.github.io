---
title: Ovs Qos
date: 2020-02-08 11:28:15 +0800
comments: true
tags:
  - ovs
---
# OVS Qos

## ovs command

[ovs 命令手册](https://docs.pica8.com/pages/viewpage.action?pageId=3083175)

## useful command

```bash
$ ovs-vsctl list port tap53eeb988-c7
_uuid               : 4712ae65-bced-4ee3-bf7d-3b7fa1e52bb7
bond_active_slave   : []
bond_downdelay      : 0
bond_fake_iface     : false
bond_mode           : []
bond_updelay        : 0
external_ids        : {}
fake_bridge         : false
interfaces          : [1fe8bb0a-6383-45ba-bc86-46e1de03f4e0]
lacp                : []
mac                 : []
name                : "tap53eeb988-c7"
other_config        : {net_uuid="ea7d53f9-45c6-4027-98b5-23053d10373b", network_type=vlan, physical_network="physnet1", segmentation_id="332", tag="4"}
qos                 : 82bd0134-4e76-405a-ac1d-22b4ea43e55a
rstp_statistics     : {}
rstp_status         : {}
statistics          : {}
status              : {}
tag                 : 4
trunks              : []
vlan_mode           : []
```

### 查看QOS属性
```
$ ovs-vsctl list qos 82bd0134-4e76-405a-ac1d-22b4ea43e55a
_uuid               : 82bd0134-4e76-405a-ac1d-22b4ea43e55a
external_ids        : {}
other_config        : {max-rate="800000000"}
queues              : {0=cc4e5d2e-2dbb-4e5b-a682-d6a28bd7b743}
type                : linux-htb
```

### 删除QOS并清除网卡QOS

```bash
ovs-vsctl -- destroy QoS 82bd0134-4e76-405a-ac1d-22b4ea43e55a -- clear Port tap53eeb988 qos
```

### libvirtd 限速接口

Libvirtd默认提供domiftune限制网卡流量

### 查看虚机接口的限速设置

```bash
virsh  domiftune 4ffbd71f-3324-4500-8636-f9a275b6e479 tap53eeb988
```

### 设置虚机接口限速

```bash
$ virsh domiftune 4ffbd71f-3324-4500-8636-f9a275b6e479 tap53eeb988 --inbound 700000,800000,800000 --outbount 700000,800000,800000 --live
```

单位如下：

```bash
average bandwidth   kilobytes/second 
peak bandwidth      kilobytes/second 
burst size          kilobytes
```

这里要注意的是domiftune只针对网络模式为nat，route等方式，对模型为bridge, passthrough, private,和hostdev是不支持限制的。