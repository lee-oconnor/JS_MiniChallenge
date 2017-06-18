
//Challenge 1: Create a script with 2 variables, each assigned to a number.
//Add them together and output the result to the console.
// Now do the same with two strings.

var x=2
var y=4
console.log (x + y);

var name1="Sally"
var name2="Harry"
console.log (name1 + " met " + name2);

//Create a multidimensional array related to a subject that interests you.
//Output two of the items in sub-arrays to the console.

var slr = ["Canon", "Nikon", "Sony"];
var mediumFormat = ["Hasselblad", "Mamiya", "Pentax"];
var cameras = [slr, mediumFormat];
cameras
cameras [2][0]
cameras [1][1]

//Write a script that checks if a variable is less than 100.
//If it is, alert the user that their variable is less than 100.
//If it is not alert the user of what the value was and that it was greater
//than 100.

var num = 4

if (num < 100){
  alert ("your variable is less than 100");
} else {
  alert (" your variable " + num + " is greater than 100 ");
}

//Declare a function that takes a name as an argument and tells the user what name they've entered.
//Try running it after it has been declared.

var password = "Julie";

if (password === "Julie"){
  alert (" You've entered " + password);
}
