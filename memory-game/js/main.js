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
// Check for two cards matching fucntion
function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  }
}

// Flip card function
function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suite);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

// Call functions
flipCard(0);
flipCard(2);
