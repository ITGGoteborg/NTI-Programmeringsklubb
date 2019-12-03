function openNav() {
    document.getElementById("mySidenav").style.width = "61vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0vw";
}

function TimeToNextMeeting() {
    var today = new Date();
    var NextMeeting = new Date();
    NextMeeting.setDate(NextMeeting.getDate() + (1 + 7 - NextMeeting.getDay()) % 7);
}