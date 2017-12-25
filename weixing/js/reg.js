(function($){


    $(function() {



        // 生日日期插件
            $("#birth").datepicker({
                dateFormat: 'yy-mm-dd',
                yearRange: '1917:2017',
                changeMonth: true,
                changeYear: true
            });




        // Submit Form
        $('#submit').click(function (e) {
            _block_ui('资料载入中，请稍后');
            e.preventDefault();
            $("#gr-member-register").submit();
            return false;
        });
        
            
            
            $("#gr-member-register").validate({

                
                rules:
                    {
                        'register[birth]': { required: function (e) { return (country.val() == 'Russia' ? true : false); } },
                        'register[zipcode]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        'register[address]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        'register[city]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        'register[area]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        'register[email]':
                            {
                                required: true,
                                email: true,
                                remote:
                                    {
                                        url: 'https://account-cn.msi.com/home/member_process',
                                        type: "post",
                                        data:
                                            {
                                                msi_csrf: $("input[name=msi_csrf]").val(),
                                                new_email: function () { return $("#email").val(); },
                                                action: 'check_email'
                                            }
                                    }
                            },
                        'pwd':
                            {
                                required: true,
                                minlength: 6,
                                maxlength: 64
                            },
                        'pwd_confirm':
                            {
                                required: true,
                                equalTo: "#pwd"
                            },
                        'register[first_name]': 'required',
                        'register[country]': 'required',
                        'register[tel]': { required: function () { return (country.val() == 'Taiwan' || country.val() == 'China' ? true : false); } },
                        'captcha':
                            {
                                required: true,
                                number: true,
                                remote:
                                    {
                                        url: 'https://account-cn.msi.com/home/cprocess',
                                        type: "post",
                                        data:
                                            {
                                                msi_csrf: $("input[name=msi_csrf]").val(),
                                                captcha: function () { return $("input[name=captcha]").val(); },
                                                action: 'check_captcha'
                                            }
                                    }
                            }
                    },
                messages:
                    {
                        'register[country]': "请选择您的国家/地区。",
                        'register[birth_y]': "请选择您生日的年份。",
                        'register[birth_m]': "请选择您生日的月份。",
                        'register[birth_d]': "请选择您生日的日期。",
                        'pwd':
                            {
                                required: "请输入密码。",
                                minlength: "其长度必须是 6 到 12 个字符。",
                                maxlength: "其长度必须是 6 到 12 个字符。"
                            },
                        'pwd_confirm':
                            {
                                required: "请输入密码。",
                                equalTo: "您两次输入的密码不一样。"
                            },
                        'register[first_name]': "请输入您的姓名。",
                        'register[title]': "请选择您的性别。",
                        'register[myCity]': "請輸入您的縣市",
                        'register[myTown]': "請輸入您的鄉鎮市區",
                        'register[email]':
                            {
                                required: "电子邮件格式错误。",
                                remote: "帐户已存在，请尝试使用其他电子邮件进行注册。"
                            },
                        'captcha':
                            {
                                required: "请输入授权码。",
                                remote: "代码错误。"
                            },
                        'register[last_name]': "请输入您的姓名。",
                        'register[nationality]': "请选择您的国家/地区。",
                        'register[address]': "请输入您的地址。",
                        'register[profession]': "请选择您的职业。",
                        'register[education]': "请选择您的教育程度。",
                        'register[averageonlinetime]': "每天平均上网时间"
                    },
                invalidHandler: function (event, validator) {
                    _block_ui('');
                },
                errorElement: "div",
                errorPlacement: function (error, element) {
                    if (element.is(':radio') || element.is(':checkbox')) {
                        element.parent('label').parent('div').append(error);
                    }
                    else {
                        error.insertAfter(element);
                    }
                },
                onfocusout: false,
                onclick: false,
                onkeyup: false
            });

        

       




     
 
     
        









    })

})(jQuery)