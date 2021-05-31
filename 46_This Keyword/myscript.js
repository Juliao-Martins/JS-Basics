// In method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element tha received event.

// console.log(this);

function myFunction() {
	return this;
};

// console.log(myFunction());

// this

const person = {
	firstName:"Juliao",
	lastName:"Martins",
	fullName: function() {
		return this.firstName.concat(" ", this.lastName);
	}
};

const name = person.fullName();
console.log(name);

const intro = {
	name: function() {
		return this.name;
	},
	hobby: function() {
		return this.hobby;
	}
};

const ado = {
	name:"Ado Soares",
	hobby:"Code</>"
};

const adoName = intro.name().call(ado);
const adoHobby = intro.hobby().call(ado);
console.log(adoName);
console.log(adoHobby);