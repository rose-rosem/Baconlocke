// $(function(){
//     //1文字轮播(2-5页中间)开始
//
//     $(".font_inner li:eq(0)").clone(true).appendTo($(".font_inner"));//克隆第一个放到最后(实现无缝滚动)
//     var liWidth = $(".ul-box").width();//一个li的宽度
//     //获取li的总高度再减去一个li的宽度(再减一个Li是因为克隆了多出了一个Li的宽度)
//     var totalWidth = ($(".font_inner li").length *  $(".font_inner li").eq(0).width()) -liWidth;
//     $(".font_inner").width(totalWidth);//给ul赋值宽度
//     var index = 0;
//     var autoTimer = 0;//全局变量目的实现左右点击同步
//     var clickEndFlag = true; //设置每张走完才能再点击
//
//     function tab(){
//         $(".font_inner").stop().animate({
//             left: -index * liWidth
//         },400,function(){
//             clickEndFlag = true;//图片走完才会true
//             if(index == $(".font_inner li").length -1) {
//                 $(".font_inner").css({left:0});
//                 index = 0;
//             }
//         })
//     }
//
//     function next() {
//         index++;
//         if(index > $(".font_inner li").length - 1) {//判断index为最后一个Li时index为0
//             index = 0;
//         }
//         tab();
//     }
//
//     //自动轮播
//     autoTimer = setInterval(next,3000);
//     $(".font_inner a").hover(function(){
//         clearInterval(autoTimer);
//     },function() {
//         autoTimer = setInterval(next,3000);
//     })
//
//     //1文字轮播(2-5页中间)结束
//
// });
//
// $(function(){
//     //1文字轮播(2-5页中间)开始
//
//     $(".font_inner1 li:eq(0)").clone(true).appendTo($(".font_inner1"));//克隆第一个放到最后(实现无缝滚动)
//     var liWidth = $(".ul-box").width();//一个li的宽度
//     //获取li的总高度再减去一个li的宽度(再减一个Li是因为克隆了多出了一个Li的宽度)
//     var totalWidth = ($(".font_inner1 li").length *  $(".font_inner1 li").eq(0).width()) -liWidth;
//     $(".font_inner1").width(totalWidth);//给ul赋值宽度
//     var index = 0;
//     var autoTimer = 0;//全局变量目的实现左右点击同步
//     var clickEndFlag = true; //设置每张走完才能再点击
//
//     function tab(){
//         $(".font_inner1").stop().animate({
//             left: -index * liWidth
//         },400,function(){
//             clickEndFlag = true;//图片走完才会true
//             if(index == $(".font_inner1 li").length -1) {
//                 $(".font_inner1").css({left:0});
//                 index = 0;
//             }
//         })
//     }
//
//     function next() {
//         index++;
//         if(index > $(".font_inner1 li").length - 1) {//判断index为最后一个Li时index为0
//             index = 0;
//         }
//         tab();
//     }
//
//     //自动轮播
//     autoTimer = setInterval(next,3000);
//     $(".font_inner1 a").hover(function(){
//         clearInterval(autoTimer);
//     },function() {
//         autoTimer = setInterval(next,3000);
//     })
//
//     //1文字轮播(2-5页中间)结束
//
// });
//
// $(function(){
//     //1文字轮播(2-5页中间)开始
//
//     $(".font_inner2 li:eq(0)").clone(true).appendTo($(".font_inner2"));//克隆第一个放到最后(实现无缝滚动)
//     var liWidth = $(".ul-box").width();//一个li的宽度
//     //获取li的总高度再减去一个li的宽度(再减一个Li是因为克隆了多出了一个Li的宽度)
//     var totalWidth = ($(".font_inner2 li").length *  $(".font_inner2 li").eq(0).width()) -liWidth;
//     $(".font_inner2").width(totalWidth);//给ul赋值宽度
//     var index = 0;
//     var autoTimer = 0;//全局变量目的实现左右点击同步
//     var clickEndFlag = true; //设置每张走完才能再点击
//
//     function tab(){
//         $(".font_inner2").stop().animate({
//             left: -index * liWidth
//         },400,function(){
//             clickEndFlag = true;//图片走完才会true
//             if(index == $(".font_inner2 li").length -1) {
//                 $(".font_inner2").css({left:0});
//                 index = 0;
//             }
//         })
//     }
//
//     function next() {
//         index++;
//         if(index > $(".font_inner2 li").length - 1) {//判断index为最后一个Li时index为0
//             index = 0;
//         }
//         tab();
//     }
//
//     //自动轮播
//     autoTimer = setInterval(next,3000);
//     $(".font_inner2 a").hover(function(){
//         clearInterval(autoTimer);
//     },function() {
//         autoTimer = setInterval(next,3000);
//     })
//
//     //1文字轮播(2-5页中间)结束
//
// });

$(function () {
    var dtime;
    var nowindex = 0;
    var length = 6;

    function animate(index) {
        $(".big").children().siblings().removeClass("active");
        $(".big").children().eq(index).addClass("active");
        nowindex = index;
        // alert(index);
    };

    function targetPlay(Zindex) {
        var index;
        (Zindex == length-1 ) ? index = 0 : index = Zindex+1;
        animate(index);
    };

    function paly() {
        dtime = setInterval(function () {
            targetPlay(nowindex);
        },3000);
    };
    paly();

});


