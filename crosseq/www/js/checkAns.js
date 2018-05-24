$("td:empty:not(.equal").click(function(event) {
    event.preventDefault;
    if (eval(solution[22], solution[23], solution[24], solution[26])) {
        if (eval(solution[31], solution[32], solution[33], solution[35])) {
            if (eval(solution[44], solution[45], solution[46], solution[42])) {
                if (eval(solution[53], solution[54], solution[55], solution[52])) {
                    if (eval(solution[22], solution[32], solution[42], solution[62])) {
                        if (eval(solution[13], solution[23], solution[33], solution[53])) {
                            if (eval(solution[44], solution[54], solution[64], solution[14])) {
                                if (eval(solution[35], solution[45], solution[55], solution[15])) {
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
});

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