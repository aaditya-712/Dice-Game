//for image 1
var randomNumber1 = (Math.floor(Math.random()*6) + 1);
var randomDiceImage = "dice" +randomNumber1+ ".png";
var randomImageSource = "images/" +randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//for image 2
var randomNumber2 = (Math.floor(Math.random()*6) + 1);
var randomDiceImage2 = "dice" +randomNumber2+ ".png";
var randomImageSource2 = "images/" +randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//to change h1 to announce winner
if(randomNumber1 == randomNumber2) {
  var winner = document.querySelector("h1").innerHTML = "Draw Match";
}
else if(randomNumber1 > randomNumber2) {
  var winner = document.querySelector("h1").innerHTML = "Player 1 is winner";
}
else {
  var winner = document.querySelector("h1").innerHTML = "Player 2 is Winner";
}
