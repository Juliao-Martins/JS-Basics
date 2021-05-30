/*
The Conversion Type
as you know! 
Number() converts to a Number.
String() converts to a String.
Boolean() converts to a Boolean.
*/

let x;

// converting Date to String
console.warn("Converting Date to String!");
let d = new Date();
x = d;
console.log(typeof x);
x = String(d);
// console.log(typeof x);
x = d.toUTCString();
// console.log(typeof x);
x = d.toLocaleTimeString();
// console.log(x);
console.log(typeof x);

// converting Number to String
console.warn("Converting Number to String!");
let numb = 31;
console.log(typeof numb);
x = numb.toString();
// console.log(typeof x);
numb = String(123 + 15);
// console.log(typeof numb);
// console.log(numb);
numb = 19.82;
// console.log(typeof numb.toString());

// converting boolean to string
console.warn("converting Boolean to String!");
let myBool = true;
console.log(typeof myBool);
// x = String(myBool);
// console.log(typeof x);
console.log(myBool);
myBool = String(myBool);
console.log(myBool);

// converting string to number
console.warn("Converting String to Number!");
let words = "Hello, World!";
x = Number(words);		// return NaN
console.log(x);
console.log(typeof x);	// return Number type!
words = "";
x = Number(words);		// return 0
console.log(x);
console.log(typeof x);	// return Number type!

// converting boolean to number
console.warn("Converting Boolean to Number!");
myBool = true;
x = Number(myBool);		// return 1
console.log(x);
console.log(typeof x);	
myBool = false;			// when convert to number will return 0
console.log(`${Number(myBool)} is ${typeof Number(myBool)}`);

// converting date to number
console.warn("Converting Date to Number!");
d = new Date();
console.log(typeof d);
x = Number(d);
console.log(x);
console.log(typeof x);

// automatically converting to string!
console.warn("Automatically converting to String");
x = NaN + "Hello, World!";
console.log(typeof x);
x = "That story is " + true;
console.log(typeof x);
console.log(x);
x = 20 + "30" + 50;
console.log(typeof x);
console.log(x); 		// return 203050