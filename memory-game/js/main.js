// Arrays
let cards = ["queen", "queen", "king", "king"]; // All available cards
let cardsInPlay = []; // Empty array for storing pulled cards

// Functions
function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  }
}

function flipCard(cardID) {
  console.log("User flipped " + cards[cardID]);
  cardsInPlay.push(cards[cardID]);
  checkForMatch();
}
// Call functions
flipCard(0);
flipCard(1);
