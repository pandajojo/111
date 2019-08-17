(function($){

 


    $(function() {


        var country = $('#country'),
            nationality = $('#nationality'),
            profession = $('#profession'),
            education = $('#education'),
            averageonlinetime = $('#averageonlinetime'),
            state =
                {
                    'Canada':
                        { "select": "Select", "AB": "Alberta", "BC": "British Columbia", "MB": "Manitoba", "NB": "New Brunswick", "NL": "Newfoundland and Labrador", "NS": "Nova Scotia", "NT": "Northwest Territories", "NU": "Nunavut", "ON": "Ontario", "PE": "Prince Edward Island", "QC": "Quebec", "SK": "Saskatchewan", "YT": "Yukon" },
                    'United States':
                        { "select": "Select", "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia", "GUAM": "Guam", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VI": "Virgin Island", "VA": "Virginia", "WA": "Washington", "DC": "Washington D.C.", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" }
                };

        averageonlinetime.val('06').change();

        _country(country);



        // 生日日期插件
            $("#birth").datepicker({
                dateFormat: 'yy-mm-dd',
                yearRange: '1917:2017',
                changeMonth: true,
                changeYear: true
            });



        country
            .show()
            .change(function () {
                $('#zipcode').removeAttr('readonly', 'readonly');
                $('#myCity').hide();
                $('#myTown').hide();
                $('#city').show();
                nationality.val($(this).val()).change();
                _country(country)
                return true;
            });

        function _country(_country) {
            $('#gr-form-zipcode').children('.item-head').html('<i class="fa"></i>' + (_country.val() == 'Canada' ? 'Postal Code' : '邮递区号'));
            $('#gr-form-area').children('.item-head').html('<i class="fa"></i>' + (_country.val() == 'Canada' ? '省' : (_country.val() == 'Taiwan') ? '區' : '州'));
            $('#gr-form-tel').children('.item-head').children('i').removeClass('fa-asterisk');
            $('#gr-form-city').children('.item-head').children('i').removeClass('fa-asterisk');
            $('#gr-form-address').children('.item-head').children('i').removeClass('fa-asterisk');
            $('#gr-form-tel').children('.item-head').children('i').removeClass('fa-asterisk');
            $('#gr-form-birth').children('.item-head').children('i').removeClass('fa-asterisk');
            $(".notice-tw-rma").addClass('hide');
            $("#gr-form-area-select-input").html(function () {
                var select = '<input type="text" id="area" name="register[area]" class="form-control" />';
                return select;
            });
            switch (_country.val()) {
                case "United States":
                case "United States Minor Outlying Islands":
                case "Canada":
                    var get_state = state[_country.val()],
                        html = '';
                    $('#gr-form-zipcode').children('.item-head').html('<i class="fa fa-asterisk"></i>' + (_country.val() == 'Canada' ? 'Postal Code' : '邮递区号'));
                    $('#gr-form-area').children('.item-head').html('<i class="fa fa-asterisk"></i>' + (_country.val() == 'Canada' ? '省' : '州'));
                    $('#gr-form-city').children('.item-head').children('i').addClass('fa-asterisk');
                    $('#gr-form-address').children('.item-head').children('i').addClass('fa-asterisk');
                    $("#gr-form-area-select-input").html(function () {
                        var select = '<select name="register[area]" id="area" class="form-control">';
                        for (var x in get_state) {
                            select += (get_state[x] == 'Select' ? '<option value="">' + get_state[x] + '</option>' : '<option value="' + x + '">' + get_state[x] + '</option>');
                        }
                        select += '</select>';
                        return select;
                    });
                    break;
                case "Taiwan":
                    $('#gr-form-tel').children('.item-head').children('i').addClass('fa-asterisk');
                    $(".notice-tw-rma").removeClass('hide');
                    break;
                case "China":
                    $('#gr-form-tel').children('.item-head').children('i').addClass('fa-asterisk');
                    break;
                case 'Russia':
                    $('#gr-form-birth').children('.item-head').children('i').addClass('fa-asterisk');
                    break;
            }
        }











        // Submit Form



        $.validator.setDefaults({
            submitHandler: function () {
                alert("提交事件!");
            }
        });


        // $('#submit').click(function (e) {
        //     // _block_ui('资料载入中，请稍后');
        //     e.preventDefault();
        //     $("#gr-member-register").submit();
        //     return false;
        // });
        
            
            
            $("#gr-member-register").validate({

                
                rules:
                    {
                        // 'register[birth]': { required: function (e) { return (country.val() == 'Russia' ? true : false); } },
                        // 'register[zipcode]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        // 'register[address]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        // 'register[city]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        // 'register[area]': { required: function (e) { return (country.val() == 'United States' || country.val() == 'Canada' ? true : false); } },
                        // 'email':
                        //     {
                        //         required: true,
                        //         email: true,
                        //         remote:
                        //             {
                        //                 url: 'javascript:;',
                        //                 type: "post",
                        //                 data:
                        //                     {
                        //                        
                                                    // email:$('input[name=email]').val()
                                                    // action:'/regSave'
                        //                     }
                        //             }
                        //     },
                        'password':
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
                        // 'captcha':
                        //     {
                        //         required: true,
                        //         number: true,
                        //         remote:
                        //             {
                        //                 url: 'javascript:;',
                        //                 type: "post",
                        //                 data:
                        //                     {
                        //                     }
                        //             }
                        //     }
                    },
                messages:
                    {
                        'register[country]': "请选择您的国家/地区。",
                        'register[birth_y]': "请选择您生日的年份。",
                        'register[birth_m]': "请选择您生日的月份。",
                        'register[birth_d]': "请选择您生日的日期。",
                        'password':
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
                    // _block_ui('');
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
                // onfocusout: false,
                // onclick: false,
                // onkeyup: false
            });

        

       




     
 
     
        









    })

})(jQuery)