(function($){
    $.noConflict();


    $(function () {
        $.fn.magnifying = function () {
            var that = $(this),
                $imgCon = that.find('.con-fangDaIMg'),//正常图片容器  
                $Img = $imgCon.find('img'),//正常图片，还有放大图片集合  
                $Drag = that.find('.magnifyingBegin'),//拖动滑动容器  
                $show = that.find('.magnifyingShow'),//放大镜显示区域  
                $showIMg = $show.find('img'),//放大镜图片  
                $ImgList = that.find('.con-FangDa-ImgList > li >img'),
                multiple = $show.width() / $Drag.width();//倍数  

            $imgCon.mousemove(function (e) {
                $Drag.css('display', 'block');
                $show.css('display', 'block');
                //获取坐标的两种方法  
                // var iX = e.clientX - this.offsetLeft - $Drag.width()/2,  
                //  iY = e.clientY - this.offsetTop - $Drag.height()/2,   
                var iX = e.pageX - $(this).offset().left - $Drag.width() / 2,
                    iY = e.pageY - $(this).offset().top - $Drag.height() / 2,
                    MaxX = $imgCon.width() - $Drag.width(),
                    MaxY = $imgCon.height() - $Drag.height();
                /*这一部分可代替下面部分，判断最大最小值 
                var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX, 
                    DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY; 
                $Drag.css({left:DX+'px',top:DY+'px'});           
                $showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

                iX = iX > 0 ? iX : 0;
                iX = iX < MaxX ? iX : MaxX;
                iY = iY > 0 ? iY : 0;
                iY = iY < MaxY ? iY : MaxY;
                $Drag.css({ left: iX + 'px', top: iY + 'px' });
                $showIMg.css({ marginLeft: -multiple * iX + 'px', marginTop: -multiple * iY + 'px' });
                //return false;  
            });
            $imgCon.mouseout(function () {
                $Drag.css('display', 'none');
                $show.css('display', 'none');
                //return false;  
            });

            $ImgList.mouseenter(function () {
                var NowSrc = $(this).attr('src');
                $Img.attr('src', NowSrc);
                $(this).parent().addClass('active').siblings().removeClass('active');
            });
        }
        // 调用
        $("#fangdajing").magnifying();




        // 回到顶部backToTop-up
        function b() {
            h = $(window).height();
            t = $(document).scrollTop();
            if(t > h ){
                $('.backToTop-up').show();
            }else{
                $('.backToTop-up').hide();
            }
        }


        // 调用回到顶部函数
        $(window).scroll(function(e) {
            b();
        })

        // 点击回到顶部
        $('.backToTop-up').click(function () {
            //$(document).scrollTop(0); 直接到达顶端
            $('body,html').animate({ scrollTop: 0 }, 200); //延迟到达顶端 
        })


        // 吸顶固定goods-menu
        var nav = $('.goods-menu');
        var doc = $(document);
        var win = $(window);

        win.scroll(function() {
            if(doc.scrollTop() > 850) {
                nav.addClass('fixed');
            }else{
                nav.removeClass('fixed');
            }
        })

        // 调用
        win.scroll();


        // 点击加入购物车cart js-incart 
        $('.js-incart').click(function() {
            $('.js-check').css({display:'block'});
        })
        // 点击继续购买
        $('.goumai').click(function() {
            $('.js-check').css({ display: 'none' });
        })

        // 点击添加数量
        var num = $('.js-number').val();
        console.log(num);
        $('.js-s1').click(function() {
            num++;
            if (num < 1) {
                num = 1;
                $('.js-s2').css({ opacity: 0.5 })
            }
            if (num > 1) {
                $('.js-s2').css({ opacity: 1 })
            }
            $('.js-number').val(num);
            $('.js-number').val(num)
        })
        $('.js-s2').click(function () {
            num--;
            
            if(num < 1) {
                num =1;
                $('.js-s2').css({ opacity: 0.5 })
            }
            if(num>1) {
                $('.js-s2').css({ opacity:1})
            }
            $('.js-number').val(num);
            
        })



        // 商品介绍 商品评价切换
        $('.goods-menu li').click(function() {
            let index = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.bd li').css({ display: 'none' }).eq(index).css({ display: 'block' })
            
        })


        // 购物车cookie  原生js
        var jsincart = document.getElementsByClassName('js-incart');
        
        for (let i = 0; i < jsincart.length; i++) {
            jsincart[i].onclick = function() {
                // 记录商品信息
                var
                    iId = Number(this.getAttribute('data-id')),
                    sTitle = this.getAttribute('data-title'),
                    sUrl = this.getAttribute('data-url'),
                    sPrice = this.getAttribute('data-price'),
                    iNum = 1;

                // 一个商品一个对象
                var oGoods = {
                    id: iId,
                    title: sTitle,
                    url: sUrl,
                    price: sPrice,
                    num: iNum
                };
                // 将商品存到数组中
                 var sGoods = getCookie('goods');
                if (typeof sGoods === 'undefined') {
                    var aGoods = [];
                } else {
                    var aGoods = JSON.parse(sGoods);
                }

                // 判断当前商品是否存在

                var isExists = aGoods.every(function (v, k) {
                    if (v.id === iId) {
                        v.num++;
                        return false;
                    }
                    return true;
                });

                if (isExists === true) {
                    aGoods.push(oGoods);
                }
                // 写入cookie
                setCookie('goods', JSON.stringify(aGoods), 7, '/');
            }
           
       }


    })
        


})(jQuery);



