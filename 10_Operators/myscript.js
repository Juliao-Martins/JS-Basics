// The JavaScript Operator

// assignment operator = assing the value to variable
let x, y, z;

x = 5;		// assign the value 5 to x
y = 6;		// assign the value 6 to y
z = x + y;	// assign the sum of x and y to z
console.log(z);

// and + operator to adds two or more number
x = 10 + 2;
console.log(x);

// if you use + operator to string
x = "Juliao";
y = "Martins";
z = x + " " + y; // will be called concatenation operator
console.log(z);

// in javascript if you adds two numbers will return the sum
// else numbers and strings javascript will return text string

x = 1;
y = 2;
z = x + y;	// will return numbers
console.log(z);

x = "Juliao";
y = 20;
z = x + y; // will return strings
console.log(z);

// the operator in javascript
// arithmetic Operator +, -, *, **, /, %, ++, --
// assignment operator =, +=, -=, *=, **=, /=, %=
// comparison operator ==, ===, !=, !==, >, <, >=, <=, ?
// logical operator &&, ||, !
// type operator typeof, instanceof
// bitwise operator >>, <<, ....

// you can use += assignment operator to adds numbers or concatenation string
x = 5;
y = 2;
x += y; // or x = x + y returns 7
console.log(x);

x = "W3";
y = "Schools";
x += y; // or x = x + y return W3Schools
console.log(x);

// you can try comparison operator
// equal to (==) operator
x = 5;
y = 5;
z = 6;

console.log(x == y); // return true
console.log(x == z); // return false

// or equal value and equal type
x = 20;			// this is numbers type
y = "20";		// this is strings type

// use typeof operator to knows variable types
console.warn(`x = ${x} \ttype is ${typeof x}`);
console.warn(`y = ${y} \ttype is ${typeof y}`);

z = x === y; 	// return false cause different types
console.log(`${x} === ${y} is ${z}`);
z = x == y; 	// return true cause same value
console.log(`${x} == ${y} is ${z}`);