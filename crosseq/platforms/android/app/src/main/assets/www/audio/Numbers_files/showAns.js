$(".answer").click(function() {
    document.getElementById("ansAudio").play();
    clearInterval(clock);
    while (solutionArray.length > 0) {
        placeHintAns();
    }
    $(".tableContainer2").css("visibility", "hidden");
    $(".youWin").css("visibility", "visible");
    $(".youWin").text("no score");
    $("*").unbind();
    $(".youWin").append("<div class='reset'>play again</div>");
    $(".reset").click(function() {
        reset();
    });
});