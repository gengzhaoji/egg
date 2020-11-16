// app.js or agent.js
class AppBootHook {
    constructor(app) {
        this.app = app;
    };
    async didLoad() {
        // All files have loaded, start plugin here.
        console.log('didLoad');
    };
    async willReady() {
        // All plugins have started, can do some thing before app ready
        console.log('willReady');
    };
    async didReady() {
        // Worker is ready, can do some things
        // don't need to block the app boot.
        console.log('didReady');
    };
    async serverDidReady() {
        // http / https server 已启动，开始接受外部请求
        this.app.once('server', server => {
            // console.log('server', server);
        });
        this.app.on('error', (err, ctx) => {
            console.log('error', err);
        });
        this.app.on('request', ctx => {
            console.log('request');
        });
        this.app.on('response', ctx => {
            console.log('response');
        });
    };
    async beforeClose() {
        console.log('configWillLoad');
    };
}
module.exports = AppBootHook;