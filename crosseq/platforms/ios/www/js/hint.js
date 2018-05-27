function placeInArray(item, index) {
    solutionArray.push({
        num: item,
        ind: index
    });
}

solutionArray = [];

solution.forEach(placeInArray);

function placeHint() {
    if (solutionArray.length > 0) {
        var hintIndex = randomNum(0, solutionArray.length - 1);
        var classOfHint = indexToClass(solutionArray[hintIndex].ind);
        $("[class=" + classOfHint + "]").text(solutionArray[hintIndex].num);
        $("[class=" + classOfHint + "]").addClass("static");
        $("[class='" + choicesArray[solutionArray[hintIndex].ind] + "']").text("");
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