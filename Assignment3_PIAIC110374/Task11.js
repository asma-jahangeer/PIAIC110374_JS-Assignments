var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

if(search=A.findIndex(A => A===search ))
{
    
    document.write(A[search]+" is avaialable at index "+ search  +" in our Bakery");
}
else{
    document.write("We are sorry. "+search+" is not avaiable in our bakery");
}