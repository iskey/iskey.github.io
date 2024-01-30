---
date: 2020-02-02 08:00:00+00:00
title: 利用Ansible进行压力测试
categories: ansible
tags: [ansible]
---

# 1. 利用ansible、stress-ng进行压力测试

## 1.1. 压测利器-stress-ng

stress-ng是stress的加强版，完全兼容stress，并在此基础上增加了几百个参数，堪称压测工具中的瑞士军刀。

这里列举几个样例场景：

CPU密集型场景：

```
stress-ng --cpu 6 --timeout 300
```

该命令会尽量占满6个CPU核

IO密集型场景：

```
stress-ng  -i 6 --hdd 1 --timeout 300
```

该命令会开启1个worker不停的读写临时文件，同时启动6个workers不停的调用sync系统调用提交缓存，

进程密集型场景：

```
(( proc_cnt = `nproc`*10 )); stress-ng --cpu $proc_cnt --pthread 1 timeout 300
```

该命令会启动N*10个进程，在只有N个核的系统上，会产生大量的进程切换，模拟进程间竞争CPU的场景

线程密集型场景：

```
stress-ng --cpu `nproc` --pthread 1024 timeout 300
```

该命令会在N个CPU核的系统上，产生N个进程，每个进程1024个线程，模拟线程间竞争CPU的场景


其它常用样例：
```
        stress-ng --vm 8 --vm-bytes 80% -t 1h

              run 8 virtual memory stressors that combined use 80% of the available memory for  1
              hour. Thus each stressor uses 10% of the available memory.

       stress-ng --cpu 4 --io 2 --vm 1 --vm-bytes 1G --timeout 60s

              runs  for  60  seconds with 4 cpu stressors, 2 io stressors and 1 vm stressor using
              1GB of virtual memory.

       stress-ng --iomix 2 --iomix-bytes 10% -t 10m

              runs 2 instances of the mixed I/O stressors using a total of 10% of  the  available
              file  system  space for 10 minutes. Each stressor will use 5% of the available file
              system space.

       stress-ng  --cyclic  1  --cyclic-dist  2500  --cyclic-method  clock_ns  --cyclic-prio  100
       --cyclic-sleep 10000 --hdd 0 -t 1m

              measures  real time scheduling latencies created by the hdd stressor. This uses the
              high resolution nanosecond clock to  measure  latencies  during  sleeps  of  10,000
              nanoseconds.  At  the  end  of 1 minute of stressing, the latency distribution with
              2500 ns intervals will be displayed.  NOTE:  this  must  be  run  with  super  user
              privileges to enable the real time scheduling to get accurate measurements.

       stress-ng --cpu 8 --cpu-ops 800000

              runs 8 cpu stressors and stops after 800000 bogo operations.

       stress-ng --sequential 2 --timeout 2m --metrics

              run 2 simultaneous instances of all the stressors sequentially one by one, each for
              2 minutes and summarise with performance metrics at the end.

       stress-ng --cpu 4 --cpu-method fft --cpu-ops 10000 --metrics-brief

              run 4 FFT cpu stressors, stop after 10000 bogo operations  and  produce  a  summary
              just for the FFT results.

       stress-ng --cpu 0 --cpu-method all -t 1h

              run  cpu  stressors  on  all  online  CPUs  working  through  all the available CPU
              stressors for 1 hour.

       stress-ng --all 4 --timeout 5m

              run 4 instances of all the stressors for 5 minutes.

       stress-ng --random 64

              run 64 stressors that are randomly chosen from all the available stressors.

       stress-ng --cpu 64 --cpu-method all --verify -t 10m --metrics-brief

              run  64  instances  of  all  the  different  cpu  stressors  and  verify  that  the
              computations are correct for 10 minutes with a bogo operations summary at the end.

       stress-ng --sequential 0 -t 10m

              run  all  the  stressors one by one for 10 minutes, with the number of instances of
              each stressor matching the number of online CPUs.

       stress-ng --sequential 8 --class io -t 5m --times

              run all the stressors in the io class one  by  one  for  5  minutes  each,  with  8
              instances  of  each stressor running concurrently and show overall time utilisation
              statistics at the end of the run.

       stress-ng --all 0 --maximize --aggressive

              run all the stressors (1 instance of each per  CPU)  simultaneously,  maximize  the
              settings   (memory   sizes,   file   allocations,   etc.)   and   select  the  most
              demanding/aggressive options.

       stress-ng --random 32 -x numa,hdd,key

              run 32 randomly selected stressors and exclude the numa, hdd and key stressors

       stress-ng --sequential 4 --class vm --exclude bigheap,brk,stack

              run 4 instances of the VM stressors one after each other,  excluding  the  bigheap,
              brk and stack stressors

       stress-ng --taskset 0,2-3 --cpu 3

              run 3 instances of the CPU stressor and pin them to CPUs 0, 2 and 3.

```

