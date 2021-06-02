class Person {

	constructor(name) {
		this.name = name;
	};

	static sayHi() {
		return "Hi!";
	};

};


const p1 = new Person("Jack");

console.log(Person.sayHi());
// document.getElementById('demo').innerHTML = Person.sayHi(p1);

// comparing Math and Date object
// Math is static
let x = -5;
console.log(Math.abs(x));

// and Object have a contructor
document.getElementById('demo').innerHTML = new Date("2002-07-17T15:03:59Z").toDateString();