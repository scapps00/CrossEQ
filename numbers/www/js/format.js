var widthTable = $(".grid").width();
$(".grid").css("height", widthTable + "px");

$(".choices").width($(".grid").width());

$(".choices").height($(".choices").width() / 6 * 4);

$(".choices tr td").width($(".choices").width() / 6);