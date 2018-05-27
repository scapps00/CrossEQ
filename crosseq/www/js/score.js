var hintTracker = [];

function hintScore() {
    hintTracker.push(1);
    if (parseInt($(".score").text()) + (hintTracker.length * 15) < 999) {
        $(".score").text(parseInt($(".score").text()) + (hintTracker.length * 15));
    } else {
        $(".score").text("999");
        gameOver();
    }
}

function moveScore() {
    if (parseInt($(".score").text()) + 5 < 999) {
        $(".score").text(parseInt($(".score").text()) + 5);
    } else {
        $(".score").text("999");
        gameOver();
    }
}

function clockScore() {
    if (parseInt($(".score").text()) + 30 < 999) {
        $(".score").text(parseInt($(".score").text()) + 30);
    } else {
        $(".score").text("999");
        gameOver();
    }
}

function gameOver() {
    $(".tableContainer2").css("visibility", "hidden");
    $(".youWin").css("visibility", "visible");
    $(".youWin").text("game over!");
    $("*").unbind();
    $(".youWin").append("<br>you hit 999 pts");
    $(".youWin").append("<div class='reset'>play again</div>");
    $(".reset").click(function() {
        reset();
    });
}