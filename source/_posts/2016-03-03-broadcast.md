---
date: 2016-03-03 16:26:00+00:00
layout: post
title: 组播通讯实例
categories: socket
tags: 组播
---

#### sender.c

```
#include <stdlib.h>  
#include <sys/types.h>  
#include <sys/socket.h>  
#include <netinet/in.h>  
#include <arpa/inet.h>  
#include <time.h>  
#include <string.h>  
#include <stdio.h>  
#include <unistd.h>  
  
#define HELLO_PORT 12345  
#define HELLO_GROUP "225.0.0.37"  
  
int main(int argc, char *argv[])  
{  
	struct sockaddr_in addr;  
	int fd, cnt;  
	struct ip_mreq mreq;  
	char *message="Hello, World!";  
  
	/* create what looks like an ordinary UDP socket */  
	if ((fd=socket(AF_INET,SOCK_DGRAM,0)) < 0)   
	{  
		perror("socket");  
		exit(1);  
	}  
  
	/* set up destination address */  
	memset(&addr,0,sizeof(addr));  
	addr.sin_family=AF_INET;  
	addr.sin_addr.s_addr=inet_addr(HELLO_GROUP);  
	addr.sin_port=htons(HELLO_PORT);  
  
	/* now just sendto() our destination! */  
	while (1)  
	{  
		if (sendto(fd,message, strlen(message), 0, (struct sockaddr *) &addr, sizeof(addr)) < 0)   
		{  
			perror("sendto");  
			exit(1);  
		}  
		sleep(1);  
	}  
}  
```

#### receiver.c

```
#include <stdlib.h>  
#include <sys/types.h>  
#include <sys/socket.h>  
#include <netinet/in.h>  
#include <arpa/inet.h>  
#include <time.h>  
#include <string.h>  
#include <stdio.h>  
#include <unistd.h>  
  
#define HELLO_PORT  12345  
#define HELLO_GROUP "225.0.0.37"  
#define MSGBUFSIZE 256  
  
int main(int argc, char *argv[])  
{  
	struct sockaddr_in addr;  
	int fd, nbytes,addrlen;  
	struct ip_mreq mreq;  
	char msgbuf[MSGBUFSIZE];  
  
	u_int yes=1; /*** MODIFICATION TO ORIGINAL */  
  
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
		puts(msgbuf);  
	}  
  
	return 0;  
}  
```

#### Makefile

```
CC = gcc  
CXX = g++  
CFLAGS = -Wall -D_DEBUG -DDEBUG -g -O0  
LDFLAGS =   
  
MODULE_INC = -I/usr/include  
MODULE_LIB = -L/usr/lib  
  
CFLAGS  += $(MODULE_INC)  
LDFLAGS += $(MODULE_LIB)  
  
  
SENDOBJS = sender.o  
RECVOBJS = receiver.o  
  
  
TARGET = sender receiver  
  
all: $(TARGET)  
  
sender: $(SENDOBJS)  

	$(CXX) -o $@ $^ $(LDFLAGS)  
  
receiver: $(RECVOBJS)  
	
	$(CXX) -o $@ $^ $(LDFLAGS)  
  
clean:   
	rm -f *.o 
	rm -f $(TARGET)  
	rm -f http/*.o  
# make rule  
%.o : %.c  
	$(CC) $(CFLAGS) -c $^ -o $@   
  
%.o : %.cpp  
	$(CC) $(CFLAGS) -c $^ -o $@  
```
