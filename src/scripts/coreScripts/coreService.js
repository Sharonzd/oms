/**
 * Created by Sharon_zd on 2015/7/1.
 */
var coreService = angular.module('coreService',['ngResource']);/*为了使用$resource,我们需要加载ngResource模块*/

coreService.factory('ptGlobalMethodService',function(){
    return{
        'getMenu':function(){
            return [
                {
                    'name':'Dashboard',
                    'url':'',
                    'firstLayer':[{
                        'name':'Dashboard',
                        'icon':'fa fa-home',
                        'url':'dashboard',
                        'secondLayer':[]
                    }]
                },
                {
                    'name':'CDN',
                    'url':'',
                    'firstLayer':[
                        {
                            'name':'Vendors',
                            'icon':'fa fa-pinterest',
                            'url':'listVendor',
                            'secondLayer':[]
                        },
                        {
                            'name':'Coverage Zone',
                            'icon':'fa fa-rss',
                            'url':'coverZoneManage',
                            'secondLayer':[]
                        }
                    ]
                },
                {
                    'name':'RMS',
                    'url':'',
                    'firstLayer':[
                        {
                            'name':'Transcoders',
                            'icon':'fa fa-laptop',
                            'url':'#',
                            'secondLayer':[
                                {
                                    'name':'VAS',
                                    'icon':'fa fa-edit',
                                    'url':'#listTranscoder'
                                },
                                {
                                    'name':'LAS',
                                    'icon':'fa fa-edit',
                                    'url':'#lasTranscoders'
                                }
                            ]
                        },
                        {
                            'name':'Channels',
                            'icon':'fa fa-signal',
                            'url':'lasChannels',
                            'secondLayer':[]
                        },
                        {
                            'name':'Tasks',
                            'icon':'fa fa-tasks',
                            'url':'#',
                            'secondLayer':[
                                {
                                    'name':'Transcoding',
                                    'icon':'fa fa-edit',
                                    'url':'#vasTranscodingTasks'
                                },
                                {
                                    'name':'Events',
                                    'icon':'fa fa-edit',
                                    'url':'#lasEvents'
                                }
                            ]
                        }
                    ]
                },
                {
                    'name':'Monitoring',
                    'url':'',
                    'firstLayer':[
                        {
                            'name':'Inventory',
                            'icon':'fa fa-th-list',
                            'url':'#',
                            'secondLayer':[
                                {
                                    'name':'Servers',
                                    'icon':'fa fa-laptop',
                                    'url':'#servers',
                                    'secondLayer':[]
                                }
                            ]
                        },
                        {
                            'name':'Processes',
                            'icon':'fa fa-tasks',
                            'url':'processes',
                            'secondLayer':[]
                        }
                    ]
                },
                {
                    'name':'Configuration',
                    'url':'',
                    'firstLayer':[
                        {
                            'name':'User',
                            'icon':'fa fa-user',
                            'url':'#',
                            'secondLayer':[
                                {
                                    'name':'Groups',
                                    'icon':'fa fa-star-o',
                                    'url':'#userGroups',
                                    'secondLayer':[]
                                },
                                {
                                    'name':'Accounts',
                                    'icon':'fa fa-star-o',
                                    'url':'#users',
                                    'secondLayer':[]
                                }
                            ]
                        },
                        {
                            'name':'Services',
                            'icon':'fa fa-hdd-o',
                            'url':'listRm',
                            'secondLayer':[]
                        },
                        {
                            'name':'Monitoring',
                            'icon':'fa fa-laptop',
                            'url':'#',
                            'secondLayer':[
                                {
                                    'name':'Zabbix Master',
                                    'icon':'fa fa-laptop',
                                    'url':'#zabbixMasters',
                                    'secondLayer':[]
                                },
                                {
                                    'name':'Media Type',
                                    'icon':'fa fa-star-o',
                                    'url':'#mediaTypes',
                                    'secondLayer':[]
                                },
                                {
                                    'name':'Host Groups',
                                    'icon':'fa fa-star-o',
                                    'url':'#hostGroups',
                                    'secondLayer':[]
                                },
                                {
                                    'name':'Actions',
                                    'icon':'fa fa-star-o',
                                    'url':'#alarmActions',
                                    'secondLayer':[]
                                },
                                {
                                    'name':'Advanced Monitoring',
                                    'icon':'fa fa-star-o',
                                    'url':'#advancedMonitor',
                                    'secondLayer':[]
                                }
                            ]
                        }
                    ]
                },
                {
                    'name':'Alarm',
                    'url':'',
                    'firstLayer':[
                        {
                            'name':'Alarm',
                            'icon':'fa fa-warning ',
                            'url':'issues',
                            'secondLayer':[]
                        }
                    ]
                }
            ];
        }
    }
});

coreService.factory('ptForwardService',['$window',function($window){
    return{
        'location':function(url,params){
            var paramText = '?';
            angular.forEach(params,function(val){
                paramText = paramText + val.key + '=' + val.value + '&';
            });
            paramText = paramText.substring(0,paramText.length-1);
            $window.location = '#/'+url+paramText;
        }
    }
}]);


















