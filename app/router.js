'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);



  router.get('/article/getList', controller.article.getList);
  router.get('/article/get/:id', controller.article.getById);
  router.post('/article/add', controller.article.create);
  router.post('/article/update', controller.article.update);
  

  router.get('/tag/list',controller.tag.list);
  router.post('/tag/create',controller.tag.create);
  
  
};
