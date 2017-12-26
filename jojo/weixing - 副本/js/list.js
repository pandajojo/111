(function ($) {
    $(function () {


        $(".bxslider").show().bxSlider({
            // auto:true,
            // infiniteLoop:true
        })


        $('h3.dropdown').click(function() {
            $(this).next().toggle({display:'block'})
        })



    });


})(jQuery)