/*
let d = new Date();

// d.setDate(28);

switch(d.getDay()) {
	case 0:
		console.log("Today is sunday!");
		break;
	case 1:
		console.log("Today is monday!");
		break;
	case 2:
		console.log("Today is tuesday!");
		break;
	case 3:
		console.log("Today is wenesday!");
		break;
	case 4:
		console.log("Today is thursday!");
		break;
	case 5:
		console.log("Today is friday!");
		break;
	case 6:
		console.log("Today is saturday!");
		break;
	default:
		console.log("not found day!");
};
*/

const estudent = document.getElementById("estudent"),
demo = document.getElementById("demo");

function myFunction() {
	let x = estudent.value;
	x = x.toLowerCase().trim();
	switch(x) {
		case "maria":
		case "antonio":
		case "juliao":
		case "basilio":
		case "teresinha":
			demo.innerHTML = `"${x}": present! teacher`
			break;
		default:
			demo.innerHTML = `${x} is absent!`
	};
};