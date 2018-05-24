function randomNum(min, max) {
    return (min + Math.floor(Math.random() * ((max + 1) - min)));
}

var ops = ["+", "-", "×", "÷"];

function randomOp() {
    return ops[randomNum(0, 3)];
}

function findMultTotal(divisor) {
    var total = randomNum((divisor * 2), 40);
    if (total % divisor === 0) {
        return total;
    } else {
        findMultTotal(divisor);
    }
}

function findDivisor(total) {
    var divisor = randomNum(1, (total / 2));
    if (total % divisor === 0) {
        return divisor;
    } else {
        findDivisor(total);
    }
}

var solution = [];
solution[23] = randomOp();

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

solution2();

$("[class='2-2']").text(solution[22]);
$("[class='2-3']").text(solution[23]);
$("[class='2-4']").text(solution[24]);
$("[class='2-6']").text(solution[26]);