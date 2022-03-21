const path = require('path');

module.exports = {
    // 模式开发
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 打包文件
    output: {
        // 虚拟打包的路径
        publicPath: "/xuni/",
        filename: 'bundle.js',
    },
    // 配置webpack-dev-server
    devServer: {
        // 静态个目录
        contentBase: path.join(__dirname, 'www'),
        // 不压缩
        compress: false,
        port: 8080,
        // 运行之后端口是8080
    }
};