'use strict'
/**
 * Created by Administrator on 2016/2/2.
 */
angular.module('app').controller('ThreadTreeCtrl', function ThreadTreeCtrl(tree){
   var vm = this;
   vm.items = [
     {
       id: 1,
       title: '这是第一个主题',
       poster: 'xie',
       dateCreated: '2016-02-02T00:00:00',
       items: [
         {
           id: 11,
           title: '这是第一个回复',
           poster: 'xie',
           dateCreated: '2015-02-19T00:00:00',
           items: [
             {
               id: 111,
               title: '回复1.1',
               poster: '破浪',
               dateCreated: '2015-02-02T00:00:00'
             },
             {
               id: 112,
               title: '回复1.2',
               poster: '破狼',
               dateCreated: '2016-09-09T00:00:00'
             }
           ]
         },
         {
           id: 12,
           title: '这是第一个回复',
           poster: 'xie',
           dateCreated: '2015-02-19T00:00:00'
         }
       ]
     },
     {
       id: 2,
       title: '这是第二个主题 ',
       poster: 'xie',
       dateCreated: '2015-02-19T00:00:00'
     }
   ];
  tree.enhance(vm.items);
})
