const demo = document.getElementById('demo');

/*
In JavaScript code also have two types of scope such as:
Local variables and Global Variables
*/


// LOCAL VARIABLES

// code here CANNOT use catName

function myCat() {
	let catName = "Rouse";
	return catName;
	// code here can USE catName
};

// code here also CANNOT use catName


// GLOBAL VARIABLES
let dogName = "Lary";

// code here can USE dogName

function myDog() {
	// code here can USE dogName
	return dogName;
};

// code here also can USE dogName

function changeDogName(newName) {
	// code here can USE dogName
	dogName = newName;
};

// AGAIN: code here also CAN use dogName
changeDogName("Tom");
const myDogName = myDog();
console.log(myDogName);

// also you can create Local Variables like this!
// use strict mode!

// code here CANNOT use carName

function showMyCar() {
	carName = "Volvo";
	return carName;
	// code here can USE carName
};

// code here also CANNOT use carName

console.log(showMyCar());