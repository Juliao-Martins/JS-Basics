const demo = document.getElementById("demo"),
words = "Software Engineer!",
cars = ["Volvo","Ferarry","BMW","Toyota"];

let txt = "";

// Loop For of in string!
for(const i of words) {
	console.log(i);
	txt += i + "<br>";
};

demo.innerHTML = txt;

// Loop For of in Array 
for(const i of cars) {
	console.log(i);
};