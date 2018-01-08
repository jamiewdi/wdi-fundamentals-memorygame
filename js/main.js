//console.log("Up and running!");

//var cards = ["queen", "queen", "king", "king"];
var cards = [
            {rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
            {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
            {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
            {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}
];

var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
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
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

var reset = function() {
  cardsInPlay.length = 0;
  //for (i = 0; i < cardsInPlay.length; i++) {
    //document.getElementById('img')[i].setAttribute('src', "images/back.png");
    //var board = document.getElementById('img');
    //board.setAttribute('src', "images/back.png");
    //var parent = document.getElementById('game-board');
    //var child = document.getElementById('img');
    //parent.removeChild(child);
    //var board = document.querySelector('game-board');
    //board.parentNode.removeChild(board);
    //createBoard();
};

createBoard();

var button = document.querySelector('button');
button.addEventListener('click', reset);
