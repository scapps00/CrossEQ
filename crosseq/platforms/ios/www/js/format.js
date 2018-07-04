var gameHeight = $(window).height() - 20;
$(".entireContainer").height(gameHeight);
var gameWidth = gameHeight / 1.719;
if (gameWidth > $(window).width()) {
    gameWidth = gameHeight / 2;
}
$(".entireContainer").width(gameWidth);

var widthTable = $(".grid").width();
$(".grid").css("height", widthTable + "px");

$(".choices").height($(".choices").width() / 5 * 4);
