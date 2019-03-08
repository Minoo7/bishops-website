$(document).ready(function(){
  $('#jobs h2').click(function(){

    var tP = $(this).next('div');

    $('#jobs div').not(tP).hide();
    $('#jobs h2').not(this).removeClass('bRed');
    $('#jobs h2').not(this).removeClass('padB');
    $('#jobs div').not(tP).removeClass('bRed');

    tP.toggle();
    $(this).toggleClass('bRed');
    $(this).toggleClass('padB');
    tP.toggleClass('bRed');

    document.addEventListener('mousedown', function (event) { //prevent double click selection
      if (event.detail > 1) {
        event.preventDefault();
      }
    }, false);
  });
});