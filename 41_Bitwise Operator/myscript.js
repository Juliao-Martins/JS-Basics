/*
Bitwise Operator in JavaScript

<<		Shift left
>>		Shift right
&		and
|		or
^		xor
~		not
>>> 	shift right
*/

let a, b, c;

// <<	Shift left!
console.log("shift left!");
a = 5;
b = 1;
c = a << b;
console.log(`${a} << ${b} = ${c}`);

// >> 	Shift right!
console.log("shift right!");
a = 5;
b = 1;
c = a >> b;
console.log(`${a} >> ${b} = ${c}`);

// >>>	Shift right!
console.log("shift right!");
a = 5;
b = 1;
c = a >>> b;
console.log(`${a} >>> ${b} = ${c}`);

// &	And!
console.log("And!");
a = 1;
b = 0;
c = a & b;
console.log(`${a} & ${b} = ${c}`);
a = 0;
b = 1;
c = a & b;
console.log(`${a} & ${b} = ${c}`);
a = 0;
b = 0;
c = a & b;
console.log(`${a} & ${b} = ${c}`);
a = 1;
b = 1;
c = a & b;
console.log(`${a} & ${b} = ${c}`);

// | or!
console.log("Or!");
a = 1;
b = 0;
c = a | b;
console.log(`${a} | ${b} = ${c}`);
a = 0;
b = 1;
c = a | b;
console.log(`${a} | ${b} = ${c}`);
a = 0;
b = 0;
c = a | b;
console.log(`${a} | ${b} = ${c}`);
a = 1;
b = 1;
c = a | b;
console.log(`${a} | ${b} = ${c}`);

// ^ Xor
console.log("Xor!");
a = 1;
b = 0;
c = a ^ b;
console.log(`${a} ^ ${b} = ${c}`);
a = 0;
b = 1;
c = a ^ b;
console.log(`${a} ^ ${b} = ${c}`);
a = 0;
b = 0;
c = a ^ b;
console.log(`${a} ^ ${b} = ${c}`);
a = 1;
b = 1;
c = a ^ b;
console.log(`${a} ^ ${b} = ${c}`);

// ~ Not!
console.log("Not!");
a = 5;
b = ~a;
console.log(`~${a} equals ${b}`);
a = 0;
b = ~a;
console.log(`~${a} equals ${b}`);
a = 9;
b = ~a;
console.log(`~${a} equals ${b}`);