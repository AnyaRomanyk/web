const cards = document.querySelectorAll('.card');
const faces = [
    'images/cat.png',
    'images/cow.png',
    'images/dog.png',
    'images/fox.png',
    'images/penguin.png',
    'images/pig.png',
    'images/cat.png',
    'images/cow.png',
    'images/dog.png',
    'images/fox.png',
    'images/penguin.png',
    'images/pig.png'
];

const maxScore = 6;
let score = 0,
    firstCard = null,
    secondCard = null,
    boardDisabled = true,
    moves = 0,
    sec = 0,
    min = 0,
    interval = null;

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function start() {
    score = 0;
    moves = 0;
    sec = 0;
    min = 0;
    document.querySelector('.moves span').innerText = '0';
    document.querySelector('.timer span').innerText = '00:00';
    cards.forEach(card => card.classList.remove('show'));
    shuffle(faces);
    cards.forEach((card, i) => card.querySelector('.back img').src = faces[i]);
    boardDisabled = false;
    startTimer();
}

function flipCard() {
    if (boardDisabled || this.classList.contains('show')) return;

    if (!firstCard) {
        firstCard = this;
        this.classList.toggle('show');
    } else {
        if (!secondCard) {
            moves += 1;
            document.querySelector('.moves span').innerText = moves;
            secondCard = this;
            this.classList.toggle('show');

            if (firstCard.querySelector('img').src === secondCard.querySelector('img').src) {
                score += 1;
                firstCard = null;
                secondCard = null;
                
                if (score === maxScore) {
                    clearInterval(interval);
                    interval = null;
                    document.querySelector('.start button').innerText = 'New Game';
                }
            } else {
                boardDisabled = true;
                setTimeout(() => {
                    firstCard.classList.remove('show');
                    secondCard.classList.remove('show');
                    firstCard = null;
                    secondCard = null;
                    boardDisabled = false;
                }, 1000);
            }
        }
    }
}

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            sec += 1;
            if (sec === 60) {
                min += 1;
                sec = 0;
            }
            document.querySelector('.timer span').innerText = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
        }, 1000);
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

document.querySelector('.start button').onclick = () => {
    document.querySelector('.start button').innerText = 'Restart';
    start();
};