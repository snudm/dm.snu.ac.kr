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
	/*text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br><br>- 서울대 산업공학과 심재웅 박사 ‘서울대학교-삼성전자 산학협력 장려 논문상’ 수상<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20210913" class="pull-right">[바로가기]</a>',*/
    text: '<strong>[빅데이터 AI 센터 소식]</strong><br><br>- 조성준 교수는 2021년 11월 26일 대한상공회의소에서 열린 2021 한국경영과학회 (회장: 한양대 한형상 교수) 추계학술대회에서 경영과학을 이용하여 조직의 발전과 경쟁력을 향상시킨 공로로 “조해형 한국경영과학산학협력 대상” 을 수상했다.<br><br><a onclick="close_popup()">[팝업 닫기]</a>',
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