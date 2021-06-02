// to create class inheritance, use the extends keyword
// NOTE: class are not hoited declaring before using!
// getter and setter, use set keyword to setter and get keyword to getter
// recomended use underscore _ for object properties name in contructor and create getter and setter method without underscore _
// access getter and setter method without parentheses ()

// parent class
class Person {

	// method
	constructor(name,age) {
		this._name = name;
		this._age = age;
	};

	// getter
	get name() {
		return this._name;
	}

	get age() {
		return this._age;
	};

	// setter
	set name(newName) {
		this._name = newName;
	};

	set age(changeAge) {
		this._age = changeAge;
	};

	intro() {
		return `Hello, my name is ${this._name}\nand i'm ${this._age} years old.`;
	};

};


// child class
class Juliao extends Person{
	
	// method
	constructor(name) {
		super(name, 20); 
	};

	// override method
	// in parent class
	intro() {
		return `it's me ${this._name}!`;
	};

};


const p1 = new Person("Basilio",23);
const juliao1 = new Juliao("Juliao");

// console.log(p1.intro());
// console.log(juliao1.intro());

console.log(p1.name);

p1.name = "Nuno";
// console.log(p1.name);
p1.age = 28;
// console.log(p1.age);

console.log("==================");

const p1Intro = p1.intro();
console.log(p1Intro);

document.getElementById('demo').innerText = juliao1.intro();