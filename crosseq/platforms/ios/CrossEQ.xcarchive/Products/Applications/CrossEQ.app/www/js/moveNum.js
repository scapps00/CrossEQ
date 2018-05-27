function assignClick() {
    $("td:not(:empty):not(.equal):not(.static):not(.hint):not(.countdown):not(.score):not(.answer)").click(function(event1) {
        event1.preventDefault();
        $(".selected").css("background-color", "#ebebeb");
        $("td:empty:not(.blank)").unbind();
        $(".selected").removeClass("selected");
        $(event1.target).addClass("selected");
        $(".selected").css("background-color", "#ecbc76");
        $("td:empty:not(.blank)").click(function(event2) {
            event2.preventDefault();
            $(event2.target).text($(".selected").text());
            $(".selected").text("");
            $(".selected").css("background-color", "#ebebeb");
            $(".selected").removeClass(".selected");
            $("td").unbind();
            checkAns();
            assignClick();
        });
    });
}

