/*
try {
	alllert("Hello, World!");
} catch(err) {
	console.error(err.message);
};
*/

const demo = document.getElementById('demo'),
userInput = document.getElementById('user-input');

const myFunction = () => {
	const x = userInput.value;
	try {
		if(x === "") throw "it's Empty!";
		if(isNaN(x)) throw "Not a Number!";
		Number(x);
		if(x < 5) throw "to low!";
		if(x > 10) throw "to high!";
	} catch(err) {
		demo.innerHTML = err;
	} finally {
		userInput.value = "";
	};
};

/*
try {
	eval('alert("Hello, World!)');
} catch(err) {
	console.error(err.name);
	console.error(err.message);
};

let numb = 1;
try {
	numb.toPrecision(500);
} catch(err) {
	console.error(err.name);
};

let x = 5;
try {
	x = y + 10;
} catch(err) {
	console.error(err.name);
};

let numb = 5;
try {
	numb.toUpperCase();
} catch(err) {
	console.error(err.name);
};
*/

try {
	console.log(decodeURI("%%%%"));
} catch(err) {
	console.error(err.name);
};