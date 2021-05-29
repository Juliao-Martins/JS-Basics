const demo = document.getElementById("demo"),
fruits = ["Apple","Orange","Grape","Pineapple"];

let txt = "";

// let i = 0;
// while(i < 10) {
// 	console.log("The Number is " + i + "!");
// 	i++;
// };

// while(i > 5) {
// 	console.log("The Number is " + i + "!");
// 	i--;
// };

let i = 0;
let walk = true;
while(walk) {

	// condition here!
	if(i == 17) {
		// reassign new value to walk
		walk = false;
	};

	// console.log("The number is " + i + "!");
	i++;
};

// while(i <= 5) {
// 	console.log("The number is " + i + "!");
// 	i++;
// };

// comparing For and While Loop
// i = 0;
// let len = fruits.length;
// for(; i < len;) {
// 	txt += fruits[i] + "<br>";
// 	i++;
// };

i = 0;
let len = fruits.length;
while(i < len) {
	txt += fruits[i] + "<br>";
	i++;
};

demo.innerHTML = txt;