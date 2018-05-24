function clockInc() {
    if (parseInt($("#sec").text()) === 59) {
        $("#sec").text("00");
        $("#min").text(parseInt($("#min").text()) + 1);
    } else {
        $("#sec").text("0" + (parseInt($("#sec").text()) + 1).toString());
    }
}

var clock = setInterval(clockInc, 1000);