'use strict'
/**
 * Created by xie on 2016/2/1.
 */
angular.module('app').directive('bfCaptcha', function bfCaptcha(){
    return {
       restrict:'A',
       link: function(scope, element){
         var changeSrc = function(){
           //通过附加随机码来强制跟换图形验证码
           element.attr('src', '/api/captcha.jpg?random=' + new Date().getTime());
         };
         //启动的时候先更换一次，以便显示出来
         changeSrc();
         //点击的时候更换一次
         element.on('click', function(){
           changeSrc();
         });
       }
    };
});
