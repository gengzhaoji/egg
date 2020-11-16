'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  // 静态资源加载路由
  router.get('/', controller.home.index);
  // 按照功能拆分路由
  require('./router/user')(app);
  require('./router/io')(app);
};
