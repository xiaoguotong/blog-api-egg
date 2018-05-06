'use strict';

const Controller = require('egg').Controller;


class ArticleController extends Controller {

    async getList() {
        let ctx = this.ctx, mysql = this.app.mysql;
        let list = await mysql.select('article');
        ctx.body = {
            success: 1,
            message: list
        }

    }

    async create() {
        let ctx = this.ctx, mysql = this.app.mysql;
        let params = ctx.request.body;
        let result = await mysql.insert('article', params)
        ctx.body = {
            success: 1,
            message: result
        }
    }


    async getById() {
        let ctx = this.ctx, mysql = this.app.mysql;
        let { id } = ctx.params;
        if (!id || !isNaN(parseInt(id))) {
            ctx.body = {
                success: 0,
                message: 'error'
            }
        }
        let result = await mysql.get('article', { id: id });
        ctx.body = {
            success: 1,
            message: result
        }
    }

    async update() {
        let ctx = this.ctx, mysql = this.app.mysql;
        //SELECT id, title, content, image, tags, visit_count, comment_count, like_count, status, create_time, update_time, pubish_time
        let { id, title, content, image, tags, visit_count, comment_count, like_count, status, update_time, publish_time } = ctx.request.body;

        let params = {
            id,
            title, 
            content,
            image, 
            tags, 
            visit_count,
            comment_count,
            like_count, 
            status, 
            update_time, 
            publish_time
        }
        
        let result = await mysql.update('article', params)
        ctx.body = {
            success: 1,
            message: result
        }
    }

}


module.exports = ArticleController;