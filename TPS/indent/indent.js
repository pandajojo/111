
(function ($) {
    console.log($)
    $(function () {


        function in_array(search, array) {
            for (var i in array) {
                if (array[i] == search) {
                    return true;
                }
            }
            return false;
        }

        var country_id = "156";
        var data = { "goods_list": [{ "goods_sn_main": "83909290", "goods_name": "THE TREE\u901a\u7528\u5e73\u677f\u624b\u673a\u5145\u7535\u5b9d\u8ff7\u4f60\u4fbf\u643a\u79fb\u52a8\u7535\u6e90\u81ea\u5e26\u7ebf 10400\u6beb\u5b89\u6807\u914d\u5145\u7535\u5b9d \u5168\u56fd\u5305\u90ae", "spec": "", "price_show": "\u00a5125.19", "quantity": 1, "goods_img": "Erp\/Commodity\/201705\/83909290\/592e6fab47bab_thumb.jpg" }], "amount_show": "\u00a5125.19" }; console.log(data);
        //提示语言包
        var lang_map =
            {
                "156": {
                    "lv2": "省份/直辖市",
                    "lv3": "城市",
                    "lv4": "区/县"
                },
                "410": {
                    "lv2": "市/道",
                    "lv3": "",
                    "lv4": ""
                },
                "840": {
                    "lv2": "州",
                    "lv3": "",
                    "lv4": ""
                }
            };

        $('.btn').click(function() {
            
            if ($('#box_addr_detail').val()==''){
                $('.choice').css({display:'block'})
                $('.choice').html('详细地址不能为空')
                setTimeout(function() {
                    $('.choice').fadeOut('slow')
                },1000)
            }
            else if ($('#box_consignee').val() == '') {
                $('.choice').css({ display: 'block' })
                $('.choice').html('收货人不能为空')
                setTimeout(function () {
                    $('.choice').fadeOut('slow')
                }, 1000)
                
            }
            else if ($('#box_phone').val() == '') {
                $('.choice').css({ display: 'block' })
                $('.choice').html('请输入正确的手机号码')
                setTimeout(function () {
                    $('.choice').fadeOut('slow')
                }, 1000)
            }
            else if ($('#box_reserve_num').val() == '') {
                $('.choice').css({ display: 'block' })
                $('.choice').html('请输入正确的备用号码')
                setTimeout(function () {
                    $('.choice').fadeOut('slow')
                }, 1000)
            }
        })
        //按级别刷新选择框
        var refresh_box_addr_by_lv = function (id, lang, data) {
            var obj = $('#' + id);
            obj.children().remove();
            obj.append(
                $('<option />').val(0).text(lang)
            );
            for (var code in data) {
                obj.append(
                    $('<option/>').val(code).text(data[code].name)
                );
            }
            return true;
        }

        //国家级地址选择的响应
        var cb_box_country = function () {
            var box_country = $('#box_country');
            var country_code = box_country.val();

            box_country.nextAll().remove();
            if (country_code === '0') {
                box_country.css('color', "#999");
                return true;
            }
            box_country.css('color', "#333");

            // 若 leaf 不为空，则可以走到 for 里面生成下一级
            for (var i in linkage[country_code].leaf) {
                $('#box_addr').append(
                    $('<select/>').addClass("select").css('color', "#999").attr('id', "box_addr_lv2").on('change', cb_box_addr_lv2)
                );
                refresh_box_addr_by_lv("box_addr_lv2", lang_map[country_code].lv2, linkage[country_code].leaf);
                break;
            }
            return true;
        }

        //2级地址选择的响应
        var cb_box_addr_lv2 = function () {
            var country_code = $('#box_country').val();
            var lv2_code = $('#box_addr_lv2').val();

            $('#box_addr_lv2').nextAll().remove();

            //生成City Text
            if (country_code == 840) {
                $('#box_addr').append(
                    $('<input type="text" id="box_city" maxlength="32"/>').addClass("input").attr('placeholder', '城市/郡县')
                );
            }

            if (lv2_code == 0) {
                $('#box_addr_lv2').css('color', "#999");
                return true;
            }
            $('#box_addr_lv2').css('color', "#333");

            for (var i in linkage[country_code].leaf[lv2_code].leaf) {
                $('#box_addr').append(
                    $('<select/>').addClass("select").css('color', "#999").attr('id', "box_addr_lv3").on('change', cb_box_addr_lv3)
                );
                refresh_box_addr_by_lv("box_addr_lv3", lang_map[country_code].lv3, linkage[country_code].leaf[lv2_code].leaf);
                break;
            }
            return true;
        }

        //3级地址选择的响应
        var cb_box_addr_lv3 = function () {
            var country_code = $('#box_country').val();
            var lv2_code = $('#box_addr_lv2').val();
            var lv3_code = $('#box_addr_lv3').val();

            $('#box_addr_lv3').nextAll().remove();

            if (lv3_code == 0) {
                $('#box_addr_lv3').css('color', "#999");
                return true;
            }
            $('#box_addr_lv3').css('color', "#333");

            if (lv3_code == 8104) {
                hk_address_8104(true);
            } else {
                hk_address_8104(false);
            }

            for (var i in linkage[country_code].leaf[lv2_code].leaf[lv3_code].leaf) {
                $('#box_addr').append(
                    $('<select/>').addClass("select").css('color', "#999").attr('id', "box_addr_lv4").on('change', cb_box_addr_lv4)
                );
                refresh_box_addr_by_lv("box_addr_lv4", lang_map[country_code].lv4, linkage[country_code].leaf[lv2_code].leaf[lv3_code].leaf);
                break;
            }
            return true;
        }

        //4级地址选择响应
        var cb_box_addr_lv4 = function () {
            var lv4_code = $('#box_addr_lv4').val();

            if (lv4_code == 0) {
                $('#box_addr_lv4').css('color', "#999");
                return true;
            }
            $('#box_addr_lv4').css('color', "#333");
            return true;
        }

        //box country的自动选择并隐藏
        var box_country_init = function () {
            var box_country = $('#box_country');
            box_country.val(country_id);
            cb_box_country();
        }

        //地址选择框的初始化
        var address_init = function () {
            var box_country = $('#box_country');
            // 其他地区为000
            linkage['000'] = { name: '其他', leaf: [] };
            if (country_id == 156) {
                delete (linkage[country_id].leaf[81]);
                delete (linkage[country_id].leaf[82]);
                delete (linkage[country_id].leaf[71]);
            }
            else if (country_id == 344) {
                country_id = 156;
                for (var i = 11; i <= 71; i++) {
                    delete (linkage[country_id].leaf[i]);
                }
                delete (linkage[country_id].leaf[82]);
            }

            // box append 国家列表
            box_country.css('color', "#999");
            for (var country_code in linkage) {
                if (in_array(country_code, [country_id])) {
                    box_country.append(
                        $('<option/>').val(country_code).text(linkage[country_code].name)
                    );
                }
            }

            box_country_init();

        }


        var hk_address_8104_old = "";
        var hk_address_8104 = function (b) {
            var addr_detail = $('#box_addr_detail');
            if (b) {
                var tmp = addr_detail.val();
                var addr_8104 = "4/F, Kowloon Center, No.29-39 Ashley Road, Tsim Sha Tsui, Hong Kong 尖沙咀亞士厘道29-39號九龍中心 4樓";
                if (tmp != "") {
                    if (tmp != hk_address_8104_old) {
                        hk_address_8104_old = tmp;
                    }
                }
                addr_detail.val(addr_8104);
                addr_detail.attr("readonly", "readonly");
                addr_detail.attr("disable", "true");
            } else {
                addr_detail.removeAttr("readonly");
                if (hk_address_8104_old != "") {
                    //addr_detail.val(hk_address_8104_old);
                }
                addr_detail.attr("disable", "false");
            }
        }



        'use strict';
        address_init();
    });
})(jQuery);


