const demo = document.getElementById("demo");

function myFunction() {
	demo.innerHTML = new Date().toUTCString();
};

// JavaScript can change HTML Style (CSS)
// demo.style.fontSize = "50px";
demo.style.fontFamily = "Comic Neue";

// JavaScript can hide HTML content
// demo.style.display = "none";
// JavaScript can show HTML content
demo.style.display = "block";