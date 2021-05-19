// Numbers are primitive values no properties or methods
// But with JavaScript Properties and methods 
// help you work with Numbers

let a, b, c;

a = 19.798;
console.log(typeof a);

// toString() return Number as String
b = a.toString();
console.log(typeof b);

a = 9.656;
// console.log(a.toExponential());
// console.log(a.toExponential(2));
// console.log(a.toExponential(4));
// console.log(a.toExponential(6));

// console.log(a.toFixed());
// console.log(a.toFixed(2));
// console.log(a.toFixed(4));
// console.log(a.toFixed(6));

// console.log(a.toPrecision());
// console.log(a.toPrecision(2));
// console.log(a.toPrecision(4));
// console.log(a.toPrecision(6));

// valueOf() return Number as Number

// literals
c = (100 + 26).valueOf();
console.log(c); // return 126

// variables
a = 50;
b = 35;
c = (a + b).valueOf();
console.log(c); // return 85

// the JavaScript global Method converted String
// to Number
// Number()
// parseInt()
// ParseFloat()

console.log(Number(true));			// return 1
console.log(Number(false));			// return 0
console.log(Number("10"));			// return 10
console.log(Number(" 10"));			// return 10
console.log(Number(" 10 "));		// return 10
console.log(Number("10.20"));		// return 10.2
console.log(Number("10,20"));		// return NaN
console.log(Number("10 20 30"));	// return NaN
console.log(Number("10 march"));	// return NaN
console.log("------------------");

console.log(parseInt(true));			// return NaN
console.log(parseInt(false));			// return NaN
console.log(parseInt("10"));			// return 10
console.log(parseInt(" 10"));			// return 10
console.log(parseInt(" 10 "));			// return 10
console.log(parseInt("10.20"));			// return 10
console.log(parseInt("10,20"));			// return 10
console.log(parseInt("10 20 30"));		// return 10
console.log(parseInt("10 march"));		// return 10
console.log(parseInt("march 10"));		// return NaN
console.log("------------------");

console.log(parseFloat(true));				// return NaN
console.log(parseFloat(false));				// return NaN
console.log(parseFloat("10"));				// return 10
console.log(parseFloat(" 10"));				// return 10
console.log(parseFloat(" 10 "));			// return 10
console.log(parseFloat("10.20"));			// return 10.2
console.log(parseFloat("10,20"));			// return 10
console.log(parseFloat("10 20 30"));		// return 10
console.log(parseFloat("10 march"));		// return 10
console.log(parseFloat("march 10"));		// return NaN
console.log("------------------");