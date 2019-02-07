
 // Create array that holds all cards
const cardDeck = ["fa-diamond", "fa-paper-plane-o", "fa fa-futbol-o" "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];

// Declare variable to store moves and matches
let moves = 0;
let matches = 0;

// Set first card 
let game_start = false;

// Launch timer object
let timer = new Timer();
timer.addEventListener('secondsUpdated', function (e) {  
 document.querySelector('#timer').html(timer.getTimeValues().toString());
});

// Variable for reset
let reset = document.querySelector('#reset-button').click(resetGame);

//  Append created card html
function createCard(card) {
    document.querySelector('#deck').append(`<li class="card animated"><i class="fa ${card}"></i></li>`);
}

// Generate random cards on the deck
function generateCards() {
    for (let i = 0; i < 2; i++) {
        cardDeck = shuffle(cardDeck);
        cardDeck.forEach(createCard);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// add blank stars
function addBlankStar() {
    document.querySelector('#stars').children()[0].remove();
    document.querySelector('#stars').append('<li><i class="fa fa-star-o"></i></li>');
}
// add initial stars
function addStars() {
    for (var i = 0; i < 3; i++) {
        document.querySelector('#stars').append('<li><i class="fa fa-star"></i></li>');
    }
}
