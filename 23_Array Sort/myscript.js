let fruits = ["Rasberry","Grape","Apple","Banana"];

console.log(fruits.toString());

fruits.sort();

console.log(fruits.toString());

fruits.reverse();

console.log(fruits.toString());

// create my function like sort() method
function sorting(arr) {
	var temp = 0,
	n = arr.length;
	for(let i = 0; i < n; i++) {
		for(let j = 1; j < (n-i); ++j) {
			if(arr[j-1] > arr[j]) {
				temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			};
		};
	};
};

fruits = ["Watermelon","Strawberry","Orange"];

console.log(fruits.toString());

// call here!
sorting(fruits);

console.log(fruits.toString());

// but the sort() and reverse method CANNOT work with
// numbers to solve this use compared function
let numbs = [13, 1, 0.5, 4, 2];
console.log(numbs);

numbs.sort(function(a,b){ return a - b; }); // ascending
console.log(numbs);
numbs.sort(function(a,b){ return b - a; }); // descending

console.log(numbs);

// random sorting
numbs.sort(function(a,b) { return 0.5 - Math.random(); });
console.log(numbs);

// finding max and min value of an array
// using Math object
let scoreValues = [80.5, -11.9, 2, 4, 8, -99.1, 100];
let big, small;

// console.log(scoreValues);

// function findMax(arr) {
// 	return Math.max.apply(null, arr);
// };

// function findMin(arr) {
// 	return Math.min.apply(null, arr);
// };

// big = findMax(scoreValues);
// console.log(big);
// small = findMin(scoreValues);
// console.log(small);

console.log(scoreValues);

function findMax(arr) {
	var len = arr.length,
	max = -Infinity;
	while(len--) {
		if(arr[len] > max) {
			max = arr[len];
		};
	};
	return max;
};

function findMin(arr) {
	var len = arr.length,
	min = Infinity;
	while(len--) {
		if(arr[len] < min) {
			min = arr[len];
		};
	};
	return min;
};

big = findMax(scoreValues);
small = findMin(scoreValues);

console.log(big);
console.log(small);

// sorting an array object
let notebook = [
	{name:"LenovoX532",launch:2028},
	{name:"AsusE1100",launch:2021},
	{name:"HPYblck99",launch:2030}
];

console.log(notebook);

// notebook.sort(function(a, b) { return a.launch - b.launch; }); ascending

// descending 
// notebook.sort(function(a, b) { return b.launch - a.launch; });

notebook.sort(function(a, b) {
	var x = a.name.toLowerCase(),
	y = b.name.toLowerCase();
	if(x < y) { return -1 };
	if(x > y) { return 0 };
	return 0;
});

console.log(notebook);