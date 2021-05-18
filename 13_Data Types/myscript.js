// JavaScript Data Types

let a, b, c;

c = "Juliao" + 2 + 0.9;
console.log(c);

// JavaScript types are Dynamic
a = "Hello, World!";		// now is String
a = 19.789999;				// now is number
a = true;					// now is boolean

// without data types JavaScript CANNOT solve example
// above. but in JavaScript when adds Numbers and Strings
// or Strings and Numbers will return String

// JavaScript Strings
// String are written inside single or double quotes
a = 'Hello, World!';	// single quote
b = "Hello, Again!";	// double quote
console.log(a);

// surrounded by quotes
a = "Hello, i am 'David'.";
b = 'he hame is called "Juliao"';
console.log(b);

// if you declare a variable and give "" both the types is string
let name = "";		// type is string
// check with typeof operator
console.log(typeof name);

// JavaScript Numbers
// Numbers are written without quotes
// Numbers can written decimals or without decimals
a = 19;		// without decimals
b = 19.78;	// with decimals
console.log(`${b} is ${typeof b}`);

// JavaScript Booleans
// Boolean also have the two values such as true or false
a = 5;
b = 5;
c = 4;
console.log(a == b);
console.log(a == c);
console.log(true);
/*
NOTE:
	comparison and logical operate 
	will return Boolean types (true / false)
*/
console.log(typeof (a == b));
console.log(typeof true);

// JavaScript Arrays
// Arrays are written with square brackets []
let carName = ["Volvo","Ferrary","Fiat"];
//				0			1		2		...

// Array are accessed by index 
// fhe first element index is 0, the second index is 1 and ...
name = carName[0];
console.log(name); // returns Volvo

// Arrays Objects
// Object are written with curly brackets {}
// Object is written name:value separate with comma
let person = {
	name:"Juliao",
	hobby:"Code",
	dream:"Software Engineer"
};

// access Object properti value with property name
// objectName.propertyName or objectName["propertyName"]
name = person.name;
console.log(name);
console.log(person["dream"]);

// empty values
// undefined when you declare a variable without value
// the variable value is undefined type is undefined

let favoriteLanguague;		// the value is undefined type also undefined
console.log(favoriteLanguague);
console.log(typeof favoriteLanguague);

// JavaScript null
// null is empty like undefined but type is object
a = null;

console.log(a);
console.log(typeof a);

b = undefined;
c = a == b;
console.log(c); // will return true
c = a === b;
console.log(c); // will return false, because different types

// you can reasssigned object value to null
// console.log(person);
// person = null;
// console.log(person);

// you can reassigned object value to undefined
// console.log(person);
// person = undefined;
// console.log(person);

// primitive data without properties and methods
// String, Number, Boolean, undefined

// complex data with properties and methods
// Object and Function

// you can use typeof operate to check the type
console.log("****************************");
console.log(typeof "Juliao Martins");
console.log(typeof 19.790000);
console.log(typeof true);
console.log(typeof undefined)
console.log(typeof ['python','java']); // javascript array the type will return obejct
console.log(typeof {name:"strawberry",color:"red"});
console.log(typeof function myFunction(){});
console.log(typeof null);
console.log("****************************");

// you CANNOT create a value with keyword new
a = new String("Juliao");
b = new Number(19.79999000);
c = new Boolean(true);

// note: the type will be object
console.log(`
${typeof a}
${typeof b}
${typeof c}
`);

// NOTE: JavaScript object CANNOT be compared!