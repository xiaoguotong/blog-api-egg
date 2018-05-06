
const Controller = require('egg').Controller;


class TagController extends Controller {
    async list() {
        let ctx = this.ctx, mysql = this.app.mysql;
        let list = await mysql.select('tag');
        ctx.body = {
            success: 1,
            message: list
        }
    }

    async create(){
        let ctx = this.ctx, mysql = this.app.mysql;

        let {name}=ctx.request.body;
        let result = await mysql.insert('tag', {name:name})
        ctx.body = {
            success: 1,
            message: result
        }
    }

}

module.exports = TagController;
