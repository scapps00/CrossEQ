function checkAns() {
    if (eval(textGrid("2-2"), textGrid("2-3"), textGrid("2-4"), textGrid("2-6"))) {
        if (eval(textGrid("3-1"), textGrid("3-2"), textGrid("3-3"), textGrid("3-5"))) {
            if (eval(textGrid("4-4"), textGrid("4-5"), textGrid("4-6"), textGrid("4-2"))) {
                if (eval(textGrid("5-3"), textGrid("5-4"), textGrid("5-5"), textGrid("5-2"))) {
                    if (eval(textGrid("2-2"), textGrid("3-2"), textGrid("4-2"), textGrid("6-2"))) {
                        if (eval(textGrid("1-3"), textGrid("2-3"), textGrid("3-3"), textGrid("5-3"))) {
                            if (eval(textGrid("4-4"), textGrid("5-4"), textGrid("6-4"), textGrid("1-4"))) {
                                if (eval(textGrid("3-5"), textGrid("4-5"), textGrid("5-5"), textGrid("1-5"))) {
                                    window.clearInterval(clock);
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

function textGrid(index) {
    return $("[class='"+ index + "']").text();
}

function eval(first, operator, second, result) {
    if (operator === "+") {
        return (first + second === result);
    } else if (operator === "-") {
        return (first - second === result);
    } else if (operator === "×"){
        return (first * second === result);
    } else if (operator === "÷") {
        return (first / second === result);
    }
}

function youWon() {
    $(".choices").css("visibility", "hidden");
    $(".tablecontainer2").css("font-size", "65px");
    $(".tablecontainer2").text("YOU WON!");
}