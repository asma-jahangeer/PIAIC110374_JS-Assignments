var a = 2, b= 1;
var result = --a - --b + ++b + b--;
// initinaaly  a= 2 and b =1 
//  --a - --b = 1- 0 
// now --a = 1 and -- b is 0.
// --a - --b + ++b now a remains 1 and b is 1
//    1 - 0  + 1 =  
// --a - --b + ++b + b-- b is post decremented so after result a = 1 and b = 0 .
//  1 - 0  + 1 + 1 = 3
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result " + result);

