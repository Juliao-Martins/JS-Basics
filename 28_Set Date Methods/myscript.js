const demo = document.getElementById("demo");

let x = new Date();

// x.setFullYear(2001, 6, 17);
// x.setDate(17);
// x.setMonth(6);
// x.setHours(12);
// x.setMinutes(30);
// x.setSeconds(59);
// x.setMilliseconds(11);
x.setTime(Date.parse("July, 17, 2001"));

demo.innerText = x.toUTCString();