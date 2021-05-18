// JavaScript String are written all characters inside single or double quote

let carName1 = 'Volvo';		// single quote
let carName2 = "Volvo";		// double quote

// you can write quote inside quote or sorrounding
let word1, word2, word3;

word1 = "Hello i'm Juliao!";
word2 = 'he name is called "Jaime"';
word3 = "she name is called 'Rose'";
console.log(word1);

// or you can use backslash to solve this problem
// in sorrounding quotes
//  \' 	== 	'
//  \" 	== 	"
//  \\ 	== 	\
word1 = "we are called \"programmers\" we develop software for world.";
console.log(word1);

word2 = 'He name is \'John corner\'';
console.log(word2);

word3 = "the simbol \\ called is backslash";
console.log(word3);

// especial character with \ backslash
word1 = "first line.\nsecond line";
console.log(word1);

// console.log("Hello, World!");
// console.log("\v");
// console.log("Hello, Again!");

word2 = "name\t: Juliao";
console.log(word2);

// string length property to return length of string
let alpha = "abcdefghijklmnopqrstuvwxyz";
let alphaLen = alpha.length;
console.log(alphaLen);

// long code and line breaks
// document.getElementById("demo").innerHTML = 
// "Hello! From JavaScript!";

// you can line break with string and \ character
// document.getElementById("demo").innerHTML = "Hello! \
// From JavaScript!";

// the safety recommend to use + operate
document.getElementById("demo").innerHTML = "Hello! " +
"From JavaScript!";

// do not create String as object
let a, b;

a = "python";				// is string
b = new String("python");	// is object

console.log(a == b);		// return true
console.log(a === b);		// return false, cause different types

// or even worse, JavaScript can't compared two object
// always return false with == or === operate
a = new String("java");
b = new String("java");

console.log(a == b);	// return false
console.log(a == b);	// return false

// AGAIN two javascript object always return false they CANNOT be compared use == or === operate