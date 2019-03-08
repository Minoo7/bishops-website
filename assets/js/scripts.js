$(function() {
  for (var i = 1; i < 6; i++) {
    var x = location.pathname;
    var a = document.getElementsByTagName("a")[i]
    var ahr = document.getElementsByTagName("a")[i].getAttribute("href");
    if (ahr.includes('.html')) {
      ahr = ahr.replace('./', '')
      ahr = ahr.replace('.html', '')
    }
    if (x.includes(ahr)) {
      a.classList.add("active");
    }
  }
});