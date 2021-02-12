var secretNumber = 7;
var guessNumber = parseInt(prompt("Enter number between 1 to 10"));
if(guessNumber == secretNumber){
    document.write(' "Bingo! Corect answer" ');

}
else if (guessNumber+1 == secretNumber){
    document.write(' "Close enough to the correct answer." ');
}
else{
    document.write("You could not guess the number");
}