'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /**
      ---------------------------后台管理API--------------------------------
 */
  // 登录
  router.get('/', controller.home.index);
  router.get('/user/captcha', controller.user.captcha);
  router.post('/user/login', controller.user.login);
  router.post('/user/logout', controller.user.logout);
  router.post('/user/info', controller.user.userInfo);
  router.post('/user/theme', controller.admin.user.edit);
  // 报表
  router.post('/dashboard/search', controller.report.dashboard);
  router.post('/dashboard/item', controller.report.item);
  router.get('/dashboard/category', controller.report.category);
  router.get('/dashboard/city', controller.report.city);
  // 用户管理
  router.post('/users/search', controller.admin.user.search);
  router.post('/users/add', controller.admin.user.add);
  router.post('/users/del', controller.admin.user.delete);
  router.post('/users/edit', controller.admin.user.edit);
  router.post('/users/roles', controller.admin.user.roles);
  // 菜单管理
  router.post('/menu/search', controller.admin.menu.search);
  router.post('/menu/add', controller.admin.menu.add);
  router.post('/menu/del', controller.admin.menu.delete);
  router.post('/menu/edit', controller.admin.menu.edit);
  // 角色管理
  router.post('/role/search', controller.admin.role.search);
  router.post('/role/add', controller.admin.role.add);
  router.post('/role/del', controller.admin.role.delete);
  router.post('/role/edit', controller.admin.role.edit);
  // 字典管理
  router.post('/dictionary/search', controller.settings.dictionary.search);
  router.post('/dictionary/add', controller.settings.dictionary.add);
  router.post('/dictionary/edit', controller.settings.dictionary.edit);
  router.post('/dictionary/del', controller.settings.dictionary.delete);
  router.post('/dictionary/types', controller.settings.dictionary.types);
  // 商品管理
  router.post('/products/search', controller.settings.products.search);
  router.post('/products/add', controller.settings.products.add);
  router.post('/products/edit', controller.settings.products.edit);
  router.post('/products/del', controller.settings.products.delete);
};
