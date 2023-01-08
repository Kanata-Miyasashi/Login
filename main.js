
function Login(){
var inputEmail = document.getElementById("email_input").value;
var inputPassword = document.getElementById("password_input").value;
var email = localStorage.getItem("Email: ").value;
var password = localStorage.getItem("Password: ").value;

if(inputEmail == email && inputPassword == password){
goToWebsite();
}

if(inputEmail !== email){
window.alert("There is no account under this email.");
}

if (inputEmail == email && inputPassword !== password){
window.alert("That is not the correct password.");
}
  
}

function goToWebsite(){
    window.open("", "self")
}