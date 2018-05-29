function checkAns() {
        if (eval(textGrid("2-2"), textGrid("2-3"), textGrid("2-4"), textGrid("2-6"))) {
            if (eval(textGrid("3-1"), textGrid("3-2"), textGrid("3-3"), textGrid("3-5"))) {
                if (eval(textGrid("4-4"), textGrid("4-5"), textGrid("4-6"), textGrid("4-2")) == true) {
                    if (eval(textGrid("5-3"), textGrid("5-4"), textGrid("5-5"), textGrid("5-1")) == true) {
                        if (eval(textGrid("2-2"), textGrid("3-2"), textGrid("4-2"), textGrid("6-2")) == true) {
                            if (eval(textGrid("1-3"), textGrid("2-3"), textGrid("3-3"), textGrid("5-3")) == true) {
                                if (eval(textGrid("4-4"), textGrid("5-4"), textGrid("6-4"), textGrid("2-4")) == true) {
                                    if (eval(textGrid("3-5"), textGrid("4-5"), textGrid("5-5"), textGrid("1-5")) == true) {
                                        clearInterval(clock);
                                        youWon();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}

function textGrid(num) {
    return $("." + num).text();
}

function eval(first, operator, second, result) {
    var firstInt = parseInt(first);
    var secondInt = parseInt(second);
    var resultInt = parseInt(result);
    if (operator === "+") {
        return firstInt + secondInt == resultInt
    } else if (operator === "-") {
        return firstInt - secondInt == resultInt
    } else if (operator === "×"){
        return firstInt * secondInt == resultInt
    } else if (operator === "÷") {
        return firstInt / secondInt == resultInt
    }
}

function youWon() {
    document.getElementById("winAudio").play();
    $(".tableContainer2").css("visibility", "hidden");
    $(".youWin").css("visibility", "visible");
    $(".youWin").text("you win!");
    $("*").unbind();
    $(".youWin").append("<div class='reset'>play again</div>");
    $(".youWin").append("<div class='bestScoreDiv'>best score: <span id='bestScore'></span></div>");
    bestScore();
    $(".reset").click(function() {
        reset();
    });
}

function bestScore() {
    var sharedPreferences = window.plugins.SharedPreferences.getInstance();

    var key = "bestScoreCrossEQ";

    var successCallback = function(value) {
        if (value > parseInt($(".score").text())) {
            newBestScore(parseInt($(".score").text()));
            $("#bestScore").text(parseInt($(".score").text()));
        } else {
            $("#bestScore").text(value);
        }
    }

    var errorCallback = function(error) {
        newBestScore(parseInt($(".score").text()));
        $("#bestScore").text(parseInt($(".score").text()));
    }

    function newBestScore(score) {
        var key = "bestScoreCrossEQ";
        var value = score;
        var successCallback = function(value) {
        }
        var errorCallback = function(error) {
        }
        sharedPreferences.put(key, value, successCallback, errorCallback);
    }

    sharedPreferences.get(key, successCallback, errorCallback);
}