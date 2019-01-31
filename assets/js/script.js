function showbishops() {
    $('.arrow').toggleClass('arrowdown');
    $('a[onclick="showbishops()"] > div').toggle();
}