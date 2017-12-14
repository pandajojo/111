(function($){

    $.noConflict();

    $(function() {

        $('#tog').bind('click', function () {
            $('.w-100').slideUp()
        })

        // .header-bar部分js效果设置
        $('.header-bar .nav-top li a.down1').hover(function () {
            $(this).css({ background: '#fff' });
            $('.xs1').css({ display: 'block' });
        }, function () {
            $(this).css({ background: '' });
            $('.xs1').css({ display: 'none' });
        })

        $('.xs1').hover(function () {
            $('.down1').css({ background: '#fff' });
            $('.xs1').css({ display: 'block' });
        }, function () {
            $('.down1').css({ background: '' });
            $('.xs1').css({ display: 'none' });
        })

        $('.header-bar .nav-top li a.down2').hover(function () {
            $(this).css({ background: '#fff' });
            $('.xs2').css({ display: 'block' });
        }, function () {
            $(this).css({ background: '' });
            $('.xs2').css({ display: 'none' });
        })

        $('.xs2').hover(function () {
            $('.down2').css({ background: '#fff' });
            $('.xs2').css({ display: 'block' });
        }, function () {
            $('.down2').css({ background: '' });
            $('.xs2').css({ display: 'none' });
        })

        $('.header-bar .nav-top li a.down3').hover(function () {
            $(this).css({ background: '#fff' });
            $('.xs3').css({ display: 'block' });
        }, function () {
            $('.down3').css({ background: '' });
            $('.xs3').css({ display: 'none' });
        })

        $('.xs3').hover(function () {
            $('.down3').css({ background: '#fff' });
            $('.xs3').css({ display: 'block' });
        }, function () {
            $('.down3').css({ background: '' });
            $('.xs3').css({ display: 'none' });
        })

        // 二维码
        $('.appDownload').hover(function () {
            $('.appDownload a').css({ color: '#ee4242' })
            $('.showAppCode').stop(true).fadeIn('slow')
        }, function () {
            $('.appDownload a').css({ color: '' })
            $('.showAppCode').stop(true).fadeOut('slow')
        })
        $('.showAppCode').hover(function () {
            $('.showAppCode').css({ display: 'block' })
        }, function () {
            $('.showAppCode').stop(true).fadeOut('slow')
        })

        $('.attention').hover(function () {
            $(this).css({ color: '#ee4242' })
        }, function () {
            $(this).css({ color: '' })
        })

        // site-header 中form底下的滑过a的效果
        $('.search-hots a').hover(function () {
            $(this).css({ 'text-decoration': 'underline' })
        }, function () {
            $(this).css({ 'text-decoration': 'none' })
        })


        // nav-wp 部分效果设置

        $('.menu-cate-all-out dl').hover(function () {
            let iIndex = $(this).index();
            $('.submenu').eq(iIndex).css({ display: 'block' })
        }, function () {
            let iIndex = $(this).index();
            $('.submenu').eq(iIndex).css({ display: 'none' })
        })

        $('.menu-normal li').eq(4).hover(function () {
            $('.menu-normal .w120').css({ display: 'block' })
        }, function () {
            $('.menu-normal .w120').css({ display: 'none' })
        })

        $('.menu-normal li').eq(8).hover(function () {
            $('.menu-normal .w96').css({ display: 'block' })
        }, function () {
            $('.menu-normal .w96').css({ display: 'none' })
        })
        $('.menu-normal li').eq(15).hover(function () {
            $('.menu-normal .w180').css({ display: 'block' })
        }, function () {
            $('.menu-normal .w180').css({ display: 'none' })
        })

    })

})(jQuery)