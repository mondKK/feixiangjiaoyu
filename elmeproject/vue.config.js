module.exports = {
  publicPath:'./',
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  configureWebpack:{
      resolve: {
          alias: {
            'assets': '@/assets',
            'components': '@/components',
            'views': '@/views'
          }
        }
  },
  //反向代理
  // devServer: {
  //   // 环境配置
  //   host: '127.0.0.1',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   open: true, //配置自动启动浏览器
  //   proxy: {
  //     '/api': {
  //       target: 'http://122.112.179.240:9005',
  //       //ws: true, // 是否启用websockets
  //       changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //       pathRewrite: {
  //         '^/api': ''
  //       },
  //     }
  //   }
  // },
}
