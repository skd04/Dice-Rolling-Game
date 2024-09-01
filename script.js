function rollDice() {
  // Player One.

  // Create Randome Number to call the images randomly.
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  // Pick out random image between dice1 to dice.
  var randomImage1 = "./images/dice" + randomNumber1 + ".png";

  // Update the image source.
  document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1);

  // Player Two.

  // Create Randome Number to call the images randomly.
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Pick out random image between dice1 to dice.
  var randomImage2 = "./images/dice" + randomNumber2 + ".png";

  // Update the image source.
  document.getElementsByClassName("img2")[0].setAttribute("src", randomImage2);

  // Check who win the shot using Conditional Statement.
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
  }
}