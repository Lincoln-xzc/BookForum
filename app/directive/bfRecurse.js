'use strict'
/**
 * Created by Administrator on 2016/2/2.
 */
angular.module('app').directive('bfRecurse', function bfRecurse($compile){
  return {
    restrict:'A',
    link:function(scope, element, attrs){
      var subScope = scope.$new(true);
      subScope.$dataSource = scope.$eval(attrs.bfRecurse);
      var dom = $compile(scope.$template)(subScope);
      element.replaceWith(dom);
    }
  };
});
