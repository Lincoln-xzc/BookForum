'use strict'
/**
 * Created by Administrator on 2016/2/1.
 */
angular.module('app').filter('error',function(Errors){
  return function(name){
    return Errors[name] || name;
  };
});
