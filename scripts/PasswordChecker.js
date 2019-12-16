//Function to check password the already set password is admin
function checkPswd() {
    var ObjVigenere = new Vigenere();
    var CipherKey = "Currysos";
    var InputPassword = document.getElementById("pswd").value;

    var Password = ObjVigenere.encrypt(InputPassword, CipherKey);
    console.log("Encrypted password: " + Password);
    ConfirmPassword = "PNZGPGUYMFLSZ";

    if (Password === ConfirmPassword) {
        window.location = "../Tabs/AdminIndex.html";
    }
    else {
        alert("Passwords do not match.");
    }
}