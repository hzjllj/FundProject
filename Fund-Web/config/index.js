'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    //把所有的静态资源打包到 dist下的 assets文件夹下
    assetsSubDirectory: 'static',
    //代表生成的index.html文件，里面引入资源时，路径前面要加上 /
    assetsPublicPath: '/',
    //代理服务器，可解决跨域问题
    // proxyTable: {
    //   '/api': {//访问路由
    //     target: 'http://127.0.0.1:3000/api',//目标接口
    //     changeOrigin: true,//是否跨域
    //     pathRewrite: {          
    //         '^/api': ''//将开发模块中的以/api开头的请求的接口，去掉/api进行代理请求
    //     }
    //   }
    // },
    // proxyTable: {
    //   '/dlmiddleware': {
    //     target: 'http://27.115.97.109:7007', //测试环境转发
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '^/dlmiddleware': '/dlmiddleware'
    //     }
    //   },
    //   // '/daoleapp/dlmiddleware/': {
    //   //   target: 'https://trade.dbfund.com.cn:443', //测试环境转发
    //   //   changeOrigin: true,
    //   //   secure: false,
    //   //   pathRewrite: {
    //   //     '^/daoleapp/dlmiddleware/': '/daoleapp/dlmiddleware/'
    //   //   }
    //   // },
    // },
    //开发时候的访问域名
    host: '127.0.0.1', // can be overwritten by process.env.HOST
    //端口号
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    //是否自动打开浏览器
    autoOpenBrowser: false,
    //是否展示错误蒙层
    errorOverlay: true,
    //错误通知
    notifyOnErrors: true,
    // 这个是webpack-dev-servr的watchOptions的一个选项，指定webpack检查文件的方式
    //poll选项（以轮询的方式去检查文件是否改变）
    poll: false,

    /**
     * Source Maps
     */

    // source maps的格式（source map稍后详细解释）
    devtool: 'cheap-module-eval-source-map',

    // 指定是否通过在文件名称后面添加一个查询字符串来创建source map的缓存
    cacheBusting: true,
    // 是否开启css的source map
    cssSourceMap: true
  },

  build: {
    // Template for index.html
    // html文件的生成的地方
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    // 编译生成的文件的目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 编译生成的静态文件的目录
    assetsSubDirectory: 'static',
    // 编译发布的根目录，可配置为资源服务器域名或者cdn域名
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    devtool: '#source-map',

    // 是否开启生产环境的gzip压缩（稍后详细解释）
    productionGzip: false,
    // 开启gzip压缩的文件的后缀名称
    productionGzipExtensions: ['js', 'css'],

    //运行带有附加参数的build命令
    // 如果这个选项是true的话，那么则会在build后，会在浏览器中生成一份bundler报告
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
