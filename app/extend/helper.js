/**
 * 框架扩展功能，公用函数逻辑的扩展
 * 通过 ctx.helper 访问到 helper 对象
 */
const moment = require('moment')

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss')
exports.parseMsg = (action, payload = {}, metadata = {}) => {
    const meta = Object.assign({}, {
        timestamp: Date.now(),
    }, metadata);
    return {
        meta,
        data: {
            action,
            payload,
        },
    };
}

