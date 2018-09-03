document.addEventListener("deviceready", deviceReady, false);

function checkAns() {
        if (eval(textGrid("2-2"), textGrid("2-3"), textGrid("2-4"), textGrid("2-6"))) {
            if (eval(textGrid("3-1"), textGrid("3-2"), textGrid("3-3"), textGrid("3-5"))) {
                if (eval(textGrid("4-4"), textGrid("4-5"), textGrid("4-6"), textGrid("4-2")) == true) {
                    if (eval(textGrid("5-3"), textGrid("5-4"), textGrid("5-5"), textGrid("5-1")) == true) {
                        if (eval(textGrid("2-2"), textGrid("3-2"), textGrid("4-2"), textGrid("6-2")) == true) {
                            if (eval(textGrid("1-3"), textGrid("2-3"), textGrid("3-3"), textGrid("5-3")) == true) {
                                if (eval(textGrid("4-4"), textGrid("5-4"), textGrid("6-4"), textGrid("2-4")) == true) {
                                    if (eval(textGrid("3-5"), textGrid("4-5"), textGrid("5-5"), textGrid("1-5")) == true) {
                                        clearInterval(clock);
                                        youWon();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}

function textGrid(num) {
    return $("." + num).text();
}

function eval(first, operator, second, result) {
    var firstInt = parseInt(first);
    var secondInt = parseInt(second);
    var resultInt = parseInt(result);
    if (operator === "+") {
        return firstInt + secondInt == resultInt
    } else if (operator === "-") {
        return firstInt - secondInt == resultInt
    } else if (operator === "×"){
        return firstInt * secondInt == resultInt
    } else if (operator === "÷") {
        return firstInt / secondInt == resultInt
    }
}

function youWon() {
    document.getElementById("winAudio").play();
    $(".tableContainer2").css("visibility", "hidden");
    $(".youWin").css("visibility", "visible");
    $(".youWin").append("<br>you win!");
    $("*").unbind();
    $(".youWin").append("<div class='reset'>play again</div>");
    $(".youWin").append("<div class='bestScoreDiv'>best score: <span id='bestScore'></span></div>");
    bestScore();
    reset();
}

function bestScore() {
    if ($(".score").text() != "000") {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
            fs.root.getFile("bestScoreHard.txt", { create: true, exclusive: false }, function(fileEntry) {
                fileEntry.file(function(file) {
                    var reader = new FileReader();

                    reader.onloadend = function() {
                        if (parseInt(this.result) <= parseInt($(".score").text())) {
                            $("#bestScore").text(parseInt(this.result));
                        } else {
                            $("#bestScore").text(parseInt($(".score").text()));
                            
                            fileEntry.createWriter(function(fileWriter) {

                                fileWriter.onerror = function(e) {
                                    $("#bestScore").text(e);
                                }
                                
                                fileWriter.write($(".score").text());

                            });
                        }
                    }

                    reader.readAsText(file);

                }, onErrorReadFile);
            });
        });
    }
}

function deviceReady() {
}

function onErrorReadFile() {
    $("#bestScore").text("error");
}