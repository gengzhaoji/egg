const Controller = require('../core/base_controller');

class UserController extends Controller {
    async list() {
        const { ctx, service } = this;
        this.success('测试数据');
    }
}

module.exports = UserController;