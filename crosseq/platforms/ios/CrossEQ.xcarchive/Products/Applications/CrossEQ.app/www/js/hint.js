function placeInArray(item, index) {
    solutionArray.push({
        num: item,
        ind: index
    });
}

solutionArray = [];

solution.forEach(placeInArray);

var stopHint = [];

function placeHint() {
    var hintIndex = randomNum(0, 19);
    if (solutionArray[hintIndex] != "") {
        stopHint.push(hintIndex);
        var classOfHint = indexToClass(solutionArray[hintIndex].ind);
        $("[class=" + classOfHint + "]").text(solutionArray[hintIndex].num);
        $("[class=" + classOfHint + "]").addClass("static");
        $("[class='" + choicesArray[solutionArray[hintIndex].ind] + "']").text("");
        solutionArray[hintIndex] = "";
    } else if (stopHint.length == 20) {
        return
    } else {
        placeHint();
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