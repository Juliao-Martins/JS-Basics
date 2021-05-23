// JavaScript Random

const demo = document.getElementById("demo");

let x;

// x = Math.floor(Math.random() * 10);		// return 0 to 9
// x = Math.floor(Math.random() * 11); 		// return 0 to 10
// x = Math.floor(Math.random() * 10) + 1; 	// return 1 to 10
// x = Math.floor(Math.random() * 11) + 1;		// return 1 to 11
// x = Math.floor(Math.random() * 100); 		// return 0 to 99
// x = Math.floor(Math.random() * 101); 		// return 0 to 100
x = Math.floor(Math.random() * 100) + 1; 		// return 1 to 100

console.log(x);
demo.innerText = x;

// function findRndInt(max, min) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// };

function findRndInt(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// x = findRndInt(10, 2);
x = findRndInt(1,19);
console.log(x);