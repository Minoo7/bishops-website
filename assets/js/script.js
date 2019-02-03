$(document).ready(function(){
  $('div.places').click(function(){

    var child = $(this).children();

    $(child).children('section').toggle();
    $(child).children('.arrow').toggleClass('arrowdown');
    $(child).children('a#tel').toggleClass('newline');
    //$(child).children('b').toggle();

    $("a").click(function() { try {return false;}
      finally {
        $('<form method="get" action="' + $(this).attr("href") + '"></form>').appendTo("body").submit();
      }
    });
  });
});

function linkclick() {
  var link = document.getElementById('k');
  link.click();
}

document.addEventListener('mousedown', function (event) { //prevent double click selection
    if (event.detail > 1) {
      event.preventDefault();
    }
}, false);