/**
 * Created by Sharon_zd on 2015/7/1.
 */
var omsApp = angular.module('omsApp',[
    'ngRoute',
    'coreController',
    'coreService',
    'coreDirective',
    'coreFilter'
]);

omsApp.run(function(){
    /*首页从左侧切入时的动画*/
    $("#indexWrapper").css({"opacity":1,'margin-left':0});
});

omsApp.config(function($routeProvider){
    $routeProvider.
        when('/dashboard',{
            templateUrl:'dashboard.html'
    })
});