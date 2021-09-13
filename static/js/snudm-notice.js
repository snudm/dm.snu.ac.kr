/*
var n = noty({
    layout: 'topRight',
    theme: 'relax',
    text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br>- 안진원, 류성원 NIPS Workshop 발표<br>- 김은지, 최민 KDMS 최우수논문상 수상<br>- 강연국 AAAI 발표<br><a href="/ko/notices/20181203" class="pull-right">[바로가기]</a>',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});
*/
var n = noty({
    layout: 'topRight',
    theme: 'relax',
    /*text: '<strong>[서울대학교-삼성전자 2019 산학협력 교류회 성과]</strong><br><br>- 김은지 박사 (2019. 08 졸업), 최우수논문상 수상<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20190916" class="pull-right">[바로가기]</a>',*/
	/*text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br><br>- 이재원 석박통합과정, 박서영 석사과정, 선지민 석사과정 SKT AI Fellowship 2기 최우수팀 선정<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20201215" class="pull-right">[바로가기]</a>',*/
	text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br><br>- 서울대 산업공학과 심재웅 박사 ‘서울대학교-삼성전자 산학협력 장려 논문상’ 수상<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20210913" class="pull-right">[바로가기]</a>',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});

function close_popup() {
  document.getElementById("noty_topRight_layout_container").innerHTML="";
}