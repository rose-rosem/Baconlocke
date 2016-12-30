/**
 * Created by Administrator on 2016/12/19.
 */
$(function () {

    var isiPad = function(){
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    var fullHeight = function() {
        if ( !isiPad() || !isiPhone() ) {
            $('.page-banner').css('height', $(window).height() - $('.fix-header').height());
            $(window).resize(function(){
                $('.page-banner').css('height', $(window).height()  - $('.fix-header').height());
            })
        }
    };



    fullHeight();
});