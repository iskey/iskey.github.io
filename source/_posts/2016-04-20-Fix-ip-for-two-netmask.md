---
date: 2016-04-20 22:36:00+00:00
layout: post
title: 跨网段修改ip地址
categories: socket
tags: 组播
---

最近有个需求，需要在windows客户端下，远程修改linux服务器的ip地址，而且要求能够跨网段修改，首先相当的，当然是组播了，下边是实际的源码。

windows端，在visual studio 2013上编译通过，使用方法，send [ip] [netmask],该程序会在windows上的所有网卡上发送组播报文。

Linux客户端，使用方法recv  [eth].


recv.c

``` c
    #include <stdlib.h>  
    #include <sys/types.h>  
    #include <sys/socket.h>  
    #include <netinet/in.h>  
    #include <arpa/inet.h>  
    #include <time.h>  
    #include <string.h>  
    #include <stdio.h>  
    #include <unistd.h>  
    
    #define MAX_LEN  1024    /* maximum string size to send */
    #define MIN_PORT 1024    /* minimum port allowed */
    #define MAX_PORT 65535   /* maximum port allowed */
    
    #define HELLO_PORT 12345
    #define HELLO_GROUP "225.0.0.37"
    #define MSGBUFSIZE 256  
    #define RAW_DATA_LEN 250
    #define CMD_HEAD 0x57579090
    #define CMD_MAX_SIZE 250
    
    
    typedef struct _BROADCAST_CMD_{
    	uint32_t 	head;
    	uint8_t 	cmd;
    	uint16_t 	data_len;
    	uint8_t 	raw_data[RAW_DATA_LEN];
    	uint16_t 	crc;
    }BROADCAST_CMD;
    
    enum{
    	CMD_SET_IP = 0,
    	CMD_SET_NETMASK,
    	CMD_SET_IP_NETMASK,
    };
    
    struct __IP_MASK__{
    	uint32_t ip;
    	uint32_t netmask;
    };
    
    #define INVERT_TO_BIG_ENDIAN16(val) (((uint16_t)val& (uint16_t)0xff00) >>8	| \
    										((uint16_t)val& (uint16_t)0x00ff)<< 8)
    
    #define INVERT_TO_BIG_ENDIAIN32(val) (((uint32_t)val& (uint32_t)0xff000000)>> 24		| \
    										((uint32_t)val& (uint32_t)0x00ff0000)>> 8	| \
    										((uint32_t)val& (uint32_t)0x0000ff00)<< 8	| \
    										((uint32_t)val& (uint32_t)0x000000ff)<< 24)
    
    #define INVERT_TO_BIG_ENDIAN64(val) (((uint64_t) (val) & (uint64_t)(0x00000000000000ffU)) << 56) | \
    										(((uint64_t)(val)& (uint64_t)(0x000000000000ff00U)) << 40) | \
    										(((uint64_t)(val)& (uint64_t)(0x0000000000ff0000U)) << 24) | \
    										(((uint64_t)(val)& (uint64_t)(0x00000000ff000000U)) << 8) | \
    										(((uint64_t)(val)& (uint64_t)(0x000000ff00000000U)) >> 8) | \
    										(((uint64_t)(val)& (uint64_t)(0x0000ff0000000000U)) >> 24) | \
    										(((uint64_t)(val)& (uint64_t)(0x00ff000000000000U)) >> 40) | \
    										(((uint64_t)(val)& (uint64_t)(0xff00000000000000U)) >> 56)))
    
    
    #define TO_NET16(val) INVERT_TO_BIG_ENDIAN16(val)
    #define TO_NET32(val) INVERT_TO_BIG_ENDIAIN32(val)
    #define TO_NET64(val) INVERT_TO_BIG_ENDIAN64(val)
    
    int isBigEndian()
    {
    	union MyUnion
    	{
    		uint8_t a[2];
    		uint16_t b;
    	};
    
    	union MyUnion test;
    	test.b = 1;
    	return test.a[0];
    }
    
    int main(int argc, char *argv[])  
    {  
    	struct sockaddr_in addr;  
    	int fd, nbytes,addrlen;  
    	struct ip_mreq mreq;  
    	char msgbuf[MSGBUFSIZE];  
    	char str_cmd[CMD_MAX_SIZE];
    	char ip[50];
    	char netmask[50];
    
    	u_int yes=1; /*** MODIFICATION TO ORIGINAL */  
    
    	if(argc!=2){
    		printf("Usage: %s [eth_name]\n", argv[0]);
    		return 0;
    	}
        
        snprintf(str_cmd, CMD_MAX_SIZE, "route add -net 0.0.0.0 %s", argv[1]);
        system(str_cmd);
        
    	/* create what looks like an ordinary UDP socket */  
    	if ((fd=socket(AF_INET,SOCK_DGRAM,0)) < 0)   
    	{  
    		perror("socket");  
    		exit(1);  
    	}  
    
    	/**** MODIFICATION TO ORIGINAL */  
    	/* allow multiple sockets to use the same PORT number */  
    	if (setsockopt(fd,SOL_SOCKET,SO_REUSEADDR,&yes,sizeof(yes)) < 0)   
    	{  
    		perror("Reusing ADDR failed");  
    		exit(1);  
    	}  
    	/*** END OF MODIFICATION TO ORIGINAL */  
    
    	/* set up destination address */  
    	memset(&addr,0,sizeof(addr));  
    	addr.sin_family=AF_INET;  
    	addr.sin_addr.s_addr=htonl(INADDR_ANY); /* N.B.: differs from sender */  
    	addr.sin_port=htons(HELLO_PORT);  
    
    	/* bind to receive address */  
    	if (bind(fd,(struct sockaddr *) &addr,sizeof(addr)) < 0)  
    	{  
    		perror("bind");  
    		exit(1);  
    	}  
    
    	/* use setsockopt() to request that the kernel join a multicast group */  
    	mreq.imr_multiaddr.s_addr=inet_addr(HELLO_GROUP);  
    	mreq.imr_interface.s_addr=htonl(INADDR_ANY);  
    	if (setsockopt(fd,IPPROTO_IP,IP_ADD_MEMBERSHIP,&mreq,sizeof(mreq)) < 0)   
    	{  
    		perror("setsockopt");  
    		exit(1);  
    	}  
    
    	/* now just enter a read-print loop */  
    	while (1)   
    	{  
    		addrlen=sizeof(addr);  
    		if ((nbytes=recvfrom(fd,msgbuf,MSGBUFSIZE,0, (struct sockaddr *) &addr,(socklen_t*)&addrlen)) < 0)   
    		{  
    			perror("recvfrom");  
    			exit(1);  
    		}
    
    		BROADCAST_CMD cmd, *p_cmd = (BROADCAST_CMD *)msgbuf;
    		struct __IP_MASK__ ip_mask, *p_ip_mask=  (struct __IP_MASK__*)(p_cmd->raw_data);
    
    		ip_mask.ip = p_ip_mask->ip;
    		ip_mask.netmask = p_ip_mask->netmask;
    		if (isBigEndian()){
    			cmd.head = p_cmd->head;
    			cmd.cmd = p_cmd->cmd;
    			cmd.data_len = p_cmd->data_len;
    		}
    		else
    		{
    			cmd.head = TO_NET32(p_cmd->head);
    			cmd.cmd = p_cmd->cmd;
    			cmd.data_len = TO_NET16(p_cmd->data_len);
    		}
    
    		if (cmd.head == CMD_HEAD){
    			printf("cmd head is 0x%08x.\n", cmd.head);
    			printf("cmd.cmd is 0x%02x\n", cmd.cmd);
    			snprintf(ip, sizeof(ip), "%s", (char*)(inet_ntoa(*(struct in_addr*)&ip_mask.ip)));
    			snprintf(netmask, sizeof(netmask), "%s", (char*)(inet_ntoa(*(struct in_addr*)&ip_mask.netmask)));
    			printf("ip is %s.\n", ip);
    			printf("netmask is %s.\n", netmask);
    		}
    
    		snprintf(str_cmd, CMD_MAX_SIZE, "ifconfig %s %s netmask %s", argv[1], ip, netmask);
    		printf("cmd is %s.\n", str_cmd);
    		system(str_cmd);
    	}  
    
    	return 0;  
    }  
```


