module.exports = app => {
    // io路由 chat相当于定义的监听事件
    app.io.of('/io').route('chat', app.io.controller.chat.index);
    // io路由 chat2相当于定义的监听事件
    app.io.of('/io').route('chat2', app.io.controller.chat2.index);
};
