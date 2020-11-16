/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596424641883_3842';

  // 静态资源路径
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public')
  }
  config.cluster = {
    listen: {
      port: 7008
    }
  };
  // add your user config here
  const userConfig = {
    myAppName: 'egg',
  };

  // 获取上传的文件 框架通过内置 Multipart 插件来支持获取用户上传的文件。
  config.multipart = {
    mode: 'file',
    fileExtensions: ['.apk'] // 增加对 apk 扩展名的文件支持  
    // whitelist: [ '.png' ], // 覆盖整个白名单，只允许上传 '.png' 格式
  };
  
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: 'mysql.com',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'test_user',
  //     // 密码
  //     password: 'test_password',
  //     // 数据库名
  //     database: 'test',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };

  // 所有请求的中间件 数组的顺序为中间件执行的顺序
  config.middleware = ['errorHandler', 'saveSession']

  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*'] // 安全白名单
  }

  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  // Socket.IO配置部分
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/io': {
        connectionMiddleware: ['connection'], // 对每一次 socket 连接的建立/断开进行处理
        packetMiddleware: ['packet'],   // 针对每条消息的处理中间件
      }
    },
    generateId: req => { //自定义 socket.id 生成函数
      return req._query.id
    },
  }

  return {
    ...config,
    ...userConfig,
  };
};
