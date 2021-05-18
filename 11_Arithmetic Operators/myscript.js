/*

The Arithmetic operate

+		addition
-		subtraction
*		multiplication
/		division
**		exponentation (ES6)
%		modulos
++		increment
--		decrement

*/

// you can compute literals or variables
let a, b, c, x, y, z;

// literals
z = (5 + 6) * 4;

// variables
a = 5;
b = 6;
c = 4;
z = (a + b) * c;

// + operate to adds
a = 10;
b = 3;
c = a + b;
console.log(`${a} + ${b} = ${c}`);

// - operate to subtracs
a = 5;
b = 4;
c = a - b;
console.log(`${a} - ${b} = ${c}`);

// * operate to multiplies
a = 5;
b = 8;
c = a * b;
console.log(`${a} * ${b} = ${c}`);

// / operate to divides
a = 81;
b = 9;
c = a / b;
console.log(`${a} / ${b} = ${c}`);

// % operate to take division remainder
a = 35;
b = 6;
c = a % b;
console.log(`${a} % ${b} = ${c}`);

// ** operate in ES6 exponential
a = 5;
b = 3;
c = a ** b;
console.log(`${a} ** ${b} = ${c}`);
// console.log(Math.pow(a,b));

// ++ operate increment
y = 5;
z = ++y;
console.log(z);

// -- operate decrement
y = 10;
y--;
console.log(y);

x = 5;
console.log(x++);

// expression
a = 5;
b = 2;
c = 8;
z = a + b * c;	// will return 21
console.log(`${a} + ${b} * ${c} = ${z}`);

z = (a + b) * c; // will return 56
console.log(`(${a} + ${b}) * ${c} = ${z}`);

// if you use + operate to calculate numbers and strings will return strings
z = 9 + 3 + "ferrary";
console.log(z); // will return 12ferrary

z = "ferrary" + 9 + 3;
console.log(z); // will return ferrary93

z = 9 + "ferrary" + 3;
console.log(z); // will return 9ferrary3

// or this
a = '5';
b = 2;
c = 3;
z = a + b + c; // will return 523
console.log(z);

z = b + c + a; // will return 55
console.log(z);

z = c + a + b; // will return 352
console.log(z);