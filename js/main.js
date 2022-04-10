$(document).ready(function () {
    "use strict";

    $(".menu_cards").click(function() {
        $(".dropdown_menu").removeClass('active');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".cards").offset().top
        }, 1000);
    });

    $(".menu_dive").click(function() {
        $(".dropdown_menu").removeClass('active');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".dive").offset().top - 62
        }, 1000);
    });

    $(".dropdown_menu").click(function() {
        $(".dropdown_menu").removeClass('active');
    });

    $(".header_content_mobile_logo").click(function() {
        $(".dropdown_menu").addClass("active");
    });

    $(".dropdown_menu_close").click(function() {
        $(".dropdown_menu").removeClass("active");
    });
    
    $(".cards_cost").click(function() {
        $(".marquiz__button").trigger("click");
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