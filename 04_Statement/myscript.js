var x, y, z;	// statement 1
x = 5;			// statement 2
y = 6;			// statement 3
z = x + y;		// statement 4
console.log(z);	// statement 5

// JavaScript Statement or instructions are often called JavaScript Code
var a, b, c;	// declaring variables
a = 2;			// assign the value 2 to a
b = 3; 			// assign the value 3 to b
c = a + b;		// assign the sum of a and b to c
console.log(c);	// prin out the z to the web browser console

// JavaScript separated code by semicolons
// with semicolons you can write all code in one line
var firstName, lastName; firstName = "Juliao"; lastName = " Martins"; firstName += lastName; console.log(firstName);

// but you can written without semicolons but highly recomended
// firstName = "Mario"
// lastName = "soares"
// var name = firstName + " " + lastName
// console.log(name)

// javascript line length and line break
document.getElementById("demo").innerHTML = 
"My name is Juliao.";

console.log(
"Hello, World!"
);

// JavaScript Code Block
// use curly brackets {}
// in function, looping or switch and etc...
function myFirst(name) {
	return "Hello, " + name + "!";
};

var agapito = myFirst("agapito");
console.log(agapito);

// JavaScript statement start with keyword
// function keyword to declare a function
// return keyword to exit a function
// break keyword to terminate loop or switch
// and etc...

// var keyword to declare a variable
var day = new Date().getDay();

switch(day) {
	case 0:
		console.log("sunday");
		break;
	case 1:
		console.log("tuesday");
		break;
	case 2:
		console.log("wenesday");
		break;
	default:
		console.log("not found a day!");
};