## 1.2. 最简单的运维工具-ansible

在小规模的机器上执行命令，最简单非ansible莫属，因为ansible默认是不需要在待运维的机器上安装额外的服务，
只要开启了ssh服务就可以了。

一个简单的ansible使用样例，[simple-example-of-ansible](https://iskey.github.io/blog/2019/07/07/simple-example-of-ansible/)

## 1.3. 如何管理压测进程-给压测进程找个爹

使用ansible进行加压时，如果执行stress-ng命令，然后马上退出，压测工具进程也就被杀死了，这是因为压测工具默认的父进程是ansible的ssh会话
这时候可以使用nohup、setsid命令让stress-ng命令后台执行。
在稍微复杂的场景模拟时，stress-ng可能会启动很多的进程，并且有些时候不仅有stress-ng，而且可能还需要sys-bench等工具，
当需要调整压力时，可能需要杀掉之前的压测进程，再启动新的压测，如果一个一个的找出来并杀掉进程，不仅操作复杂而且经常
会产生僵尸进程。

这时候就需要screen、tmux这样的会话管理工具了，通过screen来统一管理会话，所有的压测进程都被托管在screen里，这样如果需要
关掉所有的压力时，只需要杀掉screen进程就可以了。

例：

```
screen -S stress -d -m stress-ng -c 1 --timeout 300
```

## 1.4. 负载场景剧本设计-playbook

在云计算场景下，经常会需要用压测工具来模拟一些业务场景，stress-ng是最常用到的工具之一，通常ansible+stress-ng就能应付绝大多数的压测场景。
如果需要模拟的CPU、MEM、磁盘IO模型比较多，用命令行就显得不是那么方便了，这时候就可以用playbook。

github上已经有人写好了一个playbook，[ansible-role-stress](https://github.com/CSCfi/ansible-role-stress)。

项目已经在CenstOS 7上测试过了，在Ubuntu上应该也是可以正常工作的。

playbook支持如下角色变量：

- test_duration: stress-ng 超时时间
- 不同类型压测资源的worker数量:
    - cpu_workers
    - vm_workers
    - hdd_workers
- 每个worker的磁盘或内存使用量
    - bytes_per_hdd_worker
    - bytes_per_vm_worker

## 1.5. 自动重试-ansile经常不靠谱

使用playbook操作大量机器时，经常会出现机器执行命令失败，比如网络不通、网络闪断等，这时候需要对失败的机器重新执行命令，playbook可以如下命令进行重试

```
ansible-playbook -i host stress.yml --extra-vars "host=all" --limit @$playbook_retry
```

其中playbook_retry文件里保存的是需要重试的IP列表,可以从执行回显中分析执行结果，通过awk找出执行失败
的IP列表，通过ansible-playbook进行重试。


```
#!/bin/sh

hosts=(
"host1" 
"host2" 
"host3"
)

cpu_load=(15 15 15 15 15 15)
mem_load=(5 5 5 5 5 5)

mkdir -p tmp

host_file="./hosts"

total_result="./tmp/total_result.log"
playbook_result="./tmp/playbook_result.log"
playbook_retry="./tmp/playbook_retry.txt"

echo "" > $total_result

parse_playbook_result()
{
	sed '1,/PLAY RECAP/d' $playbook_result | awk -F" *|=|\t" '
	/unreachable/{
	ip=$1
	ok_cnt=$4
	changed_cnt=$6
	unreachable_cnt=$8
	failed_cnt=$10
	if(unreachable_cnt!=0 || failed_cnt!=0 || rescued_cnt!=0){
		print ip
	}
	}' > $playbook_retry
}

ansible_playbook()
{
	echo "playbook Vars: $2"
	ansible-playbook -i $host_file $1 --extra-vars "$2" >$playbook_result 2>&1

	cat $playbook_result > $total_result
	
	while true
	do
		parse_playbook_result
		RETRY_CNT=$(wc -l $playbook_retry | awk '{print $1}')
		
		if [[ $RETRY_CNT != 0 ]]; then
			echo "Some host will retry:"
			cat $playbook_retry
			ansible-playbook -i $host_file stress_stop.yml --extra-vars "$2" --limit @$playbook_retry >/dev/null 2>&1
			ansible-playbook -i $host_file $1 --extra-vars "$2" --limit @$playbook_retry >$playbook_result 2>&1
			cat $playbook_result > $total_result
		else
			return
		fi
	done
}

for(( i=0; i<${#hosts[@]}; i++ ))
do
  echo "Stress" ${hosts[i]}
  ansible_playbook "stress_start.yml" "host=${hosts[i]} cpu_load=${cpu_load[i]} mem_load=${mem_load[i]}"
done


echo "Over zzz"

```
