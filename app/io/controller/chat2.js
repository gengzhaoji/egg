const Controller = require('egg').Controller;
const room = 'default_room';

class ChatController extends Controller {
    async index() {
        const { app, socket, args } = this.ctx;
        const id = args[0].target;
        const nsp = app.io.of('/io');
        // 根据id给指定连接发送消息
        nsp.sockets[id].emit('res', " gengzhaoji hello2 ....");
        // 根据id给指定连接发送消息
        nsp.sockets[id].emit('online', "gengzhaoji 我上线了");
    }
}
module.exports = ChatController;