/**
 * Created by WuHaiLong on 2016/12/18.
 */
$(document).ready(function () {

    var aHei=$('.fix-header').height();
    var bHei=$('.container-right').height();
    var cHei=$('.section3').height();
    var dHei=$(window).height();
    if (dHei>=1000){
        $('.container-right').css('margin-top','25%');
        $('.feature-pic').css('margin-top','55%');
        $('.section5 .row').css('margin-top','20%');
        $('.second-grids').css('margin-top','20%');
        // $('.pg4-title').css('top','-150px')
    }
    if($('.menu  a').css('background')=='#333'&$('.menu  a').css('color')=='#fff'){
        $(this).parents().siblings().children('a').css({
            'background': '',
            'color': ''
        })
    }
    $('.menu  a').click(function () {

        $(this).css({
            'background': '#333',
            'color': '#fff'
        });
        $(this).parents().siblings().children('a').css({
            'background': '',
            'color': ''
        })


    });

    // $(".my-video i").click(function () {
    //     $(".my-video").css("display","none");
    // })
    $(".minivideo").click(function () {
        $(".my-video").css("display","block");
    });

    $(".my-video i").click(function () {
        $(".my-video").css("display","none");
    });

    $(".js-luyin").click(function () {
        $(".my-video2").css("display","block");
    });
    $(".my-video2 i").click(function () {
        $(".my-video2").css("display","none");
    });
    $(".js-weishipin").click(function () {
        $(".my-video3").css("display","block");
    });
    $(".my-video3 i").click(function () {
        $(".my-video3").css("display","none");
    });
    $(".js-liuyan").click(function () {
        $(".my-video4").css("display","block");
    });
    $(".my-video4 i").click(function () {
        $(".my-video4").css("display","none");
    });
    $(".video-icon").click(function () {
        $(".my-video5").css("display","block");
    });
    $(".my-video5 i").click(function () {
        $(".my-video5").css("display","none");
    });
    $.fn.fullpage({

        // slidesColor: ['#ffffff', '#fdf6e1', '#ccc', '#ccc', '#ccc'],//background-color;

        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],//导航显示;

        menu: '#menu',
        afterLoad: function (anchorLink, index) {
            //第一页开始动画
            if (index == 1) {
                $('.section1').find('.first-title').delay(200).animate({
                    top: '25%'
                }, 400, 'easeOutExpo');
                $('.section1').find(".first-pic1").delay(300).animate({
                    top: '45%'
                }, 400, 'easeOutExpo');
                $('.section1').find(".first-text").delay(300).animate({
                    opacity: 1
                }, 400, 'easeOutExpo');
                $('.section1').find(".second-page").delay(300).animate({
                    top: '45%'
                }, 400, 'easeOutExpo');
                $('.section1').find(".second-text").delay(300).animate({
                    opacity: 1
                }, 400, 'easeOutExpo');
                $('.section1').find(".third-page").delay(300).animate({
                    top: '45%'
                }, 400, 'easeOutExpo');
                $('.section1').find(".third-text").delay(300).animate({
                    opacity: 1
                }, 400, 'easeOutExpo');

            }

            //第2页开始动画
            if (index == 2) {

                $('.section2').find('.gird-list1').delay(400).animate({

                    left: '0'

                }, 400, 'easeOutExpo');
                $('.section2').find('.gird-list2').delay(400).animate({

                    left: '0'

                }, 400, 'easeOutExpo');
                $('.section2').find('.gird-list3').delay(400).animate({

                    right: '0'

                }, 400, 'easeOutExpo');
                $('.section2').find('.gird-list4').delay(400).animate({

                    right: '0'

                }, 400, 'easeOutExpo');
                $('.section2').find('.item2-p').delay(1000).animate({

                    opacity: '1'

                }, 1500, 'easeOutExpo');
                $('.section2').find('.item2-b').delay(1100).animate({

                    opacity: '1'

                }, 1600, 'easeOutExpo');

                // $(".answer").each(function(index, element){
                //     var animation = TweenMax.to(this, 0.2, {
                //         className: '+= superShadow',
                //         marginTop: '-10px',
                //         marginBottom: '10px',
                //         ease: Power1.easeIn,
                //         paused:true
                //     });
                //     element.animation = animation;
                // })
                //
                //
                // $('.answer').hover(function(){
                //     this.animation.play();
                // }, function(){
                //     $(this).css("color","");
                //     this.animation.reverse();
                // })

            }
            //第三页开始动画
            if (index == 3) {

                $('.section3').find('.ani1').delay(700).animate({

                    left: '0'

                }, 1500, 'easeOutExpo');

                $('.section3').find('.ani2').delay(700).animate({

                    top: '0'

                }, 1500, 'easeOutExpo');

                $('.section3').find('.ani3').delay(700).animate({

                    bottom: '0'

                }, 1500, 'easeOutExpo');


                $('.section3').find('.ani4').delay(700).animate({

                    right: '0'

                }, 1500, 'easeOutExpo');

                $('.section3').find('.click-video').delay(700).animate({

                    opacity: 1

                }, 1500, 'easeOutExpo');
            }
            //第4页开始动画
            if (index == 4) {

                $('.section4').delay(700).animate({

                    opacity: '1'

                }, 1500, 'easeOutExpo');

            }

            if (index == 5) {
                $('.section5').find('.part1').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part2').delay(700).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part3').delay(1000).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part4').delay(1200).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part5').delay(1500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }

        },
        //翻页动画
        onLeave: function (index, direction) {
            //第1页翻页动画
            if (index == 1) {
                $('.first-title').addClass('ccc');
                $('.first-pic1').addClass('ccc');
                $('.second-page').addClass('ccc');
                $('.third-page').addClass('ccc');
                $('.first-text').addClass('ccc');
                $('.second-text').addClass('ccc');
                $('.third-text').addClass('ccc');
                $('.section1').find('.first-title').delay(100).animate({
                    top: '120%'
                }, 30, 'easeOutExpo');
            }
            $('.section1').find(".first-pic1").delay(100).animate({
                top: '-1500px'
            }, 1500, 'easeOutExpo');
            $('.section1').find(".first-text").delay(100).animate({
                opacity: 0
            }, 1500, 'easeOutExpo');
            $('.section1').find(".second-page").delay(100).animate({
                top: '-1500px'
            }, 1500, 'easeOutExpo');
            $('.section1').find(".second-text").delay(100).animate({
                opacity: 0
            }, 1500, 'easeOutExpo');
            $('.section1').find(".third-page").delay(100).animate({
                top: '-1500px'
            }, 1500, 'easeOutExpo');
            $('.section1').find(".third-text").delay(100).animate({
                opacity: 0
            }, 1500, 'easeOutExpo');
            //第2页翻页动画
            if (index == '2') {

                $('.section2').find('.gird-list1').delay(100).animate({

                    left: '-2000px'

                }, 1500, 'easeOutExpo');
                $('.section2').find('.gird-list2').delay(100).animate({

                    left: '-2000px'

                }, 1500, 'easeOutExpo');
                $('.section2').find('.gird-list3').delay(100).animate({

                    right: '-2000px'

                }, 1500, 'easeOutExpo');
                $('.section2').find('.gird-list4').delay(100).animate({

                    right: '-2000px'

                }, 1500, 'easeOutExpo');
                $('.section2').find('.item2-p').delay(1000).animate({

                    opacity: '0'

                }, 1500, 'easeOutExpo');
                $('.section2').find('.item2-b').delay(1100).animate({

                    opacity: '0'

                }, 1600, 'easeOutExpo');

            }
            //第3页翻页动画
            if (index == '3') {

                $('.section3').find('.ani1').delay(700).animate({

                    left: '-2500px'

                }, 1500, 'easeOutExpo');

                $('.section3').find('.ani2').delay(700).animate({

                    top: '-2000px'

                }, 1500, 'easeOutExpo');

                $('.section3').find('.ani3').delay(700).animate({

                    bottom: '-2000px'

                }, 1500, 'easeOutExpo');


                $('.section3').find('.ani4').delay(700).animate({

                    right: '-2500'

                }, 1500, 'easeOutExpo');

                $('.section3').find('.click-video').delay(700).animate({

                    opacity: 0

                }, 1500, 'easeOutExpo');

            }
            //第4页翻页动画
            if (index == '4') {

                $('.section4').delay(700).animate({

                    opacity: '0.5'

                }, 1500, 'easeOutExpo');

            }
            if (index == 5) {
                $('.section5').find('.part1').delay(100).animate({
                    left: '-2500px'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part2').delay(100).animate({
                    left: '-2500px'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part3').delay(100).animate({
                    left: '-2500px'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part4').delay(100).animate({
                    left: '-2500px'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.part5').delay(100).animate({
                    left: '-2500px'
                }, 1500, 'easeOutExpo');
            }
        }

    });

});

