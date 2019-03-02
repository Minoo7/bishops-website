$(function() {
    $('nav a[href*="' + (location.pathname.split("/")[1]).split(".html")[0]).addClass('active');
  });