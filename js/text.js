$(function () {
    var dtime;
    var nowindex = 0;
    var length = $(".js-ul li").length;
    $(".js-ul").children().eq(nowindex).first().show().siblings().hide();
    function animate(index) {
        $(".js-ul").children().eq(index).fadeIn(2000).siblings().fadeOut(2000);
        $(".dots").children().eq(index).children().addClass("active");
        $(".dots").children().eq(index).siblings().children().removeClass("active");
        nowindex = index;
    };

    function targetPlay(Zindex) {
        var index;
        (Zindex == length-1 ) ? index = 0 : index = Zindex+1;
        animate(index);
    };

    function paly() {
        dtime = setInterval(function () {
            targetPlay(nowindex);
        },2000);
    };
    function stop() {
        clearInterval(dtime);
    };
    $(".dots").children().click(function() {
        stop();
        var index = $(this).index();
        animate(index);
    });
    $(".dots").children().hover(function () {
        var index = $(this).index();
        animate(index);
        stop();
    },function () {
        var index = $(this).index();
        animate(index);
        paly();
    });
    function prev() {
        stop();
        var index;
        (nowindex == 0 ) ? index = length - 1 : index = nowindex - 1;
        animate(index);
        paly();
    };
    function next() {
        stop();
        var index;
        (nowindex == length-1 ) ? index = 0 : index = nowindex + 1;
        animate(index);
        paly();
    };

    $(".prev").click(function () {
        prev();
    });

    $(".next").click(function () {
        next();
    });

    paly();


});