/*
	element.addEventListener(event, function, useCapture)
	element.removeEventListener(event, function, useCapture)
*/

const demo = document.getElementById('demo'),
myBtn = document.getElementById('myBtn');

/*
demo.addEventListener('click', change);
function change() {
	demo.textContent = "Hello, Again!";
};
*/

window.addEventListener('resize', x);
window.removeEventListener('resize', x);

function x() {
	demo.innerHTML = `width : ${window.innerWidth}<br> height : ${window.innerHeight}`;
};

myBtn.addEventListener('click', changeBg);
// myBtn.removeEventListener('click', changeBg);

colors = ["lightgreen", "orange", "deeppink", "lightblue", "salmon", "darkviolet", "white"];
counter = 0;
function changeBg() {
	const body = document.body;
	if(counter > (colors.length-1)) {
		counter = 0;
	};
	body.style.background = colors[counter];
	counter++;
};

// different event same element
demo.addEventListener('mouseenter', function() { lineTrough(this); });
demo.addEventListener('mouseleave', function() { toNormal(this); });
demo.addEventListener('click', function() { changeFont(this); });

function lineTrough(el) {
	el.style.textDecoration = "line-through";
};

function toNormal(el) {
	el.style.textDecoration = "none";
	el.style.fontFamily = "Comic Neue";
};

function changeFont(el) {
	el.style.fontFamily = "'Jokerman Regular', Arial, sans-serif";
	el.style.textDecoration = "overline";
};