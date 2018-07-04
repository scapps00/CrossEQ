document.addEventListener("deviceready", orientation, false);

function orientation() {
    screen.orientation.lock("portrait-primary");
}