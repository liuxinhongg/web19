module.exports = {
    devServer: {
        proxy: {
            "/nodeapi": {
                target: "http://192.168.1.104:3030", //接口域名
                changOrigin: true, //是否跨域
                pathRewrite: {
                    "^/nodeapi": "http://192.168.1.104:3030"
                }
            }
        },
    }
}