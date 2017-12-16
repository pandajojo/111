(function ($) {
    console.log($)

    $(function() {

        $('.tps_reg_btn').click(function() {
            $('.tps_reg_btn').css({display:'none'})
            $('.tps_reg_btns').css({display:'block'})

            setTimeout(function() {

                $.ajax({
                    type: 'post',
                    url: 'login.php',
                    data: {
                        account: $('input[name=account]').val(),
                        password: $('input[name=password]').val(),
                    },
                    success: function (data) {
                        console.log(data)
                        data = JSON.parse(data);
                        if (data.status == 200 && $('.yyy').val() == 4812) {
                            // 显示登录成功
                            // console.log(data.info)
                            
                           window.location.href='https://www.baidu.com'
                            // console.log(2)
                            // $('.result_msg ').show().text(data.info)
                            $('.tps_reg_btn').css({ display: 'block' })
                            $('.tps_reg_btns').css({ display: 'none' })
                        } else if (data.status === 401) {
                            $('.result_msg ').show().text(data.info)
                            $('.tps_reg_btn').css({ display: 'block' })
                            $('.tps_reg_btns').css({ display: 'none' })
                            // console.log(data.info)
                        } else if ($('.yyy').val() !== 4812) {
                            $('.result_msg ').show().text('验证码错误')
                            $('.tps_reg_btn').css({ display: 'block' })
                            $('.tps_reg_btns').css({ display: 'none' })
                        }
                    }
                })
                
            },1500);

        })

    })

})(jQuery);