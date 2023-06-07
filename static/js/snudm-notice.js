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
    text: '<strong>[2023 학회/저널 Accepted Paper]</strong><br><br>- 박지혜, Hot Topic Detection in Central Bankers Speeches, Expert Systems with Applications 2023<br>- 김현종, Enhancing Sentiment Knowledge via Self-Supervised Meta-Learning, RepL4NLP 2023<br><br><a onclick="close_popup()">[팝업 닫기]</a>',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});

var n = noty({
    layout: 'topRight',
    theme: 'relax',
    text: '<strong>[2023 산업공학학회 발표 논문]</strong><br><br>- 박지혜, 김현종, 박소형, 반도체 제조 도메인 특화 지식 그래프 구축을 위한 엔티티 추출 방법 연구, KIIE 2023<br>- 최진우, 차량 평가 데이터 분석 과정 자동화 소프트웨어 및 UI 구축, KIIE 2023<br>- 박소형, User generated text의 키워드 정보를 활용한 혈당 예측 연구, KIIE 2023<br>- 김현종, 사업보고서 내 캡션 추출을 위한 규칙 기반 알고리즘 연구, KIIE 2023<br>       반도체 제조 도메인 특화 지식 그래프 구축을 위한 엔티티 추출 방법 연구, KIIE 2023<br>       차량 평가 계측 데이터 분석 과정 자동화 소프트웨어 및 UI 구축, KIIE 2023<br>- 배지현, 대조학습 방법을 통한 금융 텍스트 데이터 추상 요약 모델, KIIE 2023<br>- 채성원, An Optimized Algorithm of Pedestrian Classification for Linear Queue Detection, KIIE 2023<br><br><a onclick="close_popup()">[팝업 닫기]</a>',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});

var n = noty({
    layout: 'topRight',
    theme: 'relax',
    /*text: '<strong>[서울대학교-삼성전자 2019 산학협력 교류회 성과]</strong><br><br>- 김은지 박사 (2019. 08 졸업), 최우수논문상 수상<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20190916" class="pull-right">[바로가기]</a>',*/
	/*text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br><br>- 이재원 석박통합과정, 박서영 석사과정, 선지민 석사과정 SKT AI Fellowship 2기 최우수팀 선정<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20201215" class="pull-right">[바로가기]</a>',*/
	/*text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br><br>- 서울대 산업공학과 심재웅 박사 ‘서울대학교-삼성전자 산학협력 장려 논문상’ 수상<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20210913" class="pull-right">[바로가기]</a>',*/
    text: '<strong>[2023 데이터마이닝학회 발표 논문]</strong><br><br>- 배지현, Prompt-based abstractive text summarization, KDMS 2023<br>- 송준호, A Study on Reinforcement Learning based Artificial Neural Network for Scheduling Painting Processes in Shipbuilding, KDMS 2023<br>- 강지혜, Deep Clustering based Global Asset Allocation Framework, KDMS 2023<br>- 방승재, Land Cover Map Production with Semantic Segmentation of Satellite Image, KDMS 2023<br><br><a onclick="close_popup()">[팝업 닫기]</a>',
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