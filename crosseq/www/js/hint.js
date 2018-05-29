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
        var transfer = $("[class=" + classOfHint + "]").text();
        if (transfer == solutionMinusExArray[hintIndex].num) {
            exceptionArray.push(solutionMinusExArray[hintIndex]);
            placeHint(exceptionArray);
        } else {
            $("[class=" + classOfHint + "]").text(solutionMinusExArray[hintIndex].num);
            $("[class=" + classOfHint + "]").addClass("static");
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

$(".hint").click(function() {
    placeHint();
    checkAns();
    assignClick();
});