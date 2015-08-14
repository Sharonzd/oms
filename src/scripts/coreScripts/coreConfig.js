/**
 * Created by Sharon_zd on 2015/7/15.
 */
var coreConfig = angular.module('coreConfig',[]);

coreConfig.factory('ptBasicService',function(){
    return {
        'baseUrl':'http://dev.oms.hkntv.com:8383/oms',
        'baseRmsUrl':'http://dev.oms.hkntv.com:8383/oms/rms',
        'pageSize':20
    }
});