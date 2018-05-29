function placeInArray(item, index) {
    solutionArray.push({
        num: item,
        ind: index
    });
}

var solutionArray = [];

solution.forEach(placeInArray);

function placeHint(exceptionArray) {
    document.getElementById("hintAudio").pause();
    document.getElementById("hintAudio").load()
    document.getElementById("hintAudio").play();
    if (!exceptionArray) {
        var exceptionArray = [];
    }
    var solutionMinusExArray = solutionArray;
    exceptionArray.forEach(function(item) {
        solutionMinusExArray.splice(solutionMinusExArray.indexOf(item), 1);
    });
    if (solutionMinusExArray.length > 0) {
        //hintScore();
        var hintIndex = randomNum(0, solutionMinusExArray.length - 1);
        if ($("[class='" + choicesArray[solutionMinusExArray[hintIndex].ind] + " selected']").attr("class") != undefined) {
            $(".selected").css("background-color", "#ebebeb");
            $(".selected").removeClass("selected");
        }
        var classOfHint = indexToClass(solutionMinusExArray[hintIndex].ind);
        var transfer = "";
        var classNameSelected = $(".selected").attr("class").split(" ")[0];
        if (classNameSelected == classOfHint) {
            transfer = $(".selected").text();
        } else {
            transfer = $("[class=" + classOfHint + "]").text();
        }
        var movedFrom = choicesArray[solutionMinusExArray[hintIndex].ind];
        if (movedFrom.length == 3) {
            var movedFromVal = $("[class=" + choicesArray[solutionMinusExArray[hintIndex].ind] + "]").text();
            console.log(movedFrom);
            console.log(movedFromVal);
        } else {
            var movedFromVal = "00000000";
        }
        if (transfer == solutionMinusExArray[hintIndex].num) {
            exceptionArray.push(solutionMinusExArray[hintIndex]);
            placeHint(exceptionArray);
        } else {
            var classNameSelected = $(".selected").attr("class").split(" ")[0];
            if (classNameSelected == classOfHint) {
                $(".selected").text(solutionMinusExArray[hintIndex].num);
                $(".selected").addClass("static");
                console.log("hereo");
                //$("td:empty:not(.blank)").unbind();
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
            choicesArray[solutionMinusExArray[hintIndex].ind] = classOfHint;
            if (transfer != "") {
                for (var i = 1; i < 21; i++) {
                    if ($("[class='" + i + "']").text() == "") {
                        $("[class='" + i + "']").text(transfer);
                        choicesArray[choicesArray.indexOf(classOfHint)] = i;
                        break;
                    }
                }
            }
            if (movedFrom.length == 3) {
                console.log(solution[classToIndex(movedFrom)]);
                if (solution[classToIndex(movedFrom)] == movedFromVal) {
                    var found = classToIndex(movedFrom);
                    console.log(found);
                    // if (found != classToIndex(movedFrom)) {
                    //     var altSolution = solution;
                    //     altSolution[found] = "nein";
                    //     found = altSolution.indexOf(movedFromVal);
                    //     console.log(found);
                    // }
                    $("[class=" + movedFrom + "]").text(movedFromVal);
                    var whereFound = choicesArray[found];
                    var altSolution = solution;
                    altSolution[solutionMinusExArray[hintIndex].ind] = "nein";
                    choicesArray[found] = movedFrom;

                    function checkAgain() {
                        console.log(found + " 1");
                        console.log(whereFound + " 2");
                        console.log(movedFromVal + " 3");
                        console.log(solution[found]);
                        if (whereFound.toString().length <= 2) {
                            console.log($("[class='" + whereFound + "']").text())
                            var compare = $("[class='" + whereFound + "']").text();
                        } else {
                            console.log($("[class=" + whereFound + "]").text())
                            var compare = $("[class=" + whereFound + "]").text();
                        }
                        if (solution[found] == compare) {
                            console.log(5);
                            altSolution[found] = "nein";
                            console.log(altSolution);
                            if (movedFromVal != "+" && movedFromVal != "-" && movedFromVal != "×" && movedFromVal != "÷") {
                                found = altSolution.indexOf(parseInt(movedFromVal));
                                console.log("no");
                            } else {
                                console.log("hey");
                                found = altSolution.indexOf(movedFromVal);
                                console.log(found);
                            }
                            var oldWhereFound = whereFound;
                            console.log(choicesArray);
                            whereFound = choicesArray[found];
                            choicesArray[found] = oldWhereFound;
                            console.log(3);
                            console.log(whereFound);
                            if (whereFound.toString().length <= 2) {
                                console.log(1);
                                $("[class='" + whereFound + "']").text("");
                            } else {
                                console.log(2);
                                $("[class=" + whereFound + "]").text("");
                            }
                            console.log(found);
                            console.log(whereFound);
                            checkAgain(); 
                        }
                    }

                    checkAgain();
                }
            }
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