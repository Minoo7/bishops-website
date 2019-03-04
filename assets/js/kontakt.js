jQuery(document).on('click','html,body,#main',function(event){
    event.preventDefault();
    event.stopPropagation();   
});

$(document).ready(function(){
    $('.numberCon h3').click(function showN(){
        if ($('.numberCon ul').eq(0).css('display') == 'none') {     
            $('.numberCon i').addClass('arrowdown'); 
            $(this).off('click', showN);
            $('.numberCon h3').addClass('wait');

            var d = 0, f = 0;
            var timerDispOn = setInterval(displayOn, 10);
            var timerFadeOn = setInterval(fadeOn, 20);
        }

        if ($('.numberCon ul').eq(0).css('display') == 'block') {
            $('.numberCon i').removeClass('arrowdown');
            $(this).off('click', showN);
            $('.numberCon h3').addClass('wait');
            
            var d = $('.numberCon ul').length, f = $('.numberCon ul').length;
            var timerFadeOff = setInterval(fadeOff, 10);
            var timerDispOff = setInterval(displayOff, 20);
        }

        function fadeOn() {
            var ul_f = $('.numberCon ul').eq(f);     
            ul_f.addClass('fullOpacity');
            f++;

            if ($('.numberCon ul:last-child').css('opacity') == 1) {
                $('.numberCon h3').on('click', showN);
                $('.numberCon h3').removeClass('wait');
                clearInterval(timerFadeOn);
            }
        }

        function fadeOff() {
            var ul_f = $('.numberCon ul').eq(f)
            ul_f.removeClass('fullOpacity');
            f--;

            if ($('.numberCon ul').eq(0).css('opacity') == 0) {
                clearInterval(timerFadeOff);
            }
        }

        function displayOn() {
            var ul_d = $('.numberCon ul').eq(d);
            ul_d.addClass('show');
            d++;

            if ($('.numberCon ul:last-child').css('display') == 'block') {
                clearInterval(timerDispOn);
            }    
        }

        function displayOff() {
            var ul_d = $('.numberCon ul').eq(d);
            ul_d.removeClass('show');
            d--;
            
            if ($('.numberCon ul').eq(0).css('display') == 'none') {
                $('.numberCon h3').on('click', showN);
                $('.numberCon h3').removeClass('wait');
                clearInterval(timerDispOff);
            }
        }
    });
});