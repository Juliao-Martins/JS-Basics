// JavaScript variables are store data

// decraling or creating variable in JS
var name = "Juliao";
console.log(name);

// clever use variable to store data
var demo = document.getElementById("demo");
// console.log(demo);
demo.innerHTML = name;

// in JS declaring variable without value
// technically value is undefined
var carName;	// the value is undefined
// console.log(carName);

// you assign the value here
carName = "Volvo";
console.log(carName);

// the unique name of variable are identifiers
// or case sensitive x and X are not equals

// one var keyword many variable
// you can give multi-line
// you can declaring without value
var hobby = "code", 
pi = 3.14, 
isWalk = true;

// var favoriteFilm,
// flavourSound,
// watch;

// JavaScript variable are store data types like
// string, numbers, booleans, objects and etc...

// javascript variable store string
var name1 = 'joma';		// single quote
var name2 = "joma";		// double quote

// javascript variable store number
var x, X;
x = 3;		// without decimals
X = 3.1459;	// with decimals

// javascript can store compute value like + operators
var total;

total = 5 + 2 + 3;
console.log(total);

// you can try this
total = '5' + 2 + 3;
console.log(total);

total = 5 + 2 + '3';
console.log(total);

total = 5 + '2' + 3;
console.log(total);