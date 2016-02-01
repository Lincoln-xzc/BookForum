'use strict'
/**
 * Created by xie on 2016/2/1.
 */
angular.module('app').controller('ThreadListCtrl', function ThreadListCtrl(){
  var vm =this;
  vm.items = [
    {
      title:'这个一个主贴',
      poster:'xzc',
      dateCreated: '2012-02-03T00:00:00'
    },
    {
      title:'这是第二个主贴，含有字母abcd和数字1234',
      poster:'dsdf',
      dateCreated:'2013-01-02T00:00:00'
    }
  ];
  for(var i = 0; i<30; i++){
    vm.items.push({
      title: '主题'+ i,
      poster:'xzc'+i,
      dateCreated:'2014-02-03T00:00:00'
    });
  }
});
