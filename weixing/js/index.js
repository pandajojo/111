(function($){
    $(function() {


        // 轮波图
        var index = 0;
        $(".bxslider").show().bxSlider()
        $('.bx-prev').click(function() {
            index--;
            if(index<0){
                index=2;
            }
            $(this).parent().parent().siblings('.bx-viewport').find('.vbox').animate({left:'-1262'*index})
        })

        $('.bx-next').click(function () {
            index++;
            if (index > 2) {
                index = 0;
            }
            $(this).parent().parent().siblings('.bx-viewport').find('.vbox').animate({ left: '-1262' * index })
        })



        // $('.pic').hover(function() {
        //     this.animate({})

        // },function(){

        // })






      


        
       









    }); 
   





   

})(jQuery)




