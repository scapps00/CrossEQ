function randomNum(min, max) {
    return (min + Math.floor(Math.random() * ((max + 1) - min)));
}

var ops = ["+", "-", "×", "÷"];

function randomOp() {
    return ops[randomNum(0, 3)];
}

function findMultTotal(divisor) {
    var total = randomNum(divisor, 60);
    if (total % divisor === 0) {
        return total;
    } else {
        return findMultTotal(divisor);
    }
}

function findDivisor(total) {
    var divisor = randomNum(1, total);
    if (total % divisor === 0) {
        return divisor;
    } else {
        return findDivisor(total);
    }
}

var solution = [];
solution[23] = randomOp();
solution[32] = randomOp();

function solution2() {
    if (solution[23] === "-") {
        solution[22] = randomNum(2, 40);
        solution[24] = randomNum(1, solution[22]);
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
        solution[33] = randomNum(1, solution[31]);
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
        solution[13] = randomNum(solution[33], 41);
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

}

solution2();
solution3();
solution13();

$("[class='2-2']").text(solution[22]);
$("[class='2-3']").text(solution[23]);
$("[class='2-4']").text(solution[24]);
$("[class='2-6']").text(solution[26]);

$("[class='3-1']").text(solution[31]);
$("[class='3-2']").text(solution[32]);
$("[class='3-3']").text(solution[33]);
$("[class='3-5']").text(solution[35]);

$("[class='1-3']").text(solution[13]);
$("[class='5-3']").text(solution[53]);