
//declare variables to store array in cards

let card = document.getElementsByClassName('card');
const cards = [...card];

//variable that holds all the cards
const cardDeck =document.getElementByID('deck');

//variable to count moves
let moves =0;
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


