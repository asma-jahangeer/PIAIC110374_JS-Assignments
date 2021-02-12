var colorNames = ["Pink", "White","Black"];
document.write(colorNames);
//Part A
var a = prompt("What color you want to add in the begging of array?");
colorNames.unshift(a);
document.write("<br>");
document.write(colorNames);
// Part B
var b = prompt("What color you want to add in the end of array?");
colorNames.push(b);
document.write("<br>");
document.write(colorNames);
document.write("<br>");
//Part C
colorNames.unshift("Yellow","Orange");
document.write(colorNames);
document.write("<br>");
//Part D
colorNames.shift();
document.write(colorNames);
document.write("<br>");
//Part E
colorNames.pop();
document.write(colorNames);
document.write("<br>");
//Part F

var f1 = parseInt(prompt("Select Index")) ;
var f2 = prompt("Enter color");

colorNames.splice(f);
document.write(colorNames);
document.write("<br>");

