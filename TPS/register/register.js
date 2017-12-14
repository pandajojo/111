(function ($) {
    $.noConflict();

    $(function() {


        // 点击切换邮箱手机
        $('.email_reg').click(function(){
            $(this).css({borderBottom:'2px solid red'})
            $('.phone_reg').css({ borderBottom:''})
            $('#mail_ul').css({display:'block'})
            $('#tel_ul').css({ display: 'none' })
        })

        $('.phone_reg').click(function () {
            $(this).css({ borderBottom: '2px solid red' })
            $('.email_reg').css({ borderBottom: '2px solid transparent' })
            $('#tel_ul').css({ display: 'block' })
            $('#mail_ul').css({ display: 'none' })

        })
        // 邮箱验证
        $('#email').blur(function() {
            var oReg = /^\w{1,}@\w{1,}\.com$/;
            var sEmail = $('#email').val();
            if (sEmail == '') {
                $('.font1').html('请输入正确的邮箱地址');
                $('#email').css({ border: '1px solid red' });
                $('.msg1').css({display:'block'})
                $('.font1').addClass('c-o');
            }
            else if (!oReg.test(sEmail)) {
                $('.msg1').css({ display: 'block' })
                $('.msg1 img').css({ background: ' url(../img/register.png) no-repeat scroll -14px 0px transparent' })               
                $('.font1').html('请输入正确的邮箱地址');
                $('#email').css({ border: '1px solid red' });
                $('.font1').css({color:'red'});
            } else {
                $('.font1').addClass('c-g');
                $('.font1').html('成功 ');
                $('#email').css({ border: '' });
                $('.msg1').css({ display: 'block' })
                $('.msg1 img').css({ background:' url(../img/register.png) no-repeat scroll -33px 0px transparent'})
            }

        })

        $('#email_pwd').blur(function () {
            var oReg = /^(\w){6,20}$/;
            var sEmailpwd = $('#email_pwd').val();
            if (sEmailpwd == '') {
                $('.font2').html('请输入正确的密码');
                $('#email_pwd').css({ border: '1px solid red' });
                $('.msg2').css({ display: 'block' })
                $('.font2').addClass('c-o');
            }
            else if (!oReg.test(sEmailpwd)) {
                $('.msg2').css({ display: 'block' })
                $('.msg2 img').css({ background: ' url(../img/register.png) no-repeat scroll -14px 0px transparent' })
                $('.font2').html('请输入正确的密码');
                $('#email_pwd').css({ border: '1px solid red' });
                $('.font2').css({ color: 'red' });
            } else {
                // $('.font1').addClass('c-g');
                $('.font2').html(' ');
                $('#email_pwd').css({ border: '' });
                $('.msg2').css({ display: 'block' })
                $('.msg2 img').css({ background: ' url(../img/register.png) no-repeat scroll -33px 0px transparent' })
            }

        }) 



        // 手机验证  密码
        $('#mobile').blur(function () {
            var reg = /^1[3|4|5|7|8][0-9]{9}$/;
            var smobile = $('#mobile').val();
            if (smobile == '') {
                $('.font3').html('请输入正确的电子邮箱或手机号,提现将进行验证.');
                $('#mobile').css({ border: '1px solid red' });
                $('.msg3').css({ display: 'block' })
                $('.font3').addClass('c-o');
            }
            else if (!reg.test(smobile)) {
                $('.msg3').css({ display: 'block' })
                $('.msg3 img').css({ background: ' url(../img/register.png) no-repeat scroll -14px 0px transparent' })
                $('.font3').html('请输入正确的电子邮箱或手机号,提现将进行验证.');
                $('#mobile').css({ border: '1px solid red' });
                $('.font3').css({ color: 'red' });
            } else {
                $('.font3').addClass('c-g');
                $('.font3').html('成功 ');
                $('#mobile').css({ border: '' });
                $('.msg3').css({ display: 'block' })
                $('.msg3 img').css({ background: ' url(../img/register.png) no-repeat scroll -33px 0px transparent' })
            }

        })


        $('#mobile_pwd').blur(function () {
            var oReg = /^(\w){6,20}$/;
            var smobilepwd = $('#mobile_pwd').val();
            if (smobilepwd == '') {
                $('.font4').html('请输入正确的密码');
                $('#mobile_pwd').css({ border: '1px solid red' });
                $('.msg4').css({ display: 'block' })
                $('.font4').addClass('c-o');
            }
            else if (!oReg.test(smobilepwd)) {
                $('.msg4').css({ display: 'block' })
                $('.msg4 img').css({ background: ' url(../img/register.png) no-repeat scroll -14px 0px transparent' })
                $('.font4').html('请输入正确的密码');
                $('#mobile_pwd').css({ border: '1px solid red' });
                $('.font4').css({ color: 'red' });
            } else {
                // $('.font1').addClass('c-g');
                $('.font4').html(' ');
                $('#mobile_pwd').css({ border: '' });
                $('.msg4').css({ display: 'block' })
                $('.msg4 img').css({ background: ' url(../img/register.png) no-repeat scroll -33px 0px transparent' })
            }

        }) 

    })
})(jQuery);