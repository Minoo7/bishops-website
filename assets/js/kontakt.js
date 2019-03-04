$(document).ready(function(){
    $('.numbers h3').click(function showN(){
        // jQuery(document).on('click','html,body,#main',function(event){
        //     event.preventDefault();
        //     event.stopPropagation();   
        // });
        if ($('.numbers ul').eq(0).css('display') == 'none') {     
            $('.numbers i').addClass('arrowdown'); 
            $(this).off('click', showN);
            $('.numbers h3').addClass('wait');

            var d = 0, f = 0;
            var timerDispOn = setInterval(displayOn, 10);
            var timerFadeOn = setInterval(fadeOn, 20);
        }

        if ($('.numbers ul').eq(0).css('display') == 'block') {
            $('.numbers i').removeClass('arrowdown');
            $(this).off('click', showN);
            $('.numbers h3').addClass('wait');
            
            var d = $('.numbers ul').length, f = $('.numbers ul').length;
            var timerFadeOff = setInterval(fadeOff, 10);
            var timerDispOff = setInterval(displayOff, 20);
        }

        function fadeOn() {
            var ul_f = $('.numbers ul').eq(f);     
            ul_f.addClass('fullOpacity');
            f++;

            if ($('.numbers ul:last-child').css('opacity') == 1) {
                $('.numbers h3').on('click', showN);
                $('.numbers h3').removeClass('wait');
                clearInterval(timerFadeOn);
            }
        }

        function fadeOff() {
            var ul_f = $('.numbers ul').eq(f)
            ul_f.removeClass('fullOpacity');
            f--;

            if ($('.numbers ul').eq(0).css('opacity') == 0) {
                clearInterval(timerFadeOff);
            }
        }

        function displayOn() {
            var ul_d = $('.numbers ul').eq(d);
            ul_d.addClass('show');
            d++;

            if ($('.numbers ul:last-child').css('display') == 'block') {
                clearInterval(timerDispOn);
            }    
        }

        function displayOff() {
            var ul_d = $('.numbers ul').eq(d);
            ul_d.removeClass('show');
            d--;
            
            if ($('.numbers ul').eq(0).css('display') == 'none') {
                $('.numbers h3').on('click', showN);
                $('.numbers h3').removeClass('wait');
                clearInterval(timerDispOff);
            }
        }
    });
});