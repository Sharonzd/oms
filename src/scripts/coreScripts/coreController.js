/**
 * Created by Sharon_zd on 2015/7/1.
 */
var coreController = angular.module('coreController',[]);

coreController.controller('ptController',['$scope','ptGlobalMethodService','ptForwardService',function($scope,ptGlobalMethodService,ptForwardService){

    $scope.menus = ptGlobalMethodService.getMenu();
    $scope.currentMenu = $scope.menus[0];
    $scope.test = {
        'testString':'<span style="color: yellow">test</span>'
    };

    /*顶部目录点击事件*/
    $scope.changeTopMenu = function(idx){
        $('.topMenu').remove('active');
        $('.topMenu').eq(idx).addClass('active');
        $scope.currentMenu = $scope.menus[idx];
    };

    $scope.firstLayerLocation = function(url){
        if(url !== '#'){
            ptForwardService.location(url,[])
        }
    };

    $scope.changeMenu = function(idx){
        $('.firstLayer').removeClass('active');
        $('.firstLayer').eq(idx).addClass('active');
    };

}]);