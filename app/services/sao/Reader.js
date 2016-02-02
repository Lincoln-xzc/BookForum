'use strict';
/**
 * Created by xie on 2016/1/29.
 */
angular.module('app').factory('Reader',function ReaderFactory($resource){
  return $resource('/api/readers/:id',{id:'@id'});
});
