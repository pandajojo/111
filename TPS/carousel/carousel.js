(function ($) {
    // 封装轮播图的构造函数
    function Carousel({el, interval = 3000}) {
        this.el = el;

        this.interval = interval;

        this.index = 0;

        // 获取图片个数
        this.img = this.el.find('.carousel-img');
        this.imgs = this.img.children();


        // 创建按钮列表
        this.createBtnList();

        // 显示方向按钮
        this.control = this.el.find('.carousel-control');
        this.el.hover(() => {
            clearInterval(this.timer);
            this.control.css('display', 'block');
        }, () => {
            this.control.css('display', 'none');
            this.autoMove();
        });

        this.prev = this.control.children('.carousel-control-prev');
        this.next = this.control.children('.carousel-control-next');

        this.prev.bind('click', function () {
            this.prevMove();
        }.bind(this));
        
        this.next.bind('click', function () {
            this.nextMove();
        }.bind(this));

        this.autoMove();
    }

    Carousel.prototype = {
        constructor: Carousel,
        createBtnList: function () {
            let oCarouselBtn = $('<div>').addClass('carousel-btn').appendTo(this.el);
            for(var i = 0; i < this.imgs.length; i++) {
                
                var oA = $('<a>').appendTo(oCarouselBtn);
                
                
                if(i === 0) {
                    oA.addClass('active');
                }
                oA.html(i+1)
            }
            this.btns =  oCarouselBtn.children();

            let oThat = this;
            this.btns.bind('mouseenter', function () {
                oThat.index = $(this).index();
                
                oThat.move();
            });
        },
        autoMove: function () {
            this.timer = setInterval(() => {
                this.nextMove();
            }, this.interval);
        },
        prevMove: function () {
            this.index--;
            if (this.index < 0) {
                this.index = this.imgs.length - 1;
            }
            this.move();
        },
        nextMove: function () {
            this.index++;
            if (this.index >= this.imgs.length) {
                this.index = 0;
            }
            this.move();
        },
        move() {
            this.btns.removeClass('active').eq(this.index).addClass('active');
            this.imgs.stop(true).fadeOut('fast').eq(this.index).stop(true).fadeIn('fast');
        }
    };

    // 注册carousel方法（插件）
    $.fn.extend({
        carousel: function (options) {
            new Carousel($.extend({ el: this }, options));
        }
    });
})(jQuery);