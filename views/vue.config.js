const path = require('path')

module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: '../app/public',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // 转译不能兼容ie的插件中的es6写法
  transpileDependencies: ['vuex-persist'],
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/index.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // webpack-dev-server 相关配置
  devServer: {
    port: 5000,
    proxy: {// 设置代理
      '/*': {
        target: 'http://139.159.135.224:9999/',
        changeORigin: true
      }
    },
    before: app => { }
  },
  // 第三方插件配置
  pluginOptions: {}
}
