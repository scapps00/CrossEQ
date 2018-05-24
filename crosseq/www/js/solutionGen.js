function randomNum(min, max) {
    return (min + Math.floor(Math.random() * ((max + 1) - min)));
}

var ops = ["+", "-", "×", "÷"];
//var ops = ["×", "÷"];

function randomOp() {
    return ops[randomNum(0, 3)];
}

function findMultTotal(divisor) {
    var total = randomNum((divisor * 2), 80);
    if (total % divisor === 0) {
        return total;
    } else {
        return findMultTotal(divisor);
    }
}

function findDivisor(total) {
    if (total % 2 != 0 && total % 3 != 0 && total % 5 != 0 && total % 7 != 0) {
        var divisor = randomNum(1, total);
        if (total % divisor === 0) {
            return divisor;
        } else {
            return findDivisor(total);
        }
    } else {
        var divisor = randomNum(2, (total / 2));
        if (total % divisor === 0) {
            return divisor;
        } else {
            return findDivisor(total);
        }
    }
}

var solution = [];

solution[23] = randomOp();
solution[32] = randomOp();
solution[45] = randomOp();
solution[54] = randomOp();

function solution2() {
    if (solution[23] === "-") {
        solution[22] = randomNum(2, 40);
        solution[24] = randomNum(1, (solution[22] - 1));
        solution[26] = solution[22] - solution[24];
    } else if (solution[23] === "+") {
        solution[22] = randomNum(1, 20);
        if (solution[22] === 20) {
            solution[24] = randomNum(1,19);
            solution[26] = solution[22] + solution[24];
        } else {
            solution[24] = randomNum(1,20);
            solution[26] = solution[22] + solution[24];
        }
    } else if (solution[23] === "×") {
        var picker = randomNum(1,2);
        if (picker === 1) {
            solution[22] = randomNum(1, 19);
            solution[26] = findMultTotal(solution[22]);
            solution[24] = solution[26] / solution[22];
        } else {
            solution[24] = randomNum(1, 19);
            solution[26] = findMultTotal(solution[24]);
            solution[22] = solution[26] / solution[24];
        }
    } else if (solution[23] === "÷") {
        solution[22] = randomNum(2, 40);
        solution[24] = findDivisor(solution[22]);
        solution[26] = solution[22] / solution[24];
    }
}

function solution3() {
    if (solution[32] === "-") {
        solution[31] = randomNum(2, 40);
        solution[33] = randomNum(1, (solution[31] - 1));
        solution[35] = solution[31] - solution[33];
    } else if (solution[32] === "+") {
        solution[31] = randomNum(1, 20);
        if (solution[31] === 20) {
            solution[33] = randomNum(1,19);
            solution[35] = solution[31] + solution[33];
        } else {
            solution[33] = randomNum(1,20);
            solution[35] = solution[31] + solution[33];
        }
    } else if (solution[32] === "×") {
        var picker = randomNum(1,2);
        if (picker === 1) {
            solution[31] = randomNum(1, 19);
            solution[35] = findMultTotal(solution[31]);
            solution[33] = solution[35] / solution[31];
        } else {
            solution[33] = randomNum(1, 19);
            solution[35] = findMultTotal(solution[33]);
            solution[31] = solution[35] / solution[33];
        }
    } else if (solution[32] === "÷") {
        solution[31] = randomNum(2, 40);
        solution[33] = findDivisor(solution[31]);
        solution[35] = solution[31] / solution[33];
    }
}

function solution13() {
    if (solution[23] === "-") {
        solution[13] = randomNum((solution[33] + 1), 41);
        solution[53] = solution[13] - solution[33];
    } else if (solution[23] === "+") {
        solution[13] = randomNum(1, 20);
        solution[53] = solution[13] + solution[33];
    } else if (solution[23] === "×") {
        solution[53] = findMultTotal(solution[33]);
        solution[13] = solution[53] / solution[33];
    } else if (solution[23] === "÷") {
        solution[13] = findMultTotal(solution[33]);
        solution[53] = solution[13] / solution[33];
    }
}

function solution42() {
    if (solution[32] === "-") {
        solution[42] = randomNum(1, (solution[22] - 1));
        solution[62] = solution[22] - solution[42];
    } else if (solution[32] === "+") {
        solution[42] = randomNum(1, 20);
        solution[62] = solution[22] + solution[42];
    } else if (solution[32] === "×") {
        solution[62] = findMultTotal(solution[22]);
        solution[42] = solution[62] / solution[22];
    } else if (solution[32] === "÷") {
        solution[42] = findDivisor(solution[22]);
        solution[62] = solution[22] / solution[42];
    }
}

function solution4() {
    if (solution[45] === "-") {
        solution[44] = randomNum((solution[42] + 1), 40);
        solution[46] = solution[44] - solution[42];
    } else if (solution[45] === "+") {
        solution[44] = randomNum(1, (solution[42] - 1));
        solution[46] = solution[42] - solution[44];
    } else if (solution[45] === "×") {
        solution[44] = findDivisor(solution[42]);
        solution[46] = solution[42] / solution[44];
    } else if (solution[45] === "÷") {
        solution[44] = findMultTotal(solution[42]);
        solution[46] = solution[44] / solution[42];
    }
}

