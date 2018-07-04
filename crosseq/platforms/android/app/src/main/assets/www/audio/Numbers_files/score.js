var hintTracker = [];

function hintScore() {
    hintTracker.push(1);
    if (parseInt($(".score").text()) + (hintTracker.length * 15) < 999) {
        var scoreCalc = (parseInt($(".score").text()) + (hintTracker.length * 15)).toString();
        if (scoreCalc.length == 2) {
            $(".score").text("0" + scoreCalc);
        } else {
            $(".score").text(scoreCalc);
        }
    } else {
        $(".score").text("999");
        gameOver();
    }
}

function moveScore() {
    if (parseInt($(".score").text()) + 5 < 999) {
        var scoreCalc = (parseInt($(".score").text()) + 5).toString();
        if (scoreCalc.length == 1) {
            $(".score").text("00" + scoreCalc);
        } else if (scoreCalc.length == 2) {
            $(".score").text("0" + scoreCalc);
        } else {
            $(".score").text(scoreCalc);
        }
    } else {
        $(".score").text("999");
        gameOver();
    }
}

function clockScore() {
    if (parseInt($(".score").text()) + 30 < 999) {
        var scoreCalc = (parseInt($(".score").text()) + 30).toString();
        if (scoreCalc.length == 2) {
            $(".score").text("0" + scoreCalc);
        } else {
            $(".score").text(scoreCalc);
        }
    } else {
        $(".score").text("999");
        gameOver();
    }
}

function gameOver() {
    document.getElementById("loseAudio").play();
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