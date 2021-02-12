var correctPassword = "Pakistan123";
var userPassword = prompt("Please enter password");
if (userPassword == ""){
    document.write("Please enter your password");

}
else if (userPassword == correctPassword){
    document.write("Correct! The password you entered matches the original password.");

}
else{
    document.write("Incorrect Password!");
}