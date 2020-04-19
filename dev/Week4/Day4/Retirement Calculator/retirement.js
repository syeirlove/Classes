var currentAge = prompt("What is your age?"); //currentAge = 25;
var retirementAge = prompt("At what age would you like to retire?"); //retirementAge = 65;
var yearsLeft = retirementAge - currentAge;

var d = new Date();
var currentYear = d.getFullYear();

var retirementYear = currentYear + yearsLeft;

document.write("You have " + yearsLeft + " years left until you can retire. <br><br>");
document.write("It's " + currentYear + ", so you can retire in " + retirementYear + ".");
