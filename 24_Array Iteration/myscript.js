let number1, number2;

number1 = [17, 20, 19, -0.5, 1, 2];
console.log(number1);

// let a = "";
// number1.forEach(x);
// function x(value, index, array) {
// 	a += "" + value + "\n";
// };
// console.log(a);

// number2 = number1.map(x);
// function x(value, index, array) {
// 	return value * 2;
// };

// number2 = number1.filter(x);
// function x(value, index, array) {
// 	return value > 8;
// };

// number2 = number1.reduce(x);
// function x(total, value, index, array) {
// 	return total + value;
// };

// number2 = number1.reduceRight(x);
// function x(total, value, index, array) {
// 	return total + value;
// };

// number2 = number1.every(x);
// function x(value, index, array) {
// 	return value > 0;
// };

// number2 = number1.some(x);
// function x(value, index, array) {
// 	return value > 8;
// };

// number2 = number1.find(x);
// function x(value, index, array) {
// 	return value > 18;
// };

number2 = number1.findIndex(x);
function x(value, index, array) {
	return value > 15;
};

console.log(number2);

number2 = number1.indexOf(20);
console.log(number2);