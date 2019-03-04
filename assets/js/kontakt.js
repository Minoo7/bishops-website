function showN() {
    $('.numberCon i').toggleClass('arrowdown');
    
    var delayInMilliseconds = 1000; //1 second

    /*function fadeOn() {
        i++;
        var ul = $('.numberCon ul').eq(i)
        setTimeout(function () {
            ul.addClass('fullOpacity');
          }, 1500);
        // ul.addClass('fullOpacity');
        console.log($('.numberCon ul:last-child').css('opacity'))
        if ($('.numberCon ul:last-child').css('opacity') > 0) {
            clearInterval(timerOn);
        }
    }*/

    setTimeout(function fadeOn() {
        i++;
        var ul = $('.numberCon ul').eq(i)
        ul.addClass('fullOpacity');
        // ul.addClass('fullOpacity');
        console.log($('.numberCon ul:last-child').css('opacity'))
        /*if ($('.numberCon ul:last-child').css('opacity') > 0) {
            clearInterval(timerOn);
        }*/
    }, 500);

    fadeOn();

    /*function fadeOff() {
        i--;
        var ul = $('.numberCon ul').eq(i)
        ul.removeClass('fullOpacity');
        console.log($('.numberCon ul:last-child').css('opacity'))
        if ($('.numberCon ul:first-child').css('opacity') == 0) {
            clearInterval(timerOff);
        }
    }

    /*if ($('.numberCon ul:last-child').css('opacity') == 0) {
        var i = -1;
        var timerOn = setInterval(fadeOn, 100);
    }
    else {
        //var i = $('.numberCon ul').length
        var i = 7;
        var timerOff = setInterval(fadeOff, 100);
    }*/
}