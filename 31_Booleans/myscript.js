// JavaScript Boolean data types 
// have a value true and false

// Boolean() function return the value of Booleand types
// console.log(Boolean(10 > 9)); // return true

// or easier 
console.log(10 > 9);

// The comparison and logical operate are use for tested true or false
let a;

a = 5 === "5";
console.log(a); // return false

a = 10 < 11.5 || 1 === null;
console.log(a); // return true

// everything without a value return false
let result;

// always return false
// result = Boolean("");
// result = Boolean(0);
// result = Boolean(-0);
// result = Boolean(undefined);
// result = Boolean(null);
// result = Boolean(NaN);
result = Boolean(false);
console.log(result);

// everything with value return true

// always return true
// a = Boolean(" ");
// a = Boolean("Hello, World!");
// a = Boolean(1);
// a = Boolean(-19);
// a = Boolean(9.656);
result = Boolean(true);
console.log(result);

// Boolean can be Object
console.log("=======================");
let x, y;

x = true;
y = new Boolean(true);

console.log(x == y); // return true
console.log(x === y); // return false, because different types

x = new Boolean(true);
y = new Boolean(false);

console.log(x == y || x === y); // return false, because two JavaScript object CANNOT be compared use == or === operate!