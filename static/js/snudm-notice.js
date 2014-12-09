var n = noty({
    layout: 'topRight',
    theme: 'relax',
    text: '데마센터 겨울방학 인턴을 모집합니다! <a href="/ko/notices/20141206" class="pull-right">[바로가기]</a>',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});
