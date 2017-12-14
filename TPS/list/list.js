(function ($) {
    $.noConflict();

    $(function() {

        // 回到顶部backToTop-up
        function b() {
            h = $(window).height();
            t = $(document).scrollTop();
            if (t > h) {
                $('.backToTop-up').show();
            } else {
                $('.backToTop-up').hide();
            }
        }


        // 调用回到顶部函数
        $(window).scroll(function (e) {
            b();
        })

        // 点击回到顶部
        $('.backToTop-up').click(function () {
            //$(document).scrollTop(0); 直接到达顶端
            $('body,html').animate({ scrollTop: 0 }, 200); //延迟到达顶端 
        })


    })


})(jQuery);