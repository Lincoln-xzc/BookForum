'use strict'
/**
 * Created by Administrator on 2016/2/2.
 */
angular.module('app').directive('bfCheckIndeterminate', function bfCheckIndeterminate(){
  return {
    restrict:'A',
    link: function(scope, element, attrs){
      scope.$watch(
        function() {
          return scope.$eval(attrs.bfCheckIndeterminate);
        },
        function(value){
          angular.forEach(element, function(DOM){
            DOM.indeterminate = value;
          });
        }
      );
    }
  };
});
