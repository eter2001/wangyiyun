const webpack = require("webpack")
module.exports = {
    publicPath: './', //解决css文件路径
    pages: {
        index: {
            entry: "src/main.js",
            title: "eter" //修改index 的title
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]

    },
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    publicPath: "./",

    //  构建时的输出目录

    outputDir: "dist",

    //  放置静态资源的目录

    assetsDir: "static",

    //  html 的输出路径

    indexPath: "index.html",

    //文件名哈希

    filenameHashing: true,



    lintOnSave: true,

    //  是否使用带有浏览器内编译器的完整构建版本

    runtimeCompiler: false,
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 require('postcss-pxtorem')({ // 把px单位换算成rem单位
    //                     rootValue: 37.5, // 换算的基数(设计图750的根字体为32)
    //                     selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
    //                     propList: ['*']
    //                 })
    //             ]
    //         }
    //     }
    // }
}