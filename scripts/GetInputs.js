var Header2Value = "";
var Header3Value = "";
var ImageURLValue = "";

var StartTabValue = false;
var ChallengesTabValue = false;
var MeetingsTabValue = false;
var ContactsTabValue = false;

function Getter() {
    var Header2 = document.getElementById("H2");
    var Header3 = document.getElementById("H3");
    var ImageURL = document.getElementById("IMG");

    var StartTab = document.getElementById("StartTab");
    var ChallengesTab = document.getElementById("ChallengesTab");
    var Meetingstab = document.getElementById("MeetingsTab");
    var ContactsTab = document.getElementById("ContactsTab");

    Header2Value = Header2.value;
    Header3Value = Header3.value;
    ImageURLValue = ImageURL.value;

    StartTabValue = StartTab.checked;
    ChallengesTabValue = ChallengesTab.checked;
    MeetingsTabValue = Meetingstab.checked;
    ContactsTabValue = ContactsTab.checked;
    LogValues();
}

function LogValues() {
    console.log(Header2Value);
    console.log(Header3Value);
    console.log(ImageURLValue);

    console.log(StartTabValue);
    console.log(ChallengesTabValue);
    console.log(MeetingsTabValue);
    console.log(ContactsTabValue);
}