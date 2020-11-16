// 定义Controller基础类  供后续类继承
const { Controller } = require('egg');
class BaseController extends Controller {
  success(data, msg = '请求成功') {
    this.ctx.body = {
      success: true,
      code: 0,
      data,
      msg
    };
    this.status = 200
  }
}
module.exports = BaseController;