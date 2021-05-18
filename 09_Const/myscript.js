// const keyword in ES6
// is similar to let keyword in block scope
// but when you declaring a const variable
// must be assign with the value
// and const variable CANNOT be reassigned value

/* 
this give an error 

not a value!
const pi;
pi = 3.145699;

or reassigned
const name = "juliao";
name = "evan";
*/

const name = "Juliao";
console.log(name);

const x = 1;
// now x is 1
{
	const x = 2;
	// now x is 2
} 
{
	const x = 3;
	// now x is 3
}
console.log(x); // now x is 1

// strings, numbers, object are primitive values
// const variables CANNOT change the value
// but with const object can change proprieties

// constant object can change
const person = {
	firstName:"Juliao",
	lastName:"Martins",
	name: function() {
		return this.firstName.concat(" ", this.lastName);
	}
};

console.log(person.name());

// can change properties
person.lastName = "De Jesus";

// can add properties
person.hobby = "Coding";

console.log(person.name());
console.log(person.hobby);

// constant array can change
const fruits = ["Banana","Orange","Apple","Mango"];

console.log(fruits.toString());

// change constant array element
fruits[1] = "Grape";

// adding constant array element
fruits.push("Rasberry");

// removing constant array element
fruits.shift();

console.log(fruits.toString());

// Some example use const keyword to store data
const demo = document.querySelector("#demo");
const someCaption = "Clever Programmer!";

demo.style.font= "24px/30px Comic Neue";
demo.style.fontStyle = "oblique";
demo.style.textShadow = "1px 1px 1px deeppink";
demo.textContent = someCaption;