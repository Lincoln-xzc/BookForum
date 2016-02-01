'use strict';
/**
 * Created by Administrator on 2016/1/29.
 */
//引用应用模板
angular.module('app')
.controller('ReaderCreateCtrl',function ReaderCreateCtrl(Reader){
    //在ReaderCreateCtrl as vm语法下，当前函数的this指针指向的其实是$scope.vm变量，作为一项约定和最佳实践，我们把他赋值给vm变量。我们在程序中不在直接使用this,因为js中的this
    //很容易给一些不熟悉js的程序员造成混乱
     var vm = this;
     vm.submit = function(form){
       Reader.save(form, function(result){
         console.log(result);
       },function(err){
         console.log(err);
       });
     };
})
