'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
   let tagsInsert = await this.app.mysql.insert('tags',{name:'test'});
    console.log(tagsInsert);
   let tags= await this.app.mysql.select('tags');
   console.log(tags);
    this.ctx.body = tags;
  }
}

module.exports = HomeController;
