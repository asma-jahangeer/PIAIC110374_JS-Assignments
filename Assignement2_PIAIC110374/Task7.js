var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter sencond number"));
var operation = prompt("Which operation you want to perform?");
if(operation== '+' ){
    var result = firstNumber + secondNumber;
    document.write("Addition of "+firstNumber + " and"+ secondNumber+ " is ="+result);
}
else if (operation== '-'){
    var result = firstNumber - secondNumber;
    document.write("Subtraction of "+firstNumber + " and"+ secondNumber+ " is ="+result);
}
else if (operation== '*'){
    var result = firstNumber * secondNumber;
    document.write("Multiplication of "+firstNumber + " and"+ secondNumber+ " is ="+result);
}
else if (operation== '/'){
    var result = firstNumber / secondNumber;
   document.write("Devision of "+firstNumber + " and"+ secondNumber+ " is ="+result);
}
else if (operation== '%'){
    var result = firstNumber % secondNumber;
    document.write("Modolus of "+firstNumber + " and"+ secondNumber+ " is ="+result);
}