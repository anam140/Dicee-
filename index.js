

var randomNumber1 = Math.floor(Math.random() * 6) +1;
var imgsrc = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
// var image1 = document.getElementByClassName("img1");
image1.setAttribute("src" , imgsrc);



var randomNumber2 = Math.floor(Math.random() *6)+1
var imgsrc2 = "images/dice" + randomNumber2 + ".png" ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , imgsrc2)

if(randomNumber1> randomNumber2){
  document.querySelector("h1").innerHTML =" PLAYER A Wins 🚩"
}
else if(randomNumber1<randomNumber2) {
 document.querySelector("h1").innerHTML =" PLAYER B Wins 🚩" }
else
{
  document.querySelector("h1").innerHTML = "DRAW"
}