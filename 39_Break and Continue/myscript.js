let demo = document.getElementById("demo"),
txt = "";

// for(let i = 0; i <= 9; i++) {

// 	if(i === 5) {
// 		// break;
// 		// continue;
// 	};

// 	console.log("The number is " + i + "!");
// };

let i = 15;
while(i >= 8) {
	i--;

	if(i === 11) {
		// break;
		continue;
	};

	console.log("The Number is " + i + "!");
};

const fruits = ["Banana","Pineapple","Pomegranate","Rouseapple","Apple","Orange"];
i = 0;
let len = fruits.length;

for(; i < len; i++) {

	// if(i === 3) {
	// 	break;
	// };

	if(fruits[i] === "Apple") {
		continue;
	};

	txt += fruits[i] + "<br>";
};

demo.innerHTML = txt;

console.log("=================");

// break statement can break some block of code
list : {
	console.log(fruits[0]);
	console.log(fruits[1]);
	console.log(fruits[2]);
	break list;
	console.log(fruits[3]);
	console.log(fruits[4]);
};