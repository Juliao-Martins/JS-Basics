/*
JavaScript Dates Objects
there are 4 ways to create Dates Objects

new Date();
new Date(year, month, day, hours, minutes, seconds, milliseconds);
new Date(milliseconds);
new Date(Date String);
*/


const demo = document.getElementById("demo");
let x;

// x = new Date();
// x = new Date(2001, 6, 17, 15, 0, 59, 59);
// x = new Date(2001, 6, 17, 15, 0, 59);
// x = new Date(2001, 6, 17, 15, 0);
// x = new Date(2001, 6, 17, 15);
// x = new Date(2001, 6, 17);
// x = new Date(2001, 6);
// x = new Date(2001);
// x = new Date(863200000);
// x = new Date("July, 17 2001");

x = new Date();

// demo.innerText = x.toDateString();
// demo.innerText = x.toUTCString();
demo.innerText = x.toISOString();