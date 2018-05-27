$(".answer").click(function() {
    while (solutionArray.length > 0) {
        placeHint();
    }
    $(".tableContainer2").css("visibility", "hidden");
    $(".youWin").css("visibility", "visible");
    $(".youWin").text("no score");
});