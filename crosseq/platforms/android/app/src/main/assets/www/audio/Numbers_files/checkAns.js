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
    $(".reset").click(function() {
        reset();
    });
}