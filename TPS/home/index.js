(function ($) {
    $.noConflict();

    $(function() {
       

        // carousel设置
        $('.banner .carousel').carousel({ interval: 2000 })
        $('.carousel-btn').css({display:'none'})
        $('.banner .carousel').hover(function() {
            $('.carousel-btn').css({ display: 'block' })
        },function() {
            $('.carousel-btn').css({ display: 'none' })
        })

        // 新品上架
        $(".tps-line").slide({ mainCell: ".bd", effect: "left", autoPage: true, autoPlay: true, delayTime: 500, interTime: 3000, trigger: "click" });
        $(".img-gg").slide({ titCell: ".hd ul", mainCell: "ul.pic", effect: "fold", autoPage: true, autoPlay: true, interTime: 5000, });
        $(".activity").slide({ titCell: ".hd li", mainCell: ".bd", effect: "left", delayTime: 500, autoPlay: true, interTime: 3000, });



        $(".tps-line .tempWrap").hover(function() {
            $('.tps-line .prev').css({opacity:1})
            $('.tps-line .next').css({opacity:1})
        },function() {
            $('.tps-line .prev').css({ opacity: 0 })
            $('.tps-line .next').css({ opacity: 0 })
        })

        $('.tps-line .prev').mouseenter(function() {
            $('.tps-line .prev').css({ opacity: 1 })
            $('.tps-line .next').css({ opacity: 1 })
        })
        $('.next').mouseenter(function () {
            $('.tps-line .next').css({ opacity: 1 })
            $('.tps-line .prev').css({ opacity: 1 })
        })
        
        // 当前行为
        $('.activity').hover(function() {
            let index = $('.activity').index($(this));
            console.log(index)
            $('.activity .hd').eq(index).css({opacity:1})
            $('.activity .prev').eq(index).css({opacity:1})
            $('.activity .next').eq(index).css({opacity:1})
        },function() {
            $('.activity .hd').css({ opacity: 0 })
            $('.activity .prev').css({ opacity: 0 })
            $('.activity .next').css({ opacity: 0 })
        })

       





        // 其他
        // appFloat
        $('.closeBtn').click(function() {
            $('.appFloat').fadeOut('slow');
        })

        // 吸顶效果ceiling

        var a = $('.ceiling'),
            b = a.offset();//返回或设置导航栏相对于文档的偏移(位置)  
        //屏幕滚动事件 
        $(document).on('scroll', function () {
            var scroll = $(document).scrollTop();
 
            if (scroll > 300){
               a.css({'position':'fixed','top':'0px','transition':'all 1s'})
               }else{
                 a.css({'position':'absolute','top':'-500px'})
               }
           })



    });
})(jQuery);