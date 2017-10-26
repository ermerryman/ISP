function openFactorial() {
	document.getElementById('factorial').style.display = "block";
	document.getElementById('validator').style.display = "none";
	document.getElementById('animation').style.display = "none";
}

function openValidator() {
	document.getElementById('factorial').style.display = "none";
	document.getElementById('validator').style.display = "block";
	document.getElementById('animation').style.display = "none";
}

function openAnimation() {
	document.getElementById('factorial').style.display = "none";
	document.getElementById('validator').style.display = "none";
	document.getElementById('animation').style.display = "block";
}