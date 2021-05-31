// Javascript Classes are not object
// Classes are templates for object

// templates
class Person {
	// methods
	constructor(name, age) {
		this.name = name;
		this.age = age;
	};

	getAge() {
		return this.age;
	};

	getName() {
		return "Hello, im " + this.name;
	};

	setName(newName) {
		this.name = newName;
	};

};

// objects
const p1 = new Person("Juliao", 20);
const p2 = new Person("Basilio", 22);
const p3 = new Person("Joaquim", 25);
const p4 = new Person("Helena", 23);

const juliaoAge = "i'm " + p1.getAge() + " years old.";
console.log(juliaoAge);

p1.setName("Ado");

console.log(p1.getName());

document.getElementById('demo').innerHTML = p1.getName();