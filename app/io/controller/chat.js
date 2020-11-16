const Controller = require('egg').Controller;
const room = 'default_room';
class ChatController extends Controller {
    async index() {
        const { app, socket, args } = this.ctx;

        const id = socket.id;

        const nsp = app.io.of('/io');

        // 根据id给指定连接发送消息
        nsp.sockets[id].emit('res', args[0].payload.msg);

        // 根据id给指定连接发送消息
        nsp.sockets[id].emit('online', "hello 我上线了");


        nsp.emit("res", { data1: "hello,everyone" })

        // 获取指定房间连接信息列表
        nsp.adapter.clients([room], (err, clients) => {
            console.log(JSON.stringify(clients));
        });

        // 发送给同在 'myNamespace' 命名空间下的所有客户端，包括发送者
        nsp.to(room).emit('online', socket.id + "上线了");

        // 给除了自己以外的所有客户端广播消息
        socket.broadcast.emit("res", { data: "hello,everyone" });

        // 发送给同在 'game' 房间的所有客户端，除了发送者
        // socket.to('game').emit('nice game', "let's play a game");

        // 发送给当前 node 实例下的所有客户端（在使用多个 node 实例的情况下）
        // io.local.emit('hi', 'my lovely babies');

        // 断开连接
        // socket.disconnect();

        // 设置修改器，用来将随后的事件发射到到指定的房间号，这样只有存在于指定房间的socket客户端才可接受到广播消息。为了触发多个房间，你可以多次调用to方法。
        // nsp.to('level1').emit('an event', { some: 'data' });
    }
}
module.exports = ChatController;