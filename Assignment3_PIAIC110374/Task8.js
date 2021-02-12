//Part A
document.write("Counting : ");

for(var counting=1; counting<16; counting++)
{
   document.write(counting+",");
}
document.write("<br>");
//part B
document.write("Reverse counting : ");
for(var rCounting=10; rCounting>0; rCounting--)
{
   document.write(rCounting+",");
}
document.write("<br>");
//part c
document.write("Even : ");

for(var even=0; even<21; even++)
{
    if(even ===0){
   document.write(even+",");}
   else if (even%2==0){
    document.write(even+",");
} 

   
}
document.write("<br>");
//part D
document.write("Odd : ");

for(var odd=0; odd<20; odd++)
{
    if(odd ===1){
   document.write(odd+",");}
   else if (odd%2!==0){
    document.write(odd+",");
} 
   
}
document.write("<br>");
//part E
document.write("Series : ");

for(var series=2; series<21; series++)
{
    if(series %2==0){
   document.write(series+"k, ");}
   

   
}
