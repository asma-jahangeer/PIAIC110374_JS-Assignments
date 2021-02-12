var A = [20,53,78,4,91,12];
document.write("Before sorting : ",A,"<br>");
A.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
document.write("After sorting : ",A);