module.exports = {
    devServer: {
        host:'127.0.0.1',
        // 代理配置
        proxy: {
            // 如果请求地址以/api打头,就出触发代理机制
            '/api': {
                target: 'http://124.71.39.218:8888', // 要代理的真实接口地址
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
}

