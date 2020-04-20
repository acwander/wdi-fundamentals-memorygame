// Arrays

// All available cards objects
let cards = [
  {
    rank: "queen",
    suite: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suite: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suite: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suite: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  },
];

// Empty array for storing pulled cards
let cardsInPlay = [];

// Functions
// Check for two cards matching function
function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

// Flip card function
function flipCard() {
  let cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suite);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

// Create board function
function createBoard(params) {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}
createBoard();
