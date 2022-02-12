// Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSource1 = "images/" + "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll(".dice img")[0].setAttribute("src", imageSource1);


// Player 2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll(".dice img")[1].setAttribute("src", imageSource2);


// result
// var result = document.querySelector("h1").innerHTML;
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆Player 1 wins";
    // result = "🏆Player 1 wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins🏆";
    // result = "Player 2 wins🏆";
}else{
    document.querySelector("h1").innerHTML = "Draw!!";
    // result = "Draw!!";
}