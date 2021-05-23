// JavaScript Math Object 
// unlike another object Math object no have constructor
// math object are static

// Math provides 8 mathematicals constants
// accessing in property
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);

// number to integer
let a = 4.9,
b = 4.7,
c = 4.4,
d = -4.2;

// Math.round()
console.log(Math.round(a));	// return 5
console.log(Math.round(b));	// return 5
console.log(Math.round(c));	// return 4
console.log(Math.round(d));	// return -4
console.log("================");

// Math.ceil()
console.log(Math.ceil(a));	// return 5
console.log(Math.ceil(b));	// return 5
console.log(Math.ceil(c));	// return 5
console.log(Math.ceil(d));	// return -4
console.log("================");

// Math.floor()
console.log(Math.floor(a));	// return 4
console.log(Math.floor(b));	// return 4
console.log(Math.floor(c));	// return 4
console.log(Math.floor(d));	// return -5
console.log("================");

// Math.trunc()
console.log(Math.trunc(a));	// return 4
console.log(Math.trunc(b));	// return 4
console.log(Math.trunc(c));	// return 4
console.log(Math.trunc(d));	// return -4
console.log("================");

// Math sing()
console.log(Math.sign(undefined));	// return NaN
console.log(Math.sign(NaN));		// return NaN
console.log(Math.sign(1001));		// return 1
console.log(Math.sign(-1001));		// return -1
console.log("================");

// Math.abs()
// return a positive number
a = -9.55;
b = Math.abs(a);
console.log(b); // return 9.55

// Math.max() and Math.min()
// to find lowest and highest values
a = Math.max(100, 5, -99, 2, 1);
console.log(a); // return 100
b = Math.min(50, 12, -11, 9, -12.1);
console.log(b); // return -12.1

// Math.random()
console.log(Math.random());

// Math.sqrt();
a = Math.sqrt(81);
console.log(a); // return 9
b = Math.sqrt(49);
console.log(b); // return 7

// Math.log();
c = Math.log(1);
console.log(c); // return 0

// Math.log2();
d = Math.log2(16);
console.log(d); // return 4

a = Math.log2(32);
console.log(a); // return 5

// Math.log10();
b = Math.log10(100);
console.log(b); // return 2

c = Math.log10(1000);
console.log(c); // return 3

a = Math.sin(90 * Math.PI / 180);
console.log(a); // return 1

b = Math.cos(0 * Math.PI / 180);
console.log(b); // return 1