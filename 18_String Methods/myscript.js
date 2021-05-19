// JavaScript String Methods
// String are primitive value that's without property or methods
// but with JavaScript you can work string with property or method

let txt, str, result;

// length property return length of string
txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
result = txt.length;
console.log(result);

// finding string
// work with indexOf(), lastIndexOf() and search() methods
txt = "Hello, i am Juliao. it's me 'Juliao' from East Timor.";
result = txt.indexOf("Juliao");
console.log(result); // return 12

result = txt.lastIndexOf("Juliao");
console.log(result); // return 29

result = txt.indexOf("Juliao",16);
console.log(result); // return 29

result = txt.lastIndexOf("Juliao",28);
console.log(result); // return 12

result = txt.search("it's");
console.log(result); // return 20

result = txt.indexOf("python");
console.log(result); // if indexOf() or lastIndexOf() not found text will return -1 and will return -1

// the different of indexOf() and searc()
// search() can't take two argument like indexOf()

// extracting string content
// have a three method, such as
// slice(start, end)
// substring(start, end)
// substr(start, length)
let fruits, eats;

fruits = "Rasberry, Grape, Orange";
eats = fruits.slice(10,15); // end index isn't included
console.log(eats); // return Grape

eats = fruits.slice(0,8);
console.log(eats); // return Rasberry

// give negative value of index
eats = fruits.slice(-13,-8); // return Grape
console.log(eats);

// if you omit the second paramete will slice rest of string
eats = fruits.slice(10); 
console.log(eats); // return Grape, Orange

eats = fruits.slice(-6);
console.log(eats); // return Orange

// substring() is similar to slice()
// substring() can't give negative value index
eats = fruits.substring(0,8);
console.log(eats); // return Rasberry

eats = fruits.substring(10);
console.log(eats); // return Grape, Orange

// substr() is similar to slice()
// but the second parameter is length of string
eats = fruits.substr(10,5);
console.log(eats); // return Grape

// omit second parameter
eats = fruits.substr(10);
console.log(eats); // return Grape, Orange

// or negative values
eats = fruits.substr(-6);
console.log(eats); // return Orange

// replacing string methods
// replace()
// str = "Hello, i'm Juliao!";
// result = str.replace("Juliao","Ado");
// or insensitive use flag /i regular expression
// note regular expression are not written with quote
// result = str.replace(/JULIAO/i,"Ado");
// or global flags /g to change all same data text sring
str = "Hello, i'm Juliao and me Juliao!";
result = str.replace(/Juliao/g,"Ado");
console.log(result);

// concat() method to concatenation operate adds two or more string
// it same as + operate
let firstName, lastName, myName;

firstName = "Juliao";
lastName = "Martins";
myName = firstName.concat(" ", lastName);
console.log(myName); // return Juliao Martins

myName = firstName + " " + lastName; // it's equals with concat() method
console.log(myName);

// trim() to remove both whitespace in string
txt = "   Hello, World!   ";
console.log(txt);
result = txt.trim();
console.log(result);

// extrating string character
str = "Hello, Again!";
result = str.charAt(0);
console.log(result); // return H
result = str.charAt(8); 
console.log(result); // return g
result = str.charCodeAt(0);
console.log(result); // return 72

result = str[0]; // it isn't same as array but is string access character
console.log(result); // return H

// CANNOT work with reassing new value with access string
str[0] = "W"; // it's not working
result = str[0]; // also it's not working
console.log(str);

// convert a string to an array
let a, b, c, d, toAnArray;

a = "1 2 3 4 5";
b = "6,7,8,9,10";
c = "11|12|13|14|15";
d = "abcdefgh";

console.log(`
${a}
${b}
${c}
${d}
`);

toAnArray = a.split(" ");
console.log(toAnArray);
toAnArray = b.split(",");
console.log(toAnArray);
toAnArray = c.split("|");
console.log(toAnArray);
toAnArray = d.split("");
console.log(toAnArray);