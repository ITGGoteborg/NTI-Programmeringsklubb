function openNav() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        //PORTRAIT
        document.getElementById("mySidenav").style.width = "61vw";
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
        // you're in LANDSCAPE mode
        document.getElementById("mySidenav").style.width = "29vw";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0vw";
}