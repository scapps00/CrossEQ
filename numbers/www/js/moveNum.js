function assignClick() {
    $("td:not(:empty)").click(function(event1) {
        event1.preventDefault();
        $("td[background-color=#ebebeb]").unbind();
        $("td:not(.blank)").css("background-color", "#ebebeb");
        $(event1.target).css("background", "#ecbc76");
        $("td:empty:not(.blank)").click(function(event2) {
            event2.preventDefault();
            $(event2.target).text($(event1.target).text());
            $(event1.target).text("");
            $(event1.target).css("background", "#ebebeb");
            $("td").unbind();
            assignClick();
        });
    });
}

assignClick();

