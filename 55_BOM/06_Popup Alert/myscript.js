// Alert Box
// written with or without window prefix is work!

// window.alert("Welcome to my website!");
// same as 
// alert("Welcome to my website!");

// Confirm Box
// let x = confirm("wich you choose!");
// if(x === true) {
// 	alert("user press OK!");
// } else {
// 	alert("user press Cancel!");
// };

// Prompt Box
let isRunning = true;

while(isRunning) {
	let x = prompt("What is your name?","Juliao Martins");
	if(x === '' || x === null) {
		alert("is empty!");
	} else {
		alert(`Hello, \n${x}!`);	// line break!

		if(confirm("try again!")) {
			alert("Ok!");
		} else {
			alert("End!");
			isRunning = false;
		};

	};
};