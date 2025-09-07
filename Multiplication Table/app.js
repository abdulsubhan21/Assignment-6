var name = prompt("Enter your name:");

var num = prompt("Enter a number:");

document.write("<h1>Hello, " + name + "!</h1>");
document.write("<h2>Table of " + num + " :</h2>");

for (var i = 1; i <= 20; i++) {
  document.write(num + " x " + i + " = " + (num * i) + "<br>");
}