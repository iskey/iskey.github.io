---
date: 2024-01-27 16:09
title: Xray直接作为代理
authors: Iskey
tags:
  - proxy
---
# Xray直接作为代理

## Server端配置

```json
{
    "inbounds": [{
            "port": 9090,
            "listen": "0.0.0.0",
            "protocol": "http",
            "settings": {
                "udp": true
            }
        }, {
            "port": 9091,
            "listen": "0.0.0.0",
            "protocol": "socks",
            "settings": {
                "udp": true
            }
        }
    ],
    "outbounds": [{
            "protocol": "freedom",
            "tag": "direct"
        }, {
            "tag": "block",
            "protocol": "blackhole"
        }
    ],
    "log": {
        "dnsLog": true
    },
    "routing": {
        "domainStrategy": "IPOnDemand",
        "rules": [{
                "type": "field",
                "network": "tcp,udp",
                "outboundTag": "direct"
            }
        ]
    }
}
```

## 支持fallback的xray

8080是当前启动的web服务器，可以配套caddy服务使用

```json
{
  "inbounds": [
    {
      "port": 443, 
      "protocol": "vless",
      "settings": {
        "clients": [
          {
            "id": "648f7e2d-69ea-4279-8ead-70f9b311308b"
          }
        ],
        "decryption":"none",
        "fallbacks": [
          {
            "dest": 8080
          }
        ]
      }
    },
    {
      "listen": "127.0.0.1",
      "port": 10085,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "127.0.0.1"
      },
      "tag": "api"
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom"
    }
  ],
  "log": {
    "dnsLog":true
  },
  "stats": {},
  "policy": {
     "levels": {
       "0": {
         "handshake": 4,
         "connIdle": 300,
         "uplinkOnly": 2,
         "downlinkOnly": 5,
         "statsUserUplink": false,
         "statsUserDownlink": false,
         "bufferSize": 4
      }
    },
    "system": {
      "statsInboundUplink": false,
      "statsInboundDownlink": false,
      "statsOutboundUplink": false,
      "statsOutboundDownlink": false
    }
  },
  "api": {
    "tag": "api",
    "services": ["HandlerService", "LoggerService", "StatsService"]
  },
  "routing": {
    "rules": [
      {
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
          "type": "field"
      }
   ]
  }
}
```