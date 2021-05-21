const demo = document.getElementById("demo");

// Array methods help you work with an array

let fruits = ["Banana","grape","apple","orange"];

// toString() return an array as string separated by comma
demo.innerHTML = fruits; // that's automatic to string when written inside element content

// but using console.log() to printout in browser console
// but you can use toString() to convert array to string
console.log(fruits.toString());

// join() method join all element to string.
demo.innerHTML = fruits.join(" + "); // return 'Banana + grape + apple + orange'

// popping and pushing
// popping poppet out an element the last of an array
// fruits.pop(); 
// popping is return an element is poppet out
let x;

x = fruits.pop();
console.log(x); // return orange

// pushing an array element into an array in the last
// fruits.push("Watermelon");
// pushing is return the length of an array when pushing
x = fruits.push("Watermelon");
console.log(x); // return 4

console.log(fruits);

// Shifting
// shift is remove an array element is the first
let cars = ["Saab","Ferrary","BMW"];

console.log(cars);

// cars.shift();
// shift is return an element array is removing
x = cars.shift();
console.log(x); // return Saab

// unshift is adds an array element into the first
// cars.unshift("Toyota");
// unsift is return the lenght of an array
x = cars.unshift("Toyota"); // return 3

console.log(cars);

// change an array element
cars[0] = "Fiat";

console.log(cars);

// JavaScript array return object type
// you can use delete operate to delete an array element
// will return empty
delete cars[0];

console.log(cars);

// splice method help you adds and remove 
// an element of array
let programmingLang = ["C","Pascal","VB","Java"];

console.log(programmingLang);

programmingLang.splice(1,0,"Python","JavaScript");

// NOTE splice(1,0) first parameter is index of where the
// value is third parameter is add and the second is length of an array element if you want to remove

console.log(programmingLang);

// removing an element of array using splice
// but instead with pop() and shift()
programmingLang.splice(0, 1); // removing first element

console.log(programmingLang);

programmingLang.splice(programmingLang.length-1, 1); // removing last element

console.log(programmingLang);

// adding an element with length property
fruits = ["Banana","Apple","Pears"];

// both with this
// fruits[6] = "Rasberry";
fruits[fruits.length] = "Rasberry"; // add into the last of an array

// but instead with pop() and shift() or splice()

console.log(fruits);

// concatenation with array use concat() methods
// mergin two or three an array
let interpreter = ["JavaScript","Python"];
let compiler = ["C#","Java"];
let database = ["MySQL","SQL"];
// MERGIN TWO => let mySkill = interpreter.concat(compiler);
let mySkill = database.concat(interpreter, compiler);

console.log(mySkill);

// slice in array
fruits = ["Strawberry","Pomegranate","Orange","Cherry"];

console.log(fruits);

x = fruits.slice(0,2);
console.log(x); 		// return Strawberry,Pomegranate

x = fruits.slice(1);
console.log(x);			// return Pomegranate,Orange,Cherry