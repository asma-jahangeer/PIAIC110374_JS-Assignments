var inputNumber = parseInt(prompt("Please enter any number!"));
document.write("You entered: "+inputNumber);
document.write("<br>");
if(inputNumber%2 == 0 || inputNumber==0){
    document.write(inputNumber+ " is an Even Number!");
}
else{
    document.write(inputNumber+ " is an Odd Number!");
}