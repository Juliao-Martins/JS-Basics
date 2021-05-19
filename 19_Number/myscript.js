// JavaScript Number are written with or without decimal
let a, b, c, d, 
x, y, z;

a = 19;		// without decimals
b = 19.798; // with decimals

// writting extra large or exponential
a = 123e5;
console.log(a); // return 12300000

a = 123e-5;
console.log(a); // return -0.00123

// number with decimals isn't acurate compute
x = 0.1 + 0.2;
console.log(x);

// how to solve use this
x = (0.1 * 10 + 0.2 * 10) / 10;
console.log(x);

// NOTE mistunderstand with numbers and strings
// if you adds two numbers will return numbers
// if you add numbers and strings will return strings
a = 2;
b = 3;
c = "50";
d = a + b + c;
console.log(d); // return 550 type is string
console.log(typeof d);

a = "2";
c = 50;
d = a + b + c;
console.log(d); // return 2350

// Numeric String
// if you use + operate for "10" and another number will return string (concatenation operate)
// but if you use -, *, /, % or ** will return numeric string
// javascript will convert numeric string to number types
a = 100;
b = "90";
c = a - b;
console.log(c); // return 10
console.log(typeof c); // return Number

a = "10";
b = 10;
c = a * b;
console.log(c); // return 100 also type is number

a = 36;
b = "2";
c = a / b;
console.log(c); // return 18

a = "5";
b = 2;
c = a**b;
console.log(c);

a = 10;
b = "3";
c = a % b;
console.log(c);

// NaN (Not a Number)
// if try it
z = 100 / "apple";
console.log(z); // return NaN

y = 100 * "apple";
console.log(y); // return NaN

// or
x = 10 - "nine";
console.log(x); // return NaN

// the type of NaN also Number
console.log(typeof x);
console.log(typeof NaN);

// use global built-in function isNaN (is Not a Number) return true
// if(isNaN("juliao")) { console.log("it's text!"); } else { console.log("it's numeric!"); };

// Infinity type also Number
// you do not try this
x = 2 / 0;
y = -2 / 0;
console.log(x);					// return Infinity
console.log(y); 				// return -Infinity
console.log(typeof Infinity); 	// return Number

/*
let myNumbs = 2;
while(myNumbs < Infinity) {
	myNumbs = myNumbs * myNumbs;
	console.log(myNumbs);
	myNumbs++;
};
*/

// or you can try this
x = NaN * 10;
console.log(x); // return NaN
x = NaN + "11";
console.log(x); // return NaN11

x = Infinity - 2;
console.log(x); // return Infinity
x = Infinity + "1000";
console.log(x); // return Infinity1000

// the Number Constant Variable
console.warn(`
Number constant variable
max value\t\t: ${Number.MAX_VALUE}
min value\t\t: ${Number.MIN_VALUE}
positive\t\t: ${Number.POSITIVE_INFINITY}
negative\t\t: ${Number.NEGATIVE_INFINITY}
Not a Number\t: ${Number.NaN}
`);

// Number are content 15 Digit 
a = 999999999999999;
b = 9999999999999999;
console.log(a);
console.log(b);

// do not create Numbers as object
a = 10;
b = new Number(10);
c = a == b;
console.log(c);	// return true, equal value
d = a === b;
console.log(d); // return false, different type

a = new Number(1);
b = new Number(1);
c = a == b;
d = a === b;
console.log(c); // return false
console.log(d); // return false

// NOTE: JavaScript Object CANNOT be compared with == or === operate always return false