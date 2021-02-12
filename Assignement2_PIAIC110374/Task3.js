// a
var a = 4;
if (++a === 5) 
{
    alert("given condition for variable a is true"); // variable a is preincremented condition will be true.

}
//b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
} // variable b is postincremented condition will be false.
//c
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");} // variable c is postincremented condition will be false.
    if (c === 13)
    {alert("condition 2 is true");} // Noe c ==13 so condition is true.
    if (++c < 14){
        alert("condition 3 is true");} // here c = 14 so condition is false.

        if(c === 14){
            alert("condition 4 is true");} // atlast this condioton is true.
            //d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
    alert("The cost equals");} // it will run alert will show .
    // e
    if (true){
        alert("True");
    }if (false)
    {
        alert("False");
    }
    if("car" < "cat")
    {alert("car is smaller than cat");
}
