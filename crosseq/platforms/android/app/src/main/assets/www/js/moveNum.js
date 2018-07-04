function assignClick() {
    $("td:not(:empty):not(.equal):not(.static):not(.hint):not(.countdown):not(.score):not(.answer):not(.selected)").click(function(event1) {
        event1.preventDefault();
        $(".selected").css("background-color", "#ebebeb");
        $("td:empty:not(.blank)").unbind();
        $(".selected").removeClass("selected");
        $(event1.target).addClass("selected");
        $(".selected").css("background-color", "#ecbc76");
        $("td:empty:not(.blank)").click(function(event2) {
            event2.preventDefault();
            document.getElementById("clickAudio").play();
            moveScore();
            $(event2.target).text($(".selected").text());
            var selectedClass = $(".selected").attr("class").split(" ");
            choicesArray[choicesArray.indexOf(parseInt(selectedClass[0]))] = $(event2.target).attr("class");
            $(".selected").text("");
            $(".selected").css("background-color", "#ebebeb");
            $(".selected").removeClass("selected");
            $("td:not(.hint):not(.countdown):not(.score):not(.answer)").unbind();
            checkAns();
            assignClick();
        });
    });
}

function convertForCA(index) {
    return index.charAt(0).toString() + index.charAt(2).toString() + "0";
}

