module.exports = app => {
    app.router.get('/service/index', app.controller.user.list);
};