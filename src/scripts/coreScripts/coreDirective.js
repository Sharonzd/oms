/**
 * Created by Sharon_zd on 2015/7/7.
 */
var coreDirective = angular.module('coreDirective',[]);

coreDirective.directive('collapseSideMenu',function(){
    return {
        restrict:'EAC',
        link:function(scope,elm,attrs){
            elm.on('click',function(){
                if ($('.sideMenuBtn').css('width') === '49px') {
                    $('.sideMenuBtn').animate({'width': '234'}, 'fast');
                    $('.sideMenuData').animate({'width': '234'}, 'fast');
                    $('.sideMenuDataUl').show();
                    $('.leftNavBar').animate({'width': '235'}, 'fast');
                } else {
                    $('.sideMenuBtn').animate({'width': '49px'}, 'fast');
                    $('.sideMenuData').animate({'width': '49px'}, 'fast');
                    $('.sideMenuDataUl').hide();
                    $('.leftNavBar').animate({'width': '50px'}, 'fast');
                }
            })
        }
    }
});

coreDirective.directive('toDom',function(){
    return {
        restrict:'EAC',
        link:function(scope,elm,attrs){
            var test = 'Zabbix';
            //var text = '1234<<<56789test1234>>>>567';
            var text = 'Mapped "{[/oms/core/zabbix/groups],\n\tmethods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public org.springframework.http.ResponseEntity<com.hkntv.pylon.web.rest.ResponseEnvelope<java.util.List<<<<<<<<<<ZabbixGroupVO>>><coddhkntv.oms>e.controller.ZabbixRestApiController.groups()';
            //var text = 'Refresh Zabbix Auth ...';


            var indexnnn = text.indexOf('\n');          //Ӧ�ö�ÿһ��Ƭ���ң��ҵ�\n,���滻Ϊ<BR>
            console.log(indexnnn);

            //var text = text.replace(/\t/, '``8888``');

            console.log('-----t\t'+text.indexOf('\t'));

            var mark = '<mark>' + test + '</mark>';
            var index = 0;
            var i = 0;
            var spanaa = '';
            var aa = '';
            var ab = '';

            var j = 0;
            var spanba = '';
            var ba='';
            var bb='';
            if((index = text.indexOf(test))!= -1){
                var a = text.substring(0,index);  //�ؼ��ʵ�ǰ�벿��
                var b = text.substring(index + test.length,text.length);   //�ؼ��ʵĺ�벿��

                //var replaceText = text.replace(/\n/, "<br>");
                //elm.parent().append(replaceText);


                if(a.indexOf('\n') === -1){
                    var textA = document.createTextNode(a);
                    elm.parent().append(textA);
                }else{
                    while((i = a.indexOf('\n')) != -1){
                        aa = a.substring(0,i);  //��\n֮ǰ��append���ı��ڵ�
                        elm.parent().append(document.createTextNode(aa));
                        elm.parent().append('<br>');   //��\nת��Ϊ<br>֮��append��ȥ

                        //console.log(a.substring(i-2, i+4));
                        console.log(i);

                        console.log(a.indexOf('\t'));

                        if( (a.substring(i+1, i+2)) == '\t'){
                            //alert();
                            elm.parent().append('&nbsp;&nbsp;&nbsp;&nbsp;');   //��\nת��Ϊ<br>֮��append��ȥ
                            ab = a.substring(i+2, a.length);
                        }else{
                            ab = a.substring(i+1, a.length);
                        }

                        //a = ab;
                        //
                        //ab = a.substring(i+1, a.length);
                        //spanaa = '<span>'+aa+'</span>';
                        //elm.parent().append(spanaa);
                        a = ab;
                    }
                    elm.parent().append(document.createTextNode(ab));  //��\n֮���ת��Ϊ�ı��ڵ�append��ȥ

                }

                elm.parent().append(mark);    //�ѹؼ��ʰ�����<mark>��ǩ��append��ȥ


                if(b.indexOf('\n') === -1){
                    var textB = document.createTextNode(b);
                    elm.parent().append(textB);
                }else{                   //����\n,�������
                    while((j = b.indexOf('\n')) != -1){
                        ba = b.substring(0,j);  //��\n֮ǰ��append���ı��ڵ�
                        elm.parent().append(document.createTextNode(ba));
                        elm.parent().append('<br>');   //��\nת��Ϊ<br>֮��append��ȥ

                        bb = b.substring(j+1, b.length);
                        //spanaa = '<span>'+aa+'</span>';
                        //elm.parent().append(spanaa);
                        b = bb;
                    }
                    elm.parent().append(document.createTextNode(bb));  //��\n֮���ת��Ϊ�ı��ڵ�append��ȥ
                }




                //
                //if(a.indexOf('<') === -1){
                //    spanaa = '<span>'+a+'</span>';
                //    elm.parent().append(spanaa);
                //}else{
                //    //var spanb = '<span>'+b+'</span>';
                //    while((i = a.indexOf('<')) != -1)         //��ǰ�벿�ֽ��й��ˣ�����'<'�������Ϊspan��<�ŵ�����棩
                //    {
                //        aa = a.substring(0,i+1);
                //        ab = a.substring(i+1, a.length);
                //        spanaa = '<span>'+aa+'</span>';
                //        elm.parent().append(spanaa);
                //        a = ab;
                //    }
                //    console.log(ab);
                //    var lastOfA = '<span>'+ab+'</span>';
                //
                //    elm.parent().append(lastOfA);  //ǰ�벿�����һ��<���������
                //}
                //


                //elm.parent().append(mark);    //�ѹؼ��ʰ�����<mark>��ǩ��append��ȥ



                //if(b.indexOf('<') === -1){
                //    spanba = '<span>'+b+'</span>';
                //    elm.parent().append(spanba);
                //}else{
                //    while((j = b.indexOf('<')) != -1)    //�Ժ�벿�ֽ��й��ˣ�����'<'�������Ϊspan
                //    {
                //        ba = b.substring(0,j+1);
                //        bb = b.substring(j+1, b.length);
                //        spanba = '<span>'+ba+'</span>';
                //        elm.parent().append(spanba);
                //        b = bb;
                //    }
                //
                //    var lastOfB = '<span>'+bb+'</span>';
                //    elm.parent().append(lastOfB);//��벿�����һ��<���������
                //}
            }





        }
    }
});