function solution15() {
    if (solution[45] === "-") {
        solution[55] = randomNum(1, (solution[35] - 1));
        solution[15] = solution[35] - solution[55];
    } else if (solution[45] === "+") {
        solution[55] = randomNum(1, 20);
        solution[15] = solution[35] + solution[55];
    } else if (solution[45] === "×") {
        solution[15] = findMultTotal(solution[35]);
        solution[55] = solution[15] / solution[35];
    } else if (solution[45] === "÷") {
        solution[55] = findDivisor(solution[35]);
        solution[15] = solution[35] / solution[55];
    }
}

function solution5() {
    if (solution[55] >= solution[53] && solution[44] <= solution[24] && solution[44] >= solution[24] && solution[53] + solution[55] >= 100 && solution[44] > solution[24] && solution[24] % solution[44] != 0 && solution[53] % solution[55] != 0 && solution[53] < solution[55] && solution[44] % solution[24] != 0 && solution [44] < solution[24] && solution[53] * solution[55] >= 100 && solution[64] * solution[44] >= 100) {
        solution[23] = randomOp();
        solution[32] = randomOp();
        solution[45] = randomOp();
        solution[54] = randomOp();
        solution2();
        solution3();
        solution13();
        solution42();
        solution4();
        solution15();
        solution5();
    } else if (solution[54] === "-") {
        if (solution[55] >= solution[53] || solution[44] <= solution[24]) {
            solution[54] = randomOp();
            solution5();
        } else {
            solution[51] = solution[53] - solution[55];
        }
    } else if (solution[54] === "+") {
        if (solution[44] >= solution[24] || solution[53] + solution[55] >= 100) {
            solution[54] = randomOp();
            solution5();     
        } else {
            solution[51] = solution[53] + solution[55];
        }
    } else if (solution[54] === "×") {
        if (solution[44] > solution[24] || solution[24] % solution[44] != 0 || solution[53] * solution[55] >= 100 || solution[64] * solution[44] >= 100) {
            solution[54] = randomOp();
            solution5();         
        } else {
            solution[51] = solution[53] * solution[55];
        }
    } else if (solution[54] === "÷") {
        if (solution[53] % solution[55] != 0 || solution[53] < solution[55] || solution[44] % solution[24] != 0 || solution [44] < solution[24]) {
            solution[54] = randomOp();
            solution5();        
        } else {
            solution[51] = solution[53] / solution[55];
        }
    }
}

function solution64() {
    if (solution[54] === "-") {
        solution[64] = solution[44] - solution[24];
    } else if (solution[54] === "+") {
        solution[64] = solution[24] - solution[44];
    } else if (solution[54] === "×") {
        solution[64] = solution[24] / solution[44];
    } else if (solution[54] === "÷") {
        solution[64] = solution[44] / solution[24];
    }
}

solution2();
solution3();
solution13();
solution42();
solution4();
solution15();
solution5();
solution64();

function placeChoices(item) {
    var choicePick = randomNum(1, 20);
    if ($("[class='" + choicePick + "']").text() == "") {
        $("[class='" + choicePick + "']").text(item);
    } else {
        placeChoices(item);
    }
}

function hints() {
    var trigger = randomNum(1, 4);
    if (trigger === 1) {
        $("[class='5-4']").text(solution[54]);
        $("[class='5-4']").addClass("static");
        solution[54] = "";
        $("[class='3-1']").text(solution[31]);
        $("[class='3-1']").addClass("static");
        solution[31] = "";
        $("[class='2-2']").text(solution[22]);
        $("[class='2-2']").addClass("static");
        solution[22] = "";
    } else if (trigger === 2) {
        $("[class='2-3']").text(solution[23]);
        $("[class='2-3']").addClass("static");
        solution[23] = "";
        $("[class='3-1']").text(solution[31]);
        $("[class='3-1']").addClass("static");
        solution[23] = "";
        $("[class='2-4']").text(solution[24]);
        $("[class='2-4']").addClass("static");
        solution[24] = "";
    } else if (trigger === 3) {
        $("[class='2-3']").text(solution[23]);
        $("[class='2-3']").addClass("static");
        solution[23] = "";
        $("[class='5-3']").text(solution[53]);
        $("[class='5-3']").addClass("static");
        solution[53] = "";
        $("[class='4-4']").text(solution[44]);
        $("[class='4-4']").addClass("static");
        solution[44] = "";
    } else if (trigger === 4) {
        $("[class='2-4']").text(solution[24]);
        $("[class='2-4']").addClass("static");
        solution[24] = "";
        $("[class='5-4']").text(solution[54]);
        $("[class='5-4']").addClass("static");
        solution[54] = "";
        $("[class='4-4']").text(solution[44]);
        $("[class='4-4']").addClass("static");
        solution[44] = "";
    }
}

hints();

solution.forEach(placeChoices);

assignClick();