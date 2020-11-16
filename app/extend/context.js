// 处理成功响应  扩展ctx请求的上下文
module.exports = {
    success(res = null, msg = '请求成功') {
        // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
        this.body = {
            code: 0,
            data: res,
            msg
        }
        this.status = 200
    }
};