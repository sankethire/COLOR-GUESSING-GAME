// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
var nos = 6;
var colors = generateRandomColors(nos);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var eb = document.querySelector("#eb");
var hb = document.querySelector("#hb");


eb.addEventListener("click",function(){
	hb.classList.remove("selected");
	eb.classList.add("selected");
	nos =3;
	colors = generateRandomColors(nos);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
			{squares[i].style.backgroundColor = colors[i];}
		else {squares[i].style.display = "none";}
	}
});

hb.addEventListener("click",function(){
	hb.classList.add("selected");
	eb.classList.remove("selected");
	nos = 6;
	colors = generateRandomColors(nos);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});

reset.addEventListener("click",function(){
	colors = generateRandomColors(nos);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"

	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT!";
			reset.textContent = "Play Again?" ; 
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN!";
		}	
	});
}


function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}