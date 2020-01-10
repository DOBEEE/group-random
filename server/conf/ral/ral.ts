export = {
    'test': {
        // 请求协议与数据格式配置
        protocol: 'http',              // 使用http协议请求
        unpack: 'json',                // 约定服务端返回JSON数据
        pack: 'querystring',
        encoding: 'utf-8',            // 服务器返回utf-8编码
        // 负载均衡与超时重试配置
        balance: 'roundrobin',         // 负载均衡策略
        timeout: 1000,                  // 请求最长超时时间500ms
        retry: 2,                      // 请求重试次数
        // path: '/RpService/search',      // API路径
        
        // 后端地址配置
        server: [                      // 可以配置多个后端地址
            {
                host: 'locahost',
                port: 8000
            }
        ],
        // webfoot: "group.ess-nsclick.passport.cn"
    },
}
