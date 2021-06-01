// Searching for (and fixing) errors in programming code is called debugging.
const demo = document.getElementById('demo');

var x = 5;
var y = 5;
var z = x * y;
// debugger;

demo.innerHTML = z;

// you can use console.log() to display
// JavaScript values in the debugger window
x = 10;
y = 10;
z = x % y;
console.log(`${x} % ${y} = ${z}`); 
console.warn(`${x} % ${y} = ${z}`);
console.error(`${x} % ${y} = ${z}`);

/*
Normally, you activate debuggin in your browser with F12, and select "Console" in the debugger menu.

otherwise follow these steps:

NOTE: i'm use Google Chrome!
Chrome
	=>	Open the browser.
	=>	From the menu, select "More tools".
	=>	From tools, choose "Developer tools".
	=> Finally, select Console.

*/