const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{ // 通过代理实现跨域
      // https://i.maoyan.com
      '/path':{
        target:'https://i.maoyan.com', // 替换的服务端地址
        changeOrigin:true, // 开启代理，允许跨域
        pathRewrite:{ // 设置重写路径
          '^/path':''
        }
      }
    }
  }
})
