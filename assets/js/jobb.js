$(document).ready(function(){
  $('#jobs li').click(function(){

    var tP = $(this).next('ul');

    $('#jobs ul').not(tP).hide();
    $('#jobs li').not(this).removeClass('bRed');
    $('#jobs li').not(this).removeClass('padB');
    $('#jobs ul').not(tP).removeClass('bRed');

    tP.toggle();
    $(this).toggleClass('bRed');
    $(this).toggleClass('padB');
    tP.toggleClass('bRed');

    /*document.addEventListener('mousedown', function (event) { //prevent double click selection
      if (event.detail > 1) {
        event.preventDefault();
      }
    }, false);*/
  });
});

/*jQuery.fn.mouseIsOver = function lag() {
  if($(this[0]).is(":hover"))
  {
      return true;
  }
  return false;
}; 

setInterval(function lag(){
  var $sample = $('li');
  var $par = $('p');

if($par.mouseIsOver()) {
     $sample.addClass('nok')
  }
  else {
     $sample.removeClass('nok')
  }
}, 200);*/

/*jQuery.fn.mouseIsOver = function () {
  if($(this[0]).is(":hover"))
  {
      return true;
  }
  return false;
}; 

setInterval(function(){
  var $sample = $("#sample");
  if($sample.mouseIsOver()) {
     $sample.css("background", "yellow");
  }
  else {
     $sample.css("background", "");
  }
}, 200);*/

/*document.addEventListener('mousedown', function (event) { //prevent double click selection
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);*/

/*function kaka() {
  $('li').addClass('noclick');
}*/