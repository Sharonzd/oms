/**
 * Created by Sharon_zd on 2015/7/20.
 */
var coreFilter = angular.module('coreFilter',[]);

coreFilter.filter('highlight',function(){
    return function(input){
        var mark = document.createElement('mark');
        mark.innerHTML = 'test';
        //var p = document.createElement('p');
        //
        //index = input.indexOf('test');
        //return index;
        function parseToDOM(str){
            var div = document.createElement("div");
            if(typeof str == "string")
                div.innerHTML = str;
            return div.childNodes[0];
        }

        console.log(parseToDOM(input));
        console.log(mark);
        return mark;

    }
});