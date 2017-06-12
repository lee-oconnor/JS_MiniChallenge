
  function addNums(){
    var var1 = document.getElementById('var1').value;
    var var2 = document.getElementById('var2').value;
    document.getElementById('result').innerHTML = (parseInt(var1) + parseInt (var2));
  }

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
