function placeInArray(item, index) {
    solutionArray.push({
        num: item,
        ind: index
    });
}

solutionArray = [];

solution.forEach(placeInArray);

function placeHint() {
    var hintIndex = randomNum(0, 19);
    if (solutionArray[hintIndex] != "") {
        var classOfHint = indexToClass(solutionArray[hintIndex].ind);
        $("[class=" + classOfHint + "]").text(solutionArray[hintIndex].num);
        $("[class=" + classOfHint + "]").addClass("static");
        var r = solutionArray[hintIndex].ind.toString() + "r";
        $("[class='" + r + "']").text("");
        solutionArray[hintIndex] = "";
        assignClick();
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
});