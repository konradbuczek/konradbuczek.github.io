$(document).ready(function(){

$('.es-carousel ul li a img').click(function () {

$('.rg-image').hide();
var offset = $(this).offset(); // Contains .top and .left

offset.left -= 20;
offset.top -= 90;

$('html, body').animate({
    scrollTop: offset.top,
    scrollLeft: offset.left
});

$('.rg-image').show();

});

});