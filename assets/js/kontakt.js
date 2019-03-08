$(document).ready(function(){
    $('.numbers h3').click(function showN(){

        $('footer').toggleClass('footerM');

        if ($('.numbers li').eq(0).css('display') == 'none') {
            $('.numbers i').addClass('arrowdown'); 
            $(this).off('click', showN);
            $('.numbers h3').addClass('wait');

            var d = 0, f = 0;
            var timerDispOn = setInterval(displayOn, 10);
            var timerFadeOn = setInterval(fadeOn, 20);
        }

        if ($('.numbers li').eq(0).css('display') == 'block') {
            $('.numbers i').removeClass('arrowdown');
            $(this).off('click', showN);
            $('.numbers h3').addClass('wait');
            
            var d = $('.numbers li').length, f = $('.numbers li').length;
            var timerFadeOff = setInterval(fadeOff, 10);
            var timerDispOff = setInterval(displayOff, 20);
        }

        function fadeOn() {
            var ul_f = $('.numbers li').eq(f);     
            ul_f.addClass('fullOpacity');
            f++;

            if ($('.numbers li:last-child').css('opacity') == 1) {
                $('.numbers h3').on('click', showN);
                $('.numbers h3').removeClass('wait');
                clearInterval(timerFadeOn);
            }
        }

        function fadeOff() {
            var ul_f = $('.numbers li').eq(f)
            ul_f.removeClass('fullOpacity');
            f--;

            if ($('.numbers li').eq(0).css('opacity') == 0) {
                clearInterval(timerFadeOff);
            }
        }

        function displayOn() {
            var ul_d = $('.numbers li').eq(d);
            ul_d.addClass('show');
            d++;

            if ($('.numbers li:last-child').css('display') == 'block') {
                clearInterval(timerDispOn);
            }    
        }

        function displayOff() {
            var ul_d = $('.numbers li').eq(d);
            ul_d.removeClass('show');
            d--;
            
            if ($('.numbers li').eq(0).css('display') == 'none') {
                $('.numbers h3').on('click', showN);
                $('.numbers h3').removeClass('wait');
                clearInterval(timerDispOff);
            }
        }
    });
});