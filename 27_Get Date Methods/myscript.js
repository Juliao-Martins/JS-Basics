const demo = document.getElementById("demo");
let x = new Date();
let y;

// demo.innerHTML = x.getFullYear();
// demo.innerHTML = x.getMonth();
// demo.innerHTML = x.getDate();
// demo.innerHTML = x.getHours();
// demo.innerHTML = x.getMinutes();
// demo.innerHTML = x.getSeconds();
// demo.innerHTML = x.getMilliseconds();
// demo.innerHTML = x.getTime();
// demo.innerHTML = x.getDay();
// demo.innerHTML = Date.now();

switch(x.getDay()) {
	case 0:
		y = "sunday!";
		break;
	case 1:
		y = "monday!";
		break;
	case 2:
		y = "tuesday!";
		break;
	case 3:
		y = "wenesday!";
		break;
	case 4:
		y = "thursday!";
		break;
	case 5:
		y = "friday!";
		break;
	case 6:
		y = "saturday!";
		break;
	default:
		y = null;
};

demo.innerHTML = "Today is " + y;