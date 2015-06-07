var n = noty({
    layout: 'topRight',
    theme: 'relax',
    text: '[공지]2015 하계방학 인턴 관련 공고<a href="/ko/notices/20150607" class="pull-right">[바로가기]</a>',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});
