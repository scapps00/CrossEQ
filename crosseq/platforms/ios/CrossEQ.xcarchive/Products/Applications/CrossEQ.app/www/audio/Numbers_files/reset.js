function reset() {
    $("td:not(.hint):not(.countdown):not(.score):not(.answer):not(.equal)").text("");
    $(".youWin").css("visibility", "hidden");
    $(".tableContainer2").css("visibility", "visible");
    $(".static").removeClass("static");
    hintTracker = [];
    solution = [];
    choicesArray = [];
    solutionGen();
    console.log(solution);
    $("#min").text("0");
    $("#sec").text("00");
    clock = setInterval(clockInc, 1000);
    solutionArray = [];
    solution.forEach(placeInArray);
    console.log(solutionArray);
    $(".hint").click(function() {
        placeHint();
        checkAns();
        assignClick();
    });
    $(".answer").click(function() {
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
    $(".reset").unbind();
}