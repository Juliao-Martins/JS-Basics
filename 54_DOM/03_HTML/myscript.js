// you can change HTML element content with
// innerHTML property

// first find HTML element with id 'myH'
// and 'myImg'
const myH = document.getElementById('myH'),
myImg = document.getElementById('myImg');
// second change HTML element with id 'myH' content to 'Hello, Again!'
myH.innerHTML = "Hello, Again!";

// or you can change or add attribute to HTML element 
// document.getElem...().attribute = 'value'
myH.onclick = function() {
	myH.style = "font-style: oblique; text-decoration: line-through;";
};

myImg.onmouseenter = () => {
	myImg.src = "img/2.jpg";
};

myImg.onmouseleave = () => {
	myImg.src = "img/1.jpg";
};