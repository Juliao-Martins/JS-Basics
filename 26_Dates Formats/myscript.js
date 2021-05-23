const demo = document.getElementById("demo");

/*
Dates Formats
ISO		yyyy-mm-dd	or "2001-07-17"
Short	mm/dd/yyyy  or "07/17/2001"
Long	mm, dd yyyy or "July, 17 2001"
*/

let x;

// ISO Formats
// x = new Date("2001-07-17T13:00:59Z");
// x = new Date("2001-07");
// Short Formats
// x = new Date("07/17/2001 13:00:59");
// x = new Date("07/17/2001");
// x = new Date("07/17");
// Long Formats
// x = new Date("July, 17, 2001, 18:00:19");
// x = new Date("July, 17");

// parse to get millisecond of date
// x = Date.parse("2001-07-17T14:19:20Z");
// console.log(x);

x = new Date(995379560000);

demo.innerText = x;