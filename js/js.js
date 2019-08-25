let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
var width = $(window).width();
if (width > 1200) {
  $("#responsive").remove();
}
else {
  $(".item-2").remove();
}
