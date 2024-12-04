const gameContainer = document.getElementById('game-container');
const restartButton = document.getElementById('restart-button');

let cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCards = 0;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card', 'hidden');
    card.dataset.value = value;
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.remove('hidden');
    this.textContent = this.dataset.value;

    if(!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        matchedCards += 2;
        resetBoard();
        if (matchedCards === cardValues.length) {
            setTimeout(() => alert('You found all cards!'), 500); 
        }
    } else {
        setTimeout(() => {
            firstCard.classList.add('hidden');
            secondCard.classList.add('hidden');
            resetBoard();
        }, 1000)
    }
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function startGame() {
    matchedCards = 0;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    gameContainer.innerHTML = '';
    shuffle(cardValues);
    cardValues.forEach(value => {
        const card = createCard(value);
        gameContainer.appendChild(card);
    })
}

restartButton.addEventListener('click', startGame)
startGame();
