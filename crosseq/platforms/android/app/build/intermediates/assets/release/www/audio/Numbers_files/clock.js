function clockInc() {
    if (parseInt($("#sec").text()) === 59) {
        $("#sec").text("00");
        $("#min").text(parseInt($("#min").text()) + 1);
        clockScore();
    } else {
        if ($("#sec").text().charAt(0) === "0" && $("#sec").text().charAt(1) != 9) {
            $("#sec").text("0" + (parseInt($("#sec").text()) + 1).toString());
        } else {
            $("#sec").text((parseInt($("#sec").text()) + 1).toString());
        }
    }
}

var clock = setInterval(clockInc, 1000);