// JavaScript class is not an object.
// class are templates for obeject.

// create class with class keyword, follow className, and curly brackets {}
// inside the class as you know variable are called properties
// and function are called method
class Person {

	// method
	constructor(name, age) {
		// object properties
		this.name = name;
		this.age =age;
	};

	intro() {
		return `Hello, my name is ${this.name} and i'm ${this.age} years old!`;
	};

	getName() {
		return this.name;
	};

	getAge() {
		return this.age;
	};

	setName(newName) {
		this.name = newName;
	};

	setAge(changeAge) {
		this.age = changeAge;
	};

};


// objects
const p1 = new Person("Juliao",20);
const p2 = new Person("Maria",22);
const p3 = new Person("Quintilano",25);

// console.log(p1);

console.log(p1.name);	// access object properties

// reassigned new value to object properties
// but not recomended!
// p1.name = "Mariano";
// console.log(p1.name);

const p2Name = p2.getName();

console.log(p2Name);

p2.setName("Teresinha");
p2.setAge(19);

const p2Intro = p2.intro();
console.log(p2Intro);

window.document.getElementById('demo').innerText = 
p2Intro;