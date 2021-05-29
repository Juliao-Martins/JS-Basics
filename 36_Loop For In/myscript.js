const demo = document.getElementById("demo");

const person = {
	name:"Juliao Martins",
	age:20,
	address:"Tasi Tolu",
	email:"juliaomartins@gmail.com"
};

let txt = "";
for(let i in person) {
	txt += person[i] + "<br>";
	// console.log(i);
};

demo.innerHTML = txt;

const cars = ["Saab","Volvo","BMW","Ferarry"];
// for(let i in cars) {
// 	console.log(cars[i]);
// 	// console.log(i);
// };

txt += "================<br>";

function myFunction(value, index, array) {
	txt += value + "<br>";
};

cars.forEach(myFunction);

demo.innerHTML = txt;