'use strict'
/**
 * Created by Administrator on 2016/2/1.
 */
angular.module('app').directive('bfFieldError',function bfFieldError($compile){
  return {
    restrict:'A',
    require:'ngModel',
    link:function(scope, element, attrs, ngModel){
      //创建一个'子scope','true'参数表示这个子scope是个独立作用域，他不会从父级作用域自动继承属性
      var subScope = scope.$new(true);
      //在子scope上增加两个函数，共模办中使用
      //是否有需要显示的错误
      subScope.hasError = function(){
        return ngModel.$invalid && ngModel.$dirty;
      };
      //错误信息的内容
      subScope.errors = function(){
        return ngModel.$error;
      };
      var hint = $compile('<ul class="bf-field-error" ng-if="hasError()"><li ng-repeat="(name, wrong) in errors()" ng-if="wrong">{{name | error:customMessages}}</li></ul>')(subScope);
      element.after(hint);
    }
  }
})
