function placeInArray(item, index) {
    solutionArray.push({
        num: item,
        ind: index
    });
}

var solutionArray = [];

solution.forEach(placeInArray);

var selectedTrigger = false;

function placeHint(exceptionArray) {
    document.getElementById("hintAudio").pause();
    document.getElementById("hintAudio").load();
    document.getElementById("hintAudio").play();
    if (!exceptionArray) {
        var exceptionArray = [];
    }
    var solutionMinusExArray = solutionArray;
    exceptionArray.forEach(function(item) {
        solutionMinusExArray.splice(solutionMinusExArray.indexOf(item), 1);
    });
    if (solutionMinusExArray.length > 0) {
        hintScore();
        var hintIndex = randomNum(0, solutionMinusExArray.length - 1);
        if ($("[class='" + choicesArray[solutionMinusExArray[hintIndex].ind] + " selected']").attr("class") != undefined) {
            $(".selected").css("background-color", "#ebebeb");
            $(".selected").removeClass("selected");
            selectedTrigger = true;
            console.log(true);
        }
        var classOfHint = indexToClass(solutionMinusExArray[hintIndex].ind);
        var transfer = "";
        if ($(".selected").attr("class") != undefined) {
            var classNameSelected = $(".selected").attr("class").split(" ")[0];
        } else {
            var classNameSelected = "";
        }
        if (classNameSelected == classOfHint) {
            transfer = $(".selected").text();
        } else {
            transfer = $("[class=" + classOfHint + "]").text();
        }
        var movedFrom = choicesArray[solutionMinusExArray[hintIndex].ind];
        if (movedFrom.length == 3) {
            var movedFromVal = $("[class=" + choicesArray[solutionMinusExArray[hintIndex].ind] + "]").text();
        } else {
            var movedFromVal = "00000000";
        }
        if (transfer == solutionMinusExArray[hintIndex].num) {
            exceptionArray.push(solutionMinusExArray[hintIndex]);
            placeHint(exceptionArray);
        } else {
            if (classNameSelected == classOfHint) {
                $("td:empty:not(.blank)").unbind();
                $(".selected").text(solutionMinusExArray[hintIndex].num);
                $(".selected").addClass("static");
                $(".selected").css("background-color", "#ebebeb");
                $(".selected").removeClass("selected");
                console.log($(".selected").text());
            } else {
                $("[class=" + classOfHint + "]").text(solutionMinusExArray[hintIndex].num);
                $("[class=" + classOfHint + "]").addClass("static");
            }
            if (choicesArray[solutionMinusExArray[hintIndex].ind].toString().length <= 2) {
                $("[class='" + choicesArray[solutionMinusExArray[hintIndex].ind] + "']").text("");
            } else {
                $("[class=" + choicesArray[solutionMinusExArray[hintIndex].ind] + "]").text("");
            }
            if (transfer != "") {
                for (var i = 1; i < 21; i++) {
                    if ($("[class='" + i + "']").text() == "") {
                        $("[class='" + i + "']").text(transfer);
                        choicesArray[choicesArray.indexOf(classOfHint)] = i;
                        break;
                    }
                }
            }
            choicesArray[solutionMinusExArray[hintIndex].ind] = classOfHint;
            if (movedFrom.length == 3) {
                if (solution[classToIndex(movedFrom)] == movedFromVal) {
                    var found = classToIndex(movedFrom);
                    $("[class=" + movedFrom + "]").text(movedFromVal);
                    if (selectedTrigger == true) {
                        $("[class=" + movedFrom + "]").css("background-color", "#ecbc76");
                        $("[class=" + movedFrom + "]").addClass("selected");
                        selectedTrigger = false;
                    }
                    var whereFound = choicesArray[found];
                    var altSolution = solution;
                    altSolution[solutionMinusExArray[hintIndex].ind] = "nein";
                    choicesArray[found] = movedFrom;

                    function checkAgain() {
                        if (selectedTrigger == true) {
                            $("[class=" + whereFrom + "]").css("background-color", "#ecbc76");
                            $("[class=" + whereFrom + "]").addClass("selected");
                            selectedTrigger = false;
                        }
                        if (whereFound.toString().length <= 2) {
                            var compare = $("[class='" + whereFound + "']").text();
                        } else {
                            var compare = $("[class=" + whereFound + "]").text();
                        }
                        if (solution[found] == compare) {
                            altSolution[found] = "nein";
                            if (movedFromVal != "+" && movedFromVal != "-" && movedFromVal != "×" && movedFromVal != "÷") {
                                found = altSolution.indexOf(parseInt(movedFromVal));
                            } else {
                                found = altSolution.indexOf(movedFromVal);
                            }
                            var oldWhereFound = whereFound;
                            whereFound = choicesArray[found];
                            choicesArray[found] = oldWhereFound;
                            if (whereFound.toString().length <= 2) {
                                $("[class='" + whereFound + "']").text("");
                            } else if ($(".selected").attr("class")) {
                                if ($(".selected").attr("class").split(" ")[0] == whereFound) {
                                    $(".selected").text("");
                                    $(".selected").removeClass("selected");
                                    selectedTrigger = true;
                                } else {
                                    $("[class=" + whereFound + "]").text("");
                                }
                            } else {
                                $("[class=" + whereFound + "]").text("");
                            }
                            checkAgain(); 
                        }
                    }

                    checkAgain();
                }
            }
            selectedTrigger = false;
            solutionArray.splice(solutionArray.indexOf(solutionMinusExArray[hintIndex]), 1); 
        }
    }
}

function placeHintAns() {
    if (solutionArray.length > 0) {
        var hintIndex = randomNum(0, solutionArray.length - 1);
        if ($("[class=" + choicesArray[solutionArray[hintIndex].ind] + "]").hasClass("selected") == true) {
            $(".selected").css("background-color", "#ebebeb");
            $(".selected").removeClass("selected");
        }
        var classOfHint = indexToClass(solutionArray[hintIndex].ind);
        var transfer = $("[class=" + classOfHint + "]").text();
        $("[class=" + classOfHint + "]").text(solutionArray[hintIndex].num);
        $("[class=" + classOfHint + "]").addClass("static");
        $("[class='" + choicesArray[solutionArray[hintIndex].ind] + "']").text("");
        choicesArray[solutionArray[hintIndex].ind] = classOfHint;
        if (transfer != "") {
            for (var i = 1; i < 21; i++) {
                if ($("[class='" + i + "']").text() == "") {
                    $("[class='" + i + "']").text(transfer);
                    choicesArray[choicesArray.indexOf(classOfHint)] = i;
                    break;
                }
            }
        }
        solutionArray.splice(hintIndex, 1);
    }
}

function indexToClass(index) {
    var string = index.toString();
    return string.charAt(0) + "-" + string.charAt(1);
}

function classToIndex(clas) {
    return clas.charAt(0).toString() + clas.charAt(2).toString();
}

$(".hint").click(function() {
    placeHint();
    checkAns();
    assignClick();
});