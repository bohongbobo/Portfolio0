document.write("just like cout in c++");

document.write("<br />");

var some = "something";
var thing = " and some other thing";
var combine = some + thing;
document.write(combine);

document.write("<br>");

var num1 = 39;
var num2 = 21;
var total = num1 + num2;
document.write(total);

document.write("<br>");

var alpha = "DAFDFVA ADFA";
var length = alpha.length;
document.write(length);

document.write("<br>");

var alpha = "DAFDFVA ADFA";
var sub = alpha.substring(4, 10); //take out the letter from position 4 to 10
document.write(sub);

document.write("<br>");

var a = new Array(7); //7 is the size of the array, it could be any size, not just 7
a[0] = "you";
a[1] = "me";
a[3] = 23;
a[4] = true;
a[5] = 2;
a[6] = false;
document.write(a[4]);

document.write("<br>");

var a = new Array("some", "thing", 3, true);
document.write(a[2]);

document.write("<br>");

var a = ["some", "thing", 3, true, false, 43];
document.write(a[5]);

document.write("<br>");

function something(){
  document.write("javescript")
}
function another(what){
  document.write("javescript " + what);
}   //or the function can be put in the head part, and then just wirte the the following
something();
document.write("<br>");
another("function");

document.write("<br>");

a = 9;
if(a == 9){
  document.write(a);
}
else{
  alert("this is test for if function");
}

document.write("<br>");

for(i = 0; i < 10; i++){
  document.write("the is loop " + i + " " + sub + " " + total + " " + combine + "<br>");
}

document.write("<br>");

function ColorChange(){
  document.getElementById('text').style.color = "black";
  document.getElementById('color').style.color = "white";
  document.getElementById('color').style.background = "black";

}

function ColorChangeBack(){
  document.getElementById('text').style.color = "red";
  document.getElementById('color').style.color = "blue";
}
