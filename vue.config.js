module.exports = {
    // vue本地开发环境的配置信息
    devServer: {
        port: 8080, // 端口
        proxy: {
            '/todos': {
                target: 'http://jsonplaceholder.typicode.com',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/todos': '/todos'  // rewrite path
                }
            },
            '/game': {
                target: 'http://localhost:3000',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: false,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/game': '/game'  // rewrite path
                }
            },
            '/echart-format-json': {
                target: 'http://localhost:3000',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: false,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/echart-format-json': '/echart-format-json'  // rewrite path
                }
            },
        }
    }
};