// function clear(selected) {
//     selected.unbind();
//     selected.removeClass("selected");
//     selected.click(function(event1) {
//         event1.preventDefault();
//         $("td:not(.blank)").css("background-color", "#ecbc76");
//         $(event1.target).css("background-color", "#ecbc76");
//         $("td:empty:not(.blank)").click(function(event2) {
//             event2.preventDefault();
//             $(event2.target).text($(event1.target).text());
//             $(event1.target).text("");
//             $(event1.target).css("background", "#ebebeb");
//             $("td").unbind();
//             assignClick();
//         });
//     });
// }

function assignClick() {
    $("td:not(:empty)").click(function(event1) {
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
            assignClick();
        });
    });
}

assignClick();

