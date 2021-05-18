// JavaScript Object how to create a object
// ignored line break or multi-line

let person = {
	firstName:"Juliao",
	lastName:"Martins",
	age:20,
	name: function() {
		return this.firstName + " " + this.lastName;
	}
};

/*	
NOTE: how to access

properties

objectName.propertyName		==	person.firstName
objectName["properyName"]	==	person["firstName"]

methods

objectName.propertyMethods()	==	person.name()
*/

console.log(person.firstName);
console.log(person["lastName"]);

let myName = person.name();
console.log(myName);

// adding some properties
person.hobby = "code";

let myHobby = person.hobby;
console.log(myHobby);

// adding some methods
person.show = function () {
	return `Person\n\tname\t: ${this.name()}\n\tage\t\t: ${this.age}\n\thobby\t: ${this.hobby}\n`;
};

let x = person.show();
console.log(x);

// some array inside the object
let proLanguague = {
	name:["python","java","javascript"],
	types:["dynamic","static"],
	owner:["Guido","James","Brendan"],
	myFavorite: function() {
		return `is ${this.name[0]} type is ${this.types[0]}`;
	}
};

console.log(proLanguague.owner[1]);
let y = proLanguague.myFavorite();
console.log(y);

// do not create Strings, Numbers, and Booleans as object
// with keyword new
// let a = new String("Hello, Juliao!");
// let b = new Number(19.789990);
// let c = new Boolean(true);