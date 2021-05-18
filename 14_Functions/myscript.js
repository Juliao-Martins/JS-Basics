const demo = document.getElementById("demo");


// create a function with keyword 'function' followed name, followed (), and followed { // all code will execute inside curly brackets }
// function name same as variable name letter, underscore, dolar sign and do not start with number and not include simbol

function product(a, b) {
	return a * b;
};

// return keyword will stop execution in inside function

let data1 = product(3,5);
console.log(data1);
let data2 = product(8,7);
console.log(data2);

demo.innerHTML = product(10,7);

function toCelsius(fahrenheit) {
	return (5 / 9) * (fahrenheit - 32);
};

// demo.innerHTML = toCelsius(77);

// you can assing function in variable value
let data3 = "The temperature is " + toCelsius(77) + " celsius.";

demo.innerHTML = data3;

// code here CANNOT use car

// local scope
function showMyCar() {
	let car = "Ferrary";
	// code here CAN use car
	return car;
};

// code here CANNOT use car

console.log(showMyCar());

// global scope
let hobby = "sing";

// code here CAN use hobby

function changeMyHobby(newHobby) {
	// code here CAN use hobby
	hobby = newHobby;
	console.warn("my hobby is " + hobby + ".");
	return `my hobby is ${hobby}.`;
};

changeMyHobby("code");

// code here CAN use hobby
demo.innerHTML = hobby;
console.log(hobby);

let isBGChange = true;

function darkMode() {
	if(isBGChange === true) {
		document.body.setAttribute("id","dark");
		isBGChange = false;
	} else {
		document.body.setAttribute("id","");
		isBGChange = true;
	};
	console.log("change!");
};