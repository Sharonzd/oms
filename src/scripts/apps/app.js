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
    /*��ҳ���������ʱ�Ķ���*/
    $("#indexWrapper").css({"opacity":1,'margin-left':0});
});

omsApp.config(function($routeProvider){
    $routeProvider.
        when('/dashboard',{
            templateUrl:'dashboard.html'
    })
});