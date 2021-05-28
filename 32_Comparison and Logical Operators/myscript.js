// comparison and logical operators are use to for test true or false

// comparison operators
let x, y, result;

x = 5;
result = x == 5;		// return true
result = x == 3;		// return false
result = x === '5';		// return false
result = x !== 5; 		// return false

x = 8;
y = 6;
result = x > y;			// return true
y = 9;
result = x > y;			// return false
y = 8;
result = x >= y;		// return true

x = 4;
y = 10;
result = x < y;			// return true
result = x <= y;		// return true
console.log(result);

// how can i use it
let age = 12, txt;

if(age < 18) txt = "to young to by alcohol!";

// console.log(txt);

// logical operators

// logical AND (&&)
// to check two values must true x and y else false

x = 9 > 3;				// return true
y = 50 !== "John";		// return true
result = (x && y);		// return true
console.log(result);

// logical OR (||)
// to check some values must true x and y or two values are false
// will return false
x = "John" === "Maria";		// return false
y = (100+300) === 400;		// return true
result = (x || y);			// return true
console.log(result);

// logical NOT (!)
// change true to false and false to true
console.log("==================");
x = true;
console.log(x);		// return true

y = !x;
console.log(y);		// return false

result = !false;
console.log(result); // return true

// Ternary Operator
result = (age < 18) ? "To young to by alcohol!" : "old enough!";

// console.log(result);

// comparing data types
x = 2 > "1";			// return true
x = 1 > "John";			// return false
x = 0 < true;			// return true
x = 11 === "Eleven"; 	// return false
x = 11 !== "Eleven"; 	// return true
x = 5 >= NaN;			// return false
// console.log(x);

// NaN is always return false
x = window.prompt("how old are you?");

x = parseInt(x);

if(isNaN(x)) {
	txt = "not a number!";
} else {
	txt = (x < 18) ? "To young" : "Old enough!";
};

console.log(txt);