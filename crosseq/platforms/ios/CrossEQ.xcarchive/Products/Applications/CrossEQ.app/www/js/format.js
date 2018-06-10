var gameHeight = $(window).height();
$(".entireContainer").height(gameHeight);
var gameWidth = $(window).height() / 1.719;
if (gameWidth > $(window).width()) {
    gameWidth = $(window).height() / 2;
}
$(".entireContainer").width(gameWidth);

var widthTable = $(".grid").width();
$(".grid").css("height", widthTable + "px");

$(".choices").height($(".choices").width() / 5 * 4);
