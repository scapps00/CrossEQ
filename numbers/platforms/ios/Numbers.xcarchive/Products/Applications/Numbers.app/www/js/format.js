var widthTable = $(".grid").width();
$(".grid").css("height", widthTable + "px");
$(".grid").css("max-height", widthTable + "px");
$(".grid").css("min-height", widthTable + "px");

$(".choices").width($(".grid").width());
$(".choices").css("max-width", $(".grid").width() + "px");
$(".choices").css("min-width", $(".grid").width() + "px");

$(".choices").height($(".choices").width() / 6 * 4);
$(".choices").css("max-height", $(".choices").width() / 6 * 4 + "px");
$(".choices").css("min-height", $(".choices").width() / 6 * 4 + "px");

// $(".choices tr td").width($(".choices").width() / 6);
// $(".choices tr td").css("max-width", $(".choices").width() / 6 + "px");
// $(".choices tr td").css("min-width", $(".choices").width() / 6 + "px");
