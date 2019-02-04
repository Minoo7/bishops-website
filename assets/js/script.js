$(document).ready(function(){
  $('div.places').click(function(){

    var child = $(this).children();

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

function resetCollapse() {
  $('div.places section').hide();
  $('div.places .arrowdown').attr('class','arrow');
  $('div.places a#tel').removeClass('newline');
}

function linkclick() {
  var link = document.getElementById('k');
  link.click();
}

document.addEventListener('mousedown', function (event) { //prevent double click selection
    if (event.detail > 1) {
      event.preventDefault();
    }
}, false);

function showtimes() {
  //$('.places aside div').toggle();

  $(".places aside p").click(function() { try {
    return false;
  }
  finally {
    //$('<form method="get" action="' + $(this).attr("onclick") + '"></form>').appendTo("body").submit();
    $('.places aside div').toggle();
  }
  });
  
  /*$(".places aside *").click(function() { try {return false;}
  finally {
    $('<form method="get" action="' + $(this).attr("onclick") + '"></form>').appendTo("body").submit();
  }
  });*/
}