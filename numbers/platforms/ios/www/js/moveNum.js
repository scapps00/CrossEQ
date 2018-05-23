$(".choices tr td").click(function(event1) {
    event1.preventDefault();
    $(".choices tr td:not(.blank)").css("background-color", "#ebebeb");
    $(event1.target).css("background", "#ecbc76");
    $(".grid tr td").click(function(event2) {
        event2.preventDefault();
        $(event2.target).text($(event1.target).text());
        $(event1.target).text("");
        $(event1.target).css("background", "#ebebeb");
    })
});