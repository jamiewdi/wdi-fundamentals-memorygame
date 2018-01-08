//console.log("Up and running!");

//var cards = ["queen", "queen", "king", "king"];
var cards = [
            {rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
            {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
            {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
            {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}
];

var cardsInPlay = [];
var score = 0;

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      score += 1;
  } else {
      alert("Sorry, try again.");
      score -= 1;
  }
  alert("Current Score: " + score);
};

var flipCard = function() {
  var cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  var cardsToPlay = 2;
  if (cardsInPlay.length === cardsToPlay) {
  checkForMatch();
  }
};

var createBoard = function() {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
};

var reset = function() {
  cardsInPlay.length = 0;
  var imgElements = document.getElementsByTagName("img");
  for(i = 0; i < imgElements.length; i++) {
    imgElements[i].setAttribute("src", "images/back.png");
  }
};

createBoard();

var button = document.querySelector("button");
button.addEventListener("click", reset);
