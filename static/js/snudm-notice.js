var n = noty({
    layout: 'topRight',
    theme: 'relax',
    text: '[NEWS]김은지, 최민 KDMS 최우수논문상 수상<br/>><img class="width-49" src="/static/images/news/2018_kdms.jpg">',
    animation: {
        open: 'animated bounceInDown',
        close: {height: 'toggle'}, // jQuery animate function property object
        easing: 'swing', // easing
        speed: 500 // opening & closing animation speed
    }
});
