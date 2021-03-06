'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl as vm'
  });
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl as vm'
  });
  //副路由
  $stateProvider.state('reader',{
    url:'/reader',
    //父路由一般只要提供一个这样的template就够了，不必要使用templateUrl,页面中公共的部分通过组件型指令去实现会更灵活、漂亮
    template:'<div ui-view></div>',
    //抽象路由不能通过URL直接访问，比如直接访问/reader路径会跳转到otherwise中去
    abstract:true
  });
  //定义一个子路由
  $stateProvider.state('reader.create', {

    url:'/create',
    templateUrl:'controllers/reader/create.html',
    controller:'ReaderCreateCtrl as vm'
  });
  $stateProvider.state('thread', {
    url:'/thread',
    template:'<div ui-view></div>',
    abstract:true
  });
  $stateProvider.state('thread.list', {
    url:'/list',
    templateUrl:'controllers/thread/list.html',
    controller:'ThreadListCtrl as vm'
  });
  $stateProvider.state('thread.tree', {
    url:'/tree',
    templateUrl:'controllers/thread/tree.html',
    controller:'ThreadTreeCtrl as vm'
  });
  $stateProvider.state('thread.show',{
    url:'/:id/show?title&poster',
    templateUrl:'controllers/thread/show.html',
    controller: 'ThreadShowCtrl as vm'
  });


  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');
});
