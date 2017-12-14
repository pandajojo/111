(function ($) {
    $.noConflict();

    $(function() {
        

        // 购物车 原生js
        var dllist = document.getElementById('dllist');
        // console.log(dllist)
        // 读取cookie
        var sGoods = getCookie('goods');

        var aGoods = typeof sGoods === 'undefined' ? [] : JSON.parse(sGoods);

        for (var i = 0; i < aGoods.length; i++) {
            var oGoods = aGoods[i];
            // 创建dd显示商品
            var dd = document.createElement('dd');
            var ddafter = document.getElementsByClassName('ddafter');
            console.log(ddafter[0])
            dd.id = 'dd83909290-1';
            dd.className='clear cart_items'

            dd.innerHTML =

            `
            
                    <div class="col-md-1">
                        <div class="col-md-3">&nbsp;</div>
                        <div class="col-md-9">
                            <span>
                                <input class="select" type="checkbox" checked="checked" value="83909290-1">
                            </span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="g-pic">
                            <img src="${oGoods.url}" title="" class="img100">
                        </div>
                        <div class="g-info">
                            <p>
                                <a href="javascript:;" style="word-break: break-all;">${oGoods.title}</a>
                                <br>商品编码: 83909290-1</p>
                            <p class="ts_g">此商品在中国有售</p>
                        </div>
                    </div>

                    <div class="col-md-1 mt-10">
                        <div class="Spinner attr">
                        </div>
                    </div>

                    <div class="col-md-2 tc mt-10">
                        <b>${oGoods.price}</b>
                        <p>
                        </p>
                    </div>
                    <div class="col-md-2 mt-10">
                        <div class="Spinner mlr">
                            <a class="DisDe" href="javascript:;">
                                <i>-</i>
                            </a>
                            <input class="Amount" value="${oGoods.num}" autocomplete="off" maxlength="3">
                            <a class="Increase" href="javascript:;">
                                <i>+</i>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-2 tc mt-10">
                        <b class="cse">￥${oGoods.price *oGoods.num}</b>
                    </div>
                    <div class="col-md-1 tc mt-10">
                        <a href="javascript:;">
                            <i class="iconfont icon-3"></i>
                        </a>
                    </div>
            `
            $('#cart_count').html(oGoods.num)
            $('#cart_item_num').html(oGoods.num)
            $('.cse').html(oGoods.price * oGoods.num)
            dllist.insertBefore(dd, ddafter[0]);
        }



        // 单价 
        var price = 125.20
        // 总价
        var total = 0;
        var amount = $('.Amount')



        // +号按钮点击
        $('.Increase').click(function () {
            console.log(amount);
            amount.val(parseInt(amount.val()) + 1)
            console.log(amount.val())

            total = parseInt(amount.val()) * price;
            console.log(total)
            // 显示个数
            $('#cart_item_num').html(amount.val())
            $('#cart_count').html(amount.val())
            // 显示总价
            $('.cse').html('￥' + total)

        })





        // -号按钮
        $('.DisDe').click(function () {
            amount.val(parseInt(amount.val()) - 1)
            if ((parseInt(amount.val()) < 0)) {
                amount.val(0);
            }
            else if (amount.val() == 0) {
                $('#dd83909290-1').css({ display: 'none' })
                $('#cart_item_num').html(0)
                $('#cart_count').html(0)
                $('.cse').html('￥' + '0.00')

            }

            total = parseInt(amount.val()) * price;
            // console.log(total)
            // 显示个数
            $('#cart_item_num').html(amount.val())
            $('#cart_count').html(amount.val())
            // 显示总价
            $('.cse').html('￥' + total)

        })
        // // 事件委托做法
        // dllist.onclick = function(ev) {
        //     var e = ev || window.event;
        //     var oT = e.target || e.srcElement;
        //     if (oT.className == 'icon-3') {
        //         dllist.removeChild(dd);
        //     }

        // }




        // 点击删除图标
        $('.icon-3').click(function () {
            console.log($('#dd83909290 - 1'))
            $('#dd83909290-1').css({ display: 'none' })
            $('#cart_item_num').html(0)
            $('#cart_count').html(0)
            $('.cse').html('￥' + ' 0.00')
        })

        // 点击删除选择商品  弹出框
        $('.remove_checked').click(function () {
            $('.shadow').css({ display: 'block' })
            $('.dialog').css({ display: 'block' })
        })
        // 点击×和取消
        $('.cancel').click(function () {
            $('.shadow').css({ display: 'none' })
            $('.dialog').css({ display: 'none' })
        })
        $('.icon-shanchu').click(function () {
            $('.shadow').css({ display: 'none' })
            $('.dialog').css({ display: 'none' })
        })
        // 点击确定
        $('.confirm').click(function () {
            $('.shadow').css({ display: 'none' })
            $('.dialog').css({ display: 'none' })
            $('#dd83909290-1').css({ display: 'none' })
            $('#cart_item_num').html(0)
            $('#cart_count').html(0)
            $('.cse').html('￥' + ' 0.00')

        })






    })


})(jQuery);