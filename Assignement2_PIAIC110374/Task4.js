var input1 = prompt("Enter Marks of 1st subject out of 100");

var input2 = prompt("Enter Marks of 2nd subject out of 100");
var input3 = prompt("Enter Marks of 3rd subject out of 100");
var totlaMarks = 300;
document.write("Total Marks : ", totlaMarks);
document.write("<br>");
var marksObtain = parseInt(input1 ) + parseInt(input2) + parseInt(input3);
document.write("Marks Obtain : ", marksObtain);
document.write("<br>");
var percentage = Math.round((marksObtain/totlaMarks)*100);
document.write("Percentage : ", percentage += '%');
document.write("<br>");
if(input1>= 80 && input1<=100 && input2>= 80 && input2<=100 && input3>= 80 && input3<=100 ){
    document.write("Grade : A-One");
    document.write("<br>");
    document.write("Remarks : Excellent");


}
else if (input1 >= 70 && input1<80 && input2 >= 70 && input2<80 && input3 >= 70 && input3<80){
    document.write("Grade : A");
    document.write("<br>");
    document.write("Remarks : Good");
}
else if (input1>= 60 && input1<70 && input2>= 60 && input2<70 && input3>= 60 && input3<70 ){
    document.write("Grade : B");
    document.write("<br>");
    document.write("Remarks : You need to improve");
}
else{
    document.write("Grade : Fail");
    document.write("<br>");
    document.write("Remarks : Sorry");
}
