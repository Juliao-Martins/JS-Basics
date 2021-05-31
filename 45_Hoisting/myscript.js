const demo = document.getElementById('demo');

// x = "Hello, World!";
// demo.innerHTML = x;
// var x;

// JavaScript let and const keyword
// can't work with Hoisted
// must be define at beginning before use!

// JavaScript Hoisting variable are not initialize!
// var x = "Hello, ";	// initialize!
// var y = "Again!";	// initialize!
// demo.innerHTML = x + y;

var x = "Learn to ";
y  = "Code</>"

// demo.innerText = x + y; // return Learn to undefined
// to solve this can use hoisting!
demo.innerText = x + y; // return Learn to Code</>

var y;

// many developer not understand how to JavaScript code rules
// like JavaScript Hoisted
// to otherwise the javascript hoisted variables 
// better define variable at beginning before use

// JavaScript Hoisting
myCaption = "am i programmer!";
demo.style.textDecoration = "line-through";
demo.style.fontSize = "38px";
demo.textContent = myCaption.toUpperCase();
var myCaption;