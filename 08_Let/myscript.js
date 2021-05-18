/*
	before ES6 or JavaScript 2015
	'var' keyword has only way to declared variable
	but now have 'const' keyword but not reassigned
	and 'let' keyword restricted in scope.
*/

// javascript have two block scope
// global and function scope
var carName = "Volvo";

// code here CAN use carName

// code here CANNOT use isTurnUp

function showCar() {
	var isTurnUp = false;	// code here CAN use isTurnUp
	return carName;		// code here CAN use carName
};

// code here CANNOT use isTurUp

// code here also CAN use carName

// the var keyword CANNOT have block scope
// to solve this problem use let keyword (ES6)
// var x = 2;
// // now x is 2
// {
// 	let x = 10;
// 	// now x is 10
// }
// // now x is 2
// console.log(x);

// looping scope with var and let keyword
// var i = 5;
// for(var i = 0; i < 10; i++) {
// 	// some statement here!
// };
// console.log(i); // now i is 10

let i = 5;
for(let i = 0; i < 10; i++) {
	// some statement here!
};
console.log(i); // now i is 5

// redeclaring var keyword is allowed
// but let keyword is NOT allowed
// var hobby = "Game";
// var hobby = "Code";
// console.log(hobby); // return code

// but with let keyword will be error!
// let hobby = "Game";
// let hobby = "Code";

// or anothe block scope
// and different keyword but variableName it same
// will be error

// var x = 5;
// let x = 5;
// {
// 	var x = 10;
// 	let x = 10;
// }

// let keyword in another block scope is allowed
let x = 2;
{
	let x = 3;
}
{
	let x = 4;
}
{
	let x = 5;
}
console.log(x); // return 2

// some example using let keyword to store data
let demo = document.getElementById("demo");
let someCaption = "Hello, Web Developers";

demo.style.fontFamily = "Arial";
demo.style.textShadow = "2px 2px 2px #E5E5E5";
demo.innerHTML = someCaption;