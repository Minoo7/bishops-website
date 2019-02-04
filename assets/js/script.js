$(document).ready(function(){
  $('div.places').click(function(){
    
    var child = $(this).children();
    var tsec = $(child).children('section');
    var tard = $(child).children('.arrowdown');
    var ttel = $(child).children('a#tel');

    function showOne() {
      $('div.places section').not(tsec).hide();
      $('div.places .arrowdown').not(tard).attr("class","arrow");
      $('div.places a#tel').not(ttel).removeClass('newline');
    }
    showOne(tsec);

    $(child).children('section').toggle();

    $(child).children('.arrow').toggleClass('arrowdown');
    $(child).children('a#tel').toggleClass('newline');

    $("a").click(function() { try {return false;}
      finally {
        $('<form method="get" action="' + $(this).attr("href") + '"></form>').appendTo("body").submit();
      }
    });
  });

  $(".places aside p").click(function() { try {return false;}
    finally {
      $('.places aside .miniarrow').toggleClass('miniarrowdown');
      $('.places aside div').toggle();
    }
  });
  
});

/*function resetCollapse() {
  $('div.places section').hide();
  $('div.places .arrowdown').attr('class','arrow');
  $('div.places a#tel').removeClass('newline');
}*/

document.addEventListener('mousedown', function (event) { //prevent double click selection
    if (event.detail > 1) {
      event.preventDefault();
    }
}, false);

function showtimes() {
  $(".places aside p").click(function() { try {
    return false;
  }
  finally {
    $('.places aside div').toggle();
  }
  });
}