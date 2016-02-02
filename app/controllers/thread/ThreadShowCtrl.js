'use strict'
/**
 * Created by Administrator on 2016/2/2.
 */
angular.module('app').controller('ThreadShowCtrl', function($stateParams){
  var vm = this;
  vm.id = $stateParams.id;
  vm.title = $stateParams.title;
  vm.poster = $stateParams.poster;
});
