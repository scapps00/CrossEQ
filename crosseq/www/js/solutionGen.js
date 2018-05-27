var solution = [];

function solutionGen() {
    function randomNum(min, max) {
        return (min + Math.floor(Math.random() * ((max + 1) - min)));
    }

    var ops = ["+", "-", "×", "÷"];
    //var ops = ["×", "÷"];

    function randomOp() {
        return ops[randomNum(0, 3)];
    }

    function findMultTotal(divisor) {
        var multTally = [];
        if (divisor > 40) {
            multTally.push(divisor);
            for (var i = divisor * 2; i < 99; i++) {
                multTally.push(i);
            }
            return findMultTotalInner(divisor, multTally);
        } else {
            for (var i = divisor * 2; i < 81; i++) {
                multTally.push(i);
            }
            return findMultTotalInner(divisor, multTally);
        }
    }

    function findMultTotalInner(divisor, tally) {
        var totalIndex = randomNum(0, tally.length - 1);
        var total = tally[totalIndex];
        tally.splice(totalIndex, 1);
        if (total % divisor === 0) {
            return total;
        } else {
            return findMultTotalInner(divisor, tally);
        }
    }

    function findDivisor(total) {
        var divTally = [];
        if (total % 2 != 0 && total % 3 != 0 && total % 5 != 0 && total % 7 != 0) {
            for (var i = 1; i < total + 1; i++) {
                divTally.push(i);
            }
            return findDivisorInner(total, divTally);
        } else {
            for (var i = 2; i < total + 1; i++) {
                divTally.push(i);
            }
            return findDivisorInner(total, divTally);
        }
    }


    function findDivisorInner(total, tally) {
        var divisorIndex = randomNum(0, tally.length - 1);
        var divisor = tally[divisorIndex];
        tally.splice(divisorIndex, 1);
        if (total % divisor === 0) {
            return divisor;
        } else {
            return findDivisorInner(total, tally);
        }
    }

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

    var opTally = ops;

    opTally.push(0);

    function randomOpTally() {
        var pick = randomNum(0, opTally.length - 2);
        return opTally[pick];
    }

    function solution5() {
        if (opTally.length == 1 || solution[55] >= solution[53] && solution[44] <= solution[24] && solution[44] >= solution[24] && solution[53] + solution[55] >= 100 && solution[44] > solution[24] && solution[24] % solution[44] != 0 && solution[53] * solution[55] >= 100 && solution[64] * solution[44] >= 100 && solution[53] % solution[55] != 0 && solution[53] < solution[55] && solution[44] % solution[24] != 0 && solution [44] < solution[24] && solution[53] * solution[55] >= 100 && solution[64] * solution[44] >= 100) {
            solutionGen();
        } else if (solution[54] === "-") {
            if (solution[55] >= solution[53] || solution[44] <= solution[24]) {
                opTally.splice(opTally.indexOf("-"), 1);
                solution[54] = randomOpTally();
                solution5();
            } else {
                solution[51] = solution[53] - solution[55];
            }
        } else if (solution[54] === "+") {
            if (solution[44] >= solution[24] || solution[53] + solution[55] >= 100) {
                opTally.splice(opTally.indexOf("+"), 1);
                solution[54] = randomOpTally();
                solution5();     
            } else {
                solution[51] = solution[53] + solution[55];
            }
        } else if (solution[54] === "×") {
            if (solution[44] > solution[24] || solution[24] % solution[44] != 0 || solution[53] * solution[55] >= 100 || solution[64] * solution[44] >= 100) {
                opTally.splice(opTally.indexOf("×"), 1);
                solution[54] = randomOpTally();
                solution5();         
            } else {
                solution[51] = solution[53] * solution[55];
            }
        } else if (solution[54] === "÷") {
            if (solution[53] % solution[55] != 0 || solution[53] < solution[55] || solution[44] % solution[24] != 0 || solution [44] < solution[24]) {
                opTally.splice(opTally.indexOf("÷"), 1);
                solution[54] = randomOpTally();
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

    var choicesArray = [];

    var placeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    function placeChoices(item, index) {
        var choicePickIndex = randomNum(0, placeArray.length - 1);
        var choicePick = placeArray[choicePickIndex];
        $("[class='" + choicePick + "']").text(item);
        placeArray.splice(choicePickIndex, 1);
        choicesArray[index] = choicePick;
    }

    solution.forEach(placeChoices);

    assignClick();
}

solutionGen();