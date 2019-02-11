
//declare variables to store array in cards

let card = document.getElementsByClassName('card');
const cards = [...card];

//variable that holds all the cards
const cardDeck = document.getElementById('deck');

//variable to count moves
let moves = 0;
let count = document.querySelector('.moves');

// variable to store stars list
const stars = document.querySelectorAll('.fa-star');
let threeStars = document.querySelectorAll('.stars li');

// variable for matched cards
let matchedCards = document.getElementsByClassName('match');

//variable for modal
let modal = document.getElementByID('modal');


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
 

// Initializing Start game function when browser window is loaded

window.onload = startGame();
function startGame() {
        //a new deck of cards is shuffled for every game
    let shuffleCards = shuffle(cards);
    for (let i = 0; i < shuffleCards.length; i++) {
        cardDeck.innerHTML = "";
        [].forEach.call(cards, function(item){
            cardDeck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
        // moves is set to 0
    moves = 0;
    counter.innerHTML = moves;
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.color = "FFD700";
        stars[i].style.visibility = "visible";
    }
        //timer is set to 0
    second = 0;
    minute = 0;
    hour = 0;
    let timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}

/*
	Moves function that counts the number of moves the player took
	Star-rating changes depending on the number of moves
*/
function movesCounter() {
moves++;
counter.innerHTML = moves;
if (moves == 1) {
      second = 0;
      minute = 0;
      hour = 0;
      startTimer();
}
    // star rating changes as the game continue
    if (moves > 8 && moves < 16) {
        for (let i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 18) {
    for (let i = 0; i < 3; i++) {
        if (i > 0) {
                stars[i].style.visibility = "collapse";
            }
        }
    }
}

