const demo = document.getElementById("demo");

let txt = "";
let cars = ["Volvo","BMW","Ferrary","Saab"];

// for(let i = 0; i < cars.length; i++) {
// 	txt += cars[i] + "<br>";
// };

// statement 1 is optional
let i = 0;
let len = cars.length;
// for(; i < len; i++) {
// 	txt += cars[i] + "<br>";
// };

for(; i < len;) {
	txt += cars[i] + "<br>";
	i++;
};

demo.innerHTML = txt;

// for(let i = 0; i < 5; i++) {
// 	console.log("the number is " + i + "!");
// }

let j = 10;
for(; j >= 1;) {
	console.log("The number is " + j + "!");
	j--;
};