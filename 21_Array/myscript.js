// JavaScript array are store multiple value
// in single variable. how to create an array
// will be good you give an array element is literal 

const demo = document.getElementById("demo");

let cars = ["Volvo", "Saab", "BMW"];
// index		0		1		2

// JavaScript code line break
// let car = [
// 	"Volvo",
// 	"Saab",
// 	"BMW"
// ];

console.log(cars); // retur all reference of array

// accessing full array element
demo.innerHTML = cars;

// accessing first element of array with index
console.log(cars[0]);		// first element of array is 0

// the property and method in array
cars.sort(); 			// to sort an array element
let x = cars.length;	// return length of an array
console.log(x);
console.log(cars);

// change an array element
cars[0] = "Ferrary";
demo.innerHTML = cars[0];

// JavaScript Array Associative
// NOTE: JS are not support Array with named indexes

// BAD written
let myArr = [];
myArr["name"] = "John";
myArr["age"] = 20;
myArr["address"] = "Travessa33";
console.log(myArr.length); // return 0

// GOOD written
let myArr2 = [];
myArr2[0] = "John";
myArr2[1] = ["Beatriz"];
myArr2[2] = ["Teresinha"];
console.log(myArr2.length); // return 3

// AGAIN! JS are not support an array with named indexed

// when use an array. when use an object

// when you want to element numbered index
// you must be use an array
let myArr3 = ["papaya","tomato","orange"];

// if you want to element named index
// you must be use an object
let person = {name:"Felisberto",age:20};

// create an array use keyword new Arra()
let myArr4 = new Array(20, 17, 11, 9, 0, 1);
console.log(myArr4); 	// return all reference element
console.log(myArr4[0]); // return first element

// accessing first and last element of an array
let fruits = ["pineapple","rasberry","apple","grape"];
let first = fruits[0];
console.log(first);

let last = fruits[fruits.length-1];
console.log(last);

// adding an element with length property
// fruits[fruits.length] = "orange";

// instead using push() method
fruits.push("orange");

console.log(fruits);

// Avoid use keyword new Array()
let a;

a = new Array(1, 2, 3, 4); 	// BAD!
a = [1, 2, 3, 4,]; 			// GOOD!

// the JavaScript typeof operate return object for an array types
let myCaption = ["Hello, World!","Hello, Again!"];

console.log(typeof myCaption); // return object

// the solution is
console.log(Array.isArray(myCaption)); // return true (ES5)

function isArray(x) {
	return x.constructor.toString().indexOf("Array") > 1;
};

console.log(isArray(myCaption)); // return true

console.log(myCaption instanceof Array); // return true

// array element can be object
// you can give literal or variable 

// literal
let myFriendSchool = [
	{name:"Joaquim Gomes",age:22},
	{name:"Leonardo Guterres",age:21},
	{name:"Licenia Tilman",age:20},
	new Date().getFullYear()
];

let joaquim = myFriendSchool[0].name;
console.log(joaquim); // return joaquim

// looping in an array
// for(let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i]);
// };

// let all = "";
// fruits.forEach(myFunction);

// function myFunction(value) {
// 	all += value + "\n";
// };

// console.log(all);