/*
let hours = 12;

if(hours < 18) {
	// The code block to be execute if the condition is true
	console.log("Good Day!");
} else {
	console.log("Good Night!");
	// The code block to be execute if the condition is false
};
*/

let x = window.prompt("what is your name?");

if(isNaN(x) && (x !== null && x !== "")) {
	window.alert("Hello, " + x + "!");
} else if(x === null || x === "") {
	window.alert("it's empty!");
} else {
	window.alert("This is Number (" + x + ").");
};