send.c

```    
    #include <sys/types.h>   /* for type definitions */
    #include <winsock2.h>    /* for win socket API calls */
    #include <ws2tcpip.h>    /* for win socket structs */
    #include <stdio.h>       /* for printf() */
    #include <stdlib.h>      /* for atoi() */
    #include <string.h>      /* for strlen() */
    
    #include "inttypes.h"
    #include "stdint.h"
    
    #define MAX_LEN  1024    /* maximum string size to send */
    #define MIN_PORT 1024    /* minimum port allowed */
    #define MAX_PORT 65535   /* maximum port allowed */
    
    #define HELLO_PORT 12345
    #define HELLO_GROUP "225.0.0.37"
    #define RAW_DATA_LEN 250
    #define CMD_HEAD 0x57579090
    
    typedef struct _BROADCAST_CMD_{
        uint32_t 	head;
        uint8_t 	cmd;
        uint16_t 	data_len;
        uint8_t 	raw_data[RAW_DATA_LEN];
        uint16_t 	crc;
    }BROADCAST_CMD;
    
    enum{
        CMD_SET_IP = 0,
        CMD_SET_NETMASK,
        CMD_SET_IP_NETMASK,
    };
    
    struct __IP_MASK__{
        uint32_t ip;
        uint32_t netmask;
    };
    
    #define INVERT_TO_BIG_ENDIAN16(val) (((uint16_t)val& (uint16_t)0xff00) >>8	| \
        ((uint16_t)val& (uint16_t)0x00ff) << 8)
    
    #define INVERT_TO_BIG_ENDIAIN32(val) (((uint32_t)val& (uint32_t)0xff000000)>> 24		| \
        ((uint32_t)val& (uint32_t)0x00ff0000) >> 8 | \
        ((uint32_t)val& (uint32_t)0x0000ff00) << 8 | \
        ((uint32_t)val& (uint32_t)0x000000ff) << 24)
    
    #define INVERT_TO_BIG_ENDIAN64(val) (((uint64_t) (val) & (uint64_t)(0x00000000000000ffU)) << 56) | \
        (((uint64_t)(val)& (uint64_t)(0x000000000000ff00U)) << 40) | \
        (((uint64_t)(val)& (uint64_t)(0x0000000000ff0000U)) << 24) | \
        (((uint64_t)(val)& (uint64_t)(0x00000000ff000000U)) << 8) | \
        (((uint64_t)(val)& (uint64_t)(0x000000ff00000000U)) >> 8) | \
        (((uint64_t)(val)& (uint64_t)(0x0000ff0000000000U)) >> 24) | \
        (((uint64_t)(val)& (uint64_t)(0x00ff000000000000U)) >> 40) | \
        (((uint64_t)(val)& (uint64_t)(0xff00000000000000U)) >> 56)))
    
    #define TO_NET16(val) INVERT_TO_BIG_ENDIAN16(val)
    #define TO_NET32(val) INVERT_TO_BIG_ENDIAIN32(val)
    #define TO_NET64(val) INVERT_TO_BIG_ENDIAN64(val)
    
    int isBigEndian()
    {
        union MyUnion
        {
        	uint8_t a[2];
        	uint16_t b;
        };
    
        union MyUnion test;
        test.b = 1;
        return test.a[0];
    }
    
    void usage(char *cmd)
    {
        printf("Usage:\"%s [ip] [netmask]\"\n \t e.g.: %s eth0 1.1.1.1 255.255.255.0\n", cmd, cmd);
    }
    
    #pragma comment(lib,"Ws2_32.lib") 
    
    int send_ip_set_cmd(char* local_ip, char* remote_ip, char* remote_netmask)
    {
    	int sock;                   /* socket descriptor */
        struct sockaddr_in mc_addr; /* socket address structure */
        //char* mc_addr_str;          /* multicast IP address */
        //unsigned short mc_port;     /* multicast port */
        unsigned char mc_ttl = 1;     /* time to live (hop count) */
    
        struct __IP_MASK__ ip_mask;
        BROADCAST_CMD cmd;
    	
    	ip_mask.ip = inet_addr(remote_ip);
    	ip_mask.netmask = inet_addr(remote_netmask);
       if (isBigEndian()){
    		cmd.head = CMD_HEAD;
    		cmd.cmd = CMD_SET_IP;
    		cmd.data_len = sizeof(struct __IP_MASK__);
        }
        else{
    		cmd.head = TO_NET32(CMD_HEAD);
    		cmd.cmd = CMD_SET_IP;
    		cmd.data_len = TO_NET16(sizeof(struct __IP_MASK__));
        }
    	
        memcpy(cmd.raw_data, &ip_mask, sizeof(ip_mask));
    	
    	
    	/* create a socket for sending to the multicast address */
    	if ((sock = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0) {
    		perror("socket() failed");
    		exit(1);
    	}
    	
    	SOCKADDR_IN local_addr;
    	local_addr.sin_addr.S_un.S_addr=inet_addr(local_ip);
    	local_addr.sin_family=PF_INET;
    	local_addr.sin_port=htons(15501);
    	
    	if(-1== bind(sock, (SOCKADDR *)& local_addr, sizeof(SOCKADDR))){
    		printf("bind error.\n");
    	}
    	
    	/* set the TTL (time to live/hop count) for the send */
    	if ((setsockopt(sock, IPPROTO_IP, IP_MULTICAST_TTL,
    		(const char*)&mc_ttl, sizeof(mc_ttl))) < 0) {
    		perror("setsockopt() failed");
    		exit(1);
    	}
    	
    	/* construct a multicast address structure */
    	memset(&mc_addr, 0, sizeof(mc_addr));
    	mc_addr.sin_family = AF_INET;
    	mc_addr.sin_addr.s_addr = inet_addr(HELLO_GROUP);
    	mc_addr.sin_port = htons(HELLO_PORT);
    	
    	
    	if (sendto(sock, (const char*)&cmd, sizeof(BROADCAST_CMD), 0, (struct sockaddr *) &mc_addr, sizeof(mc_addr)) < 0)
    	{
    		perror("sendto error.\n");
    		exit(1);
    	}
    	
    
    	printf("command send ok. ip addr is %s, netmask is %s\n", remote_ip, remote_netmask);
    	
    	
    	closesocket(sock);
    
    	return 0;
    }
    
    int main(int argc, char *argv[])
    {
    
        char szHostName[128];
    	WSADATA wsaData;            /* Windows socket DLL structure */
    
        /* validate number of arguments */
        if (argc != 3) {
        	usage(argv[0]);
        	exit(1);
        }
    
        printf("ip addr is %s, netmask is %s\n", argv[1], argv[2]);
        //mc_addr_str = argv[1];       /* arg 1: multicast IP address */
        //mc_port = atoi(argv[2]); /* arg 2: multicast port number */
    
    	/* validate the port range */
        if ((HELLO_PORT < MIN_PORT) || (HELLO_PORT > MAX_PORT)) {
    		fprintf(stderr, "Invalid port number argument %d.\n",
    			HELLO_PORT);
    		fprintf(stderr, "Valid range is between %d and %d.\n",
    			MIN_PORT, MAX_PORT);
    		exit(1);
        }
    	
    	/* Load Winsock 2.0 DLL */
    	if (WSAStartup(MAKEWORD(2, 0), &wsaData) != 0) {
    		fprintf(stderr, "WSAStartup() failed");
    		exit(1);
    	}
    
    	if( gethostname(szHostName, 128) == 0 )
        {
            // Get host adresses
            struct hostent * pHost; 
            int i;  
            pHost = gethostbyname(szHostName); 
            for( i = 0; pHost!= NULL && pHost->h_addr_list[i]!= NULL; i++ )  
            {
    			char * eth_name=inet_ntoa (*(struct in_addr *)pHost->h_addr_list[i]);
    			send_ip_set_cmd(eth_name, argv[1], argv[2]);
            }
        }
    
    	WSACleanup();  /* Cleanup Winsock */
    	
    	return 0;
    }
```