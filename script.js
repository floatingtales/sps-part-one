var randomHand = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "scissors";
  } else if (randomNumber == 1) {
    return "paper";
  } else {
    return "stone";
  }
};

var main = function (input) {
  var playerHand = input.toLowerCase();
  var computerHand = randomHand();
  var output = `you picked ${playerHand}, the computer picks ${computerHand}`;
  if (playerHand == computerHand) {
    output += "<br /> <br /> it's a draw 🤷‍♂️";
  } else if (
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors")
  ) {
    output += "<br /> <br /> player wins! 👍";
  } else {
    output += "<br /> <br /> computer wins! 👎";
  }
  return output;
};
