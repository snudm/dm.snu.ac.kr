// /*
// var n = noty({
//     layout: 'topRight',
//     theme: 'relax',
//     text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br>- 안진원, 류성원 NIPS Workshop 발표<br>- 김은지, 최민 KDMS 최우수논문상 수상<br>- 강연국 AAAI 발표<br><a href="/ko/notices/20181203" class="pull-right">[바로가기]</a>',
//     animation: {
//         open: 'animated bounceInDown',
//         close: {height: 'toggle'}, // jQuery animate function property object
//         easing: 'swing', // easing
//         speed: 500 // opening & closing animation speed
//     }
// });
// */

var n = noty({
    layout: 'topRight',
    theme: 'relax',
    text: '<strong>[제1회 서울대학교 AI빅데이터 캠프]</strong><br><br>1) 일 시 : 2023년 8월 30일 (수) 9:30~18:30<br>2) 장 소 : 서울대학교 38동 520호, 글로벌공학교육센터 대강당<br>3) 대 상 : 고등학교 1~3학년<br>4) 등 록 : https://event-us.kr/neuralworks/event/65309<br>5) 마 감 : 2023년 8월 15일 (화) 23시 59분<br>6) 참 가 비 : 22만원<br>7) 준 비 물 : 노트북 컴퓨터<br>8) 제 공 : 점심, 다과, 수료증, 추천 도서, 기념품, 우수 팀에 상장과 상품권<br>9) 주 최 : 서울대 빅데이터AI센터, 산업시스템혁신연구소, 뉴럴웍스랩<br>10) 문 의: camp@bdai.snu.ac.kr (캠프), camp@neuralworks.io (결제)<br><br><a href="https://event-us.kr/neuralworks/event/65309" class="pull-right">[바로가기]</a>',
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
    text: '<strong>[2023 학회/저널 Accepted Paper]</strong><br><br>- 신훈식, 이혜진, 조성준, General-Use Unsupervised Keyword Extraction Model for Text Analysis, Expert Systems with Applications 2023<br>- 박지혜, 이혜진, 조성준, Hot Topic Detection in Central Bankers\' Speeches, Expert Systems With Applications 2023<br>- 김현종, 조성준, Enhancing Sentiment Knowledge via Self-Supervised Meta-Learning, RepL4NLP 2023<br><br><a onclick="close_popup()">[팝업 닫기]</a>',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});

// var n = noty({
//     layout: 'topRight',
//     theme: 'relax',
//     text: '<strong>[2023 산업공학학회 발표 논문]</strong><br><br>- 박지혜, 김현종, 박소형, 조성준, 반도체 제조 도메인 특화 지식 그래프 구축을 위한 엔티티 추출 방법 연구, KIIE 2023<br>- 최진우, 김현종, 김어진, 조성준, 차량 평가 데이터 분석 과정 자동화 소프트웨어 및 UI 구축, KIIE 2023<br>- 박소형, 조성준, User generated text의 키워드 정보를 활용한 혈당 예측 연구, KIIE 2023<br>- 김현종, 심재승, 안재관, 조성준, 사업보고서 내 캡션 추출을 위한 규칙 기반 알고리즘 연구, KIIE 2023<br>- 배지현, 조성준, 대조학습 방법을 통한 금융 텍스트 데이터 추상 요약 모델, KIIE 2023<br>- 채성원, 김주명, 이상민, 조성준, An Optimized Algorithm of Pedestrian Classification for Linear Queue Detection, KIIE 2023<br><br><a onclick="close_popup()">[팝업 닫기]</a>',
//     animation: {
//         open: 'animated bounceInDown',
//         close: {height: 'toggle'}, // jQuery animate function property object
//         easing: 'swing', // easing
//         speed: 500 // opening & closing animation speed
//     }
// });

// var n = noty({
//     layout: 'topRight',
//     theme: 'relax',
//     /*text: '<strong>[서울대학교-삼성전자 2019 산학협력 교류회 성과]</strong><br><br>- 김은지 박사 (2019. 08 졸업), 최우수논문상 수상<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20190916" class="pull-right">[바로가기]</a>',*/
// 	/*text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br><br>- 이재원 석박통합과정, 박서영 석사과정, 선지민 석사과정 SKT AI Fellowship 2기 최우수팀 선정<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20201215" class="pull-right">[바로가기]</a>',*/
// 	/*text: '<strong>[데이터마이닝 연구실 연말 연구활동 성과]</strong><br><br>- 서울대 산업공학과 심재웅 박사 ‘서울대학교-삼성전자 산학협력 장려 논문상’ 수상<br><br><a onclick="close_popup()">[팝업 닫기]</a><a href="/ko/notices/20210913" class="pull-right">[바로가기]</a>',*/
//     text: '<strong>[2023 데이터마이닝학회 발표 논문]</strong><br><br>- 박지혜, 조성준, Post-training Approach Using Form 10-K Filings to Inject Financial Domain-specific Factual Knowledge into Pretrained Language Models for Data-driven Financial Spam Filtering, KDMS 2023<br>- 배지현, 조성준, Prompt-based abstractive text summarization, KDMS 2023<br>- 송준호, 조성준, A Study on Reinforcement Learning based Artificial Neural Network for Scheduling Painting Processes in Shipbuilding, KDMS 2023<br>- 강지혜, 조성준, Empirical Analysis of Deep Learning based Asset Allocation in the Global Market, KDMS 2023<br>- 방승재, 조성준, Land Cover Map Production with Semantic Segmentation of Satellite Image, KDMS 2023<br><br><a onclick="close_popup()">[팝업 닫기]</a>',
//     animation: {
//         open: 'animated bounceInDown',
//         close: {height: 'toggle'}, // jQuery animate function property object
//         easing: 'swing', // easing
//         speed: 500 // opening & closing animation speed
//     }
// });

function close_popup() {
  document.getElementById("noty_topRight_layout_container").innerHTML="";
}