---
title: Shell获取CPU利用率
date: 2018-05-05 22:11:45 +0800
comments: true
categories: shell 
tags: [cpu]
---

# Shell获取CPU利用率

通过shell获取每个CPU核的CPU使用率，并放到`g_per_cpu_usage`数组中，通过sort对该数组进行排序，取TOP 3取平均算的整机的CPU使用率。

## /proc/stat 

```bash

#!/bin/sh

set -e
set -o functrace
function handle_error {
    local retval=$?
    local line=${last_lineno:-$1}
    echo "Failed at $line: $BASH_COMMAND"
    echo "Trace: " "$@"
    exit $retval
}

#CPU core number
g_cpu_num=$(nproc)
g_cpu_num=$(($g_cpu_num - 1))

#初始化每个CPU核的上一次时间
for per_cpu in `seq 0 $g_cpu_num`
do
	g_last_cpu_total[$per_cpu]=0
	g_last_cpu_idle[$per_cpu]=0
done

#更新每CPU核使用率的函数，更新后的每CPU核使用率，
#@ g_per_cpu_usage: 每CPU使用率
#@ g_vm_cpu_usage：根据TOP 3取平均算的CPU使用率
function update_all_cpu_usage()
{
	#all cpu core stat
	local l_all_cpu_str=`sed -n 's#^cpu[^ \t]\{1,\} \(.*\)$#\1#gp' /proc/stat`
	local l_pcu_array=($l_all_cpu_str)

	for per_cpu in `seq 0 $g_cpu_num`
	do
		cur_index=$((10 * ${per_cpu}))
		#echo "----------" $cur_index
		local l_cur_cpu_total=$(( ${l_pcu_array[${cur_index}+0]} + ${l_pcu_array[${cur_index}+1]} + ${l_pcu_array[${cur_index}+2]} \
					+ ${l_pcu_array[${cur_index}+3]} + ${l_pcu_array[${cur_index}+4]} + ${l_pcu_array[${cur_index}+5]} \
					+ ${l_pcu_array[${cur_index}+6]} + ${l_pcu_array[${cur_index}+7]} + ${l_pcu_array[${cur_index}+8]} + ${l_pcu_array[${cur_index}+9]} ))
		#echo "$l_cur_cpu_total"
		l_cur_cpu_idle=${l_pcu_array[${cur_index}+3]}
		g_per_cpu_usage[$per_cpu]=$(( 100 - ( ${l_cur_cpu_idle} - ${g_last_cpu_idle[$per_cpu]} ) * 100 / ( ${l_cur_cpu_total} - ${g_last_cpu_total[$per_cpu]} + 1) ))
		
		g_last_cpu_total[$per_cpu]=$l_cur_cpu_total
		g_last_cpu_idle[$per_cpu]=$l_cur_cpu_idle

	done

	printf ' %s ' "${g_per_cpu_usage[@]}"
	printf '\n'

	#Sort CPU usages
	local l_per_cpu_usage_sorted
	ORG_IFS=$IFS
	IFS=$'\n' l_per_cpu_usage_sorted=($(sort -n -r <<<"${g_per_cpu_usage[*]}"))
	IFS=$ORG_IFS

	printf ' %s ' "${l_per_cpu_usage_sorted[@]}"
	printf '\n'

	local l_vm_cpu_usage=$(( ${l_per_cpu_usage_sorted[0]} + ${l_per_cpu_usage_sorted[1]} + ${l_per_cpu_usage_sorted[2]} ))
	
	g_vm_cpu_usage=$(($l_vm_cpu_usage / 3))
	echo "g_vm_cpu_usage=" $g_vm_cpu_usage

	#Get Low load CPU array.
	local l_low_cpu_usage=${l_per_cpu_usage_sorted[$g_iso_cpu_num+2]}
	local l_low_cpu_index=0
	local l_cpu_index=0
	g_low_cpu_array=()
	for i in ${g_per_cpu_usage[@]}
	do
		if [ $i -lt $l_low_cpu_usage ];then
			l_low_cpu_index=$(($l_low_cpu_index+1))
			g_low_cpu_array[$l_low_cpu_index]=$l_cpu_index
		fi
		l_cpu_index=$(($l_cpu_index+1))
	done

}
  
trap 'handle_error $LINENO ${BASH_LINENO[@]}' INT TERM EXIT ERR
update_all_cpu_usage
trap - INT TERM EXIT

```