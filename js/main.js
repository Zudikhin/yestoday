$(document).ready(function () {
    "use strict";

    $(".menu_cards").click(function() {
        $(".header_modal").removeClass('active');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".cards").offset().top
        }, 1000);
    });

    $(".menu_dive").click(function() {
        $(".header_modal").removeClass('active');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".dive").offset().top - 62
        }, 1000);
    });
    

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {

        if ($(window).width() > 1199) {

            if($('.dive_block_button').isInViewport()) {
                $('.dive_block_list').addClass("active");
            } else {
                $('.dive_block_list').removeClass("active");
            }

        } else {

            if($('.footer').isInViewport()) {
                $('.dive_block_list').addClass("active");
            } else {
                $('.dive_block_list').removeClass("active");
            }

        }
        
    });

});