const config = require("./webpack.prod.js");
config.mode = "development";
config.devtool = 'inline-source-map';
config.devServer = {
    hot: true,
    open: true,
    // proxy: {
    //     '/api': {
    //         target: 'https://example.com/',
    //         secure: false,
    //         pathRewrite: {'^/api': '/rest/api/'},
    //         changeOrigin: true,
    //     },
    // },
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
};
module.exports = config;