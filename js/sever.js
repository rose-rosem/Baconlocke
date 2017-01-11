$(function () {
    $(".level1_li a").click(function () {
        if ($(this).siblings('ul').css("display") == "none") {
            $(this).siblings('ul').slideDown(500);
            $(this).css('background', '#d8e0e9');
        }
        else {
            $(this).siblings('ul').slideUp(500);
            $(this).css('background', '');
        }
    });

    //	$(".level1_li").click(function(){
    //		if($(".second_ul").css("display")=="none"){
    //			$(".second_ul").slideDown(300);
    //		}
    //		else{
    //			$(".second_ul").slideUp(300);
    //		}
    //	})
    $(".second_ul").children("li:nth-child(1)").click(function () {
        $(".load_in").load('html/power.html');
    });

    $(".second_ul").children("li:nth-child(2)").click(function () {
        $(".load_in").load('html/open.html');
    });
    $(".second_ul").children("li:nth-child(3)").click(function () {
        $(".load_in").load('html/xuanzhuan.html');
    });
    $(".second_ul").children("li:nth-child(4)").click(function () {
        $(".load_in").load('html/other.html');
    });
    $(".second_ul").children("li:nth-child(5)").click(function () {
        $(".load_in").load('html/internet.html');
    });
    $(".third_ul").children("li:nth-child(1)").click(function () {
        $(".load_in").load('html/load_aaa.html');
    });
    $(".third_ul").children("li:nth-child(2)").click(function () {
        $(".load_in").load('html/main.html');
    });
    $(".third_ul").children("li:nth-child(3)").click(function () {
        $(".load_in").load('html/yingxiong.html');
    });
    $(".third_ul").children("li:nth-child(4)").click(function () {
        $(".load_in").load('html/guize.aspx');
    });
    $(".third_ul").children("li:nth-child(5)").click(function () {
        $(".load_in").load('html/duihuan.html');
    });
    $(".fourth_ul").children("li:nth-child(1)").click(function () {
        $(".load_in").load('html/jdgj_download.html');
    });
    $(".fourth_ul").children("li:nth-child(2)").click(function () {
        $(".load_in").load('html/jd_main.html');
    });
    $(".fifth_ul").children("li:nth-child(1)").click(function () {
        $(".load_in").load('html/jg_download.html');
    });
    $(".fifth_ul").children("li:nth-child(2)").click(function () {
        $(".load_in").load('html/jg_shiyong.html');
    });
    $(".fifth_ul").children("li:nth-child(3)").click(function () {
        $(".load_in").load('html/jigoulishi.html');
    });
    $(".fifth_ul").children("li:nth-child(4)").click(function () {
        $(".load_in").load('html/xueshengrenwu.html');
    });
    $(".fifth_ul").children("li:nth-child(5)").click(function () {
        $(".load_in").load('html/dangrifenxi.html');
    });
    $(".fifth_ul").children("li:nth-child(6)").click(function () {
        $(".load_in").load('html/xueshenglishi.html');
    });
    $(".fifth_ul").children("li:nth-child(7)").click(function () {
        $(".load_in").load('html/danyuanfenxi.html');
    });
    $(".fifth_ul").children("li:nth-child(8)").click(function () {
        $(".load_in").load('html/jifen.html');
    });
    $(".fifth_ul").children("li:nth-child(9)").click(function () {
        $(".load_in").load('html/jiangp.html');
    });
    $(".sixth_ul").children("li:nth-child(1)").click(function () {
        $(".load_in").load('html/sq.html');
    });
    $(".sixth_ul").children("li:nth-child(2)").click(function () {
        $(".load_in").load('html/wifi.html');
    });


    $(".level2_li a").click(function () {
        $(this).parents('.level1_li').siblings('li').children('ul').children('li').children('a').css("border-color", "");
        $(this).parents('.level1_li').siblings('li').children('ul').children('li').children('a').css("color", "");
        $(this).parents('.level1_li').siblings('li').children('ul').children('li').children('a').css("background", "");
        $(this).parent('li').siblings('li').children('a').css("border-color", "");
        $(this).parent('li').siblings('li').children('a').css("color", "");
        $(this).parent('li').siblings('li').children('a').css("background", "");
        $(this).css("border-color", "#00a2ca");
        $(this).css("color", "#00a2ca");
        $(this).css("background", "#fff");
    })
});
