/* initiate game */
imagesToBoard();


/* images*/

function imagesToBoard() {
    let imageArray = [
        'assets/images/buckingham-palace.jpeg',
        'assets/images/colosseum.jpeg',
        'assets/images/eiffel-tower.jpeg',
        'assets/images/notre-dame.jpeg',
        'assets/images/taj-mahal.jpeg',
        'assets/images/white-house.jpeg',
    ]
//* Duplicates array and flips the cards */
    let duplicatedArray = [...imageArray, ...imageArray];
    let shuffledArray = shuffleArray(duplicatedArray);
    let boardHtml = ""
    for (let i = 0; i < shuffledArray.length; i++) {
        let cardsHtml = `
            <div class="card" onclick="flip(event);">
                <div class="card-front">
                <img src="${shuffledArray[i]}">
                </div>
                <div class="card-back"></div>
            </div>
        `;
        boardHtml += cardsHtml
    }
    document.getElementById("board").innerHTML = boardHtml
}

function flip(event) {
    let currentTarget = event.currentTarget;
    currentTarget.children[1].style.visibility = "hidden";

}
//* Shuffles the cards/arrays */
function shuffleArray(arrayToShuffle) {
    let currentIndex = arrayToShuffle.length,
        randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arrayToShuffle[currentIndex], arrayToShuffle[randomIndex]] = [
            arrayToShuffle[randomIndex], arrayToShuffle[currentIndex]
        ];
    }

    return arrayToShuffle;
}

let flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })
    state.flippedCards = 0
}

let flipCard = card => {
    state.flippedCards++
}

if(state.flippedCards <= 2) {
    card.classList.add('flipped')
}

if (state.flippedCards === 2) {
    let flippedCards = document.querySelectorAll('.flipped:not(.matched')

    if (flippedCards[0].innerText === flippedCards[1].innertext) {
        flippedCards[0].classList.add('matched')
        flippedCards[1].classList.add('matched')
    }

    setTimeout(() => {
        flipBackCards()
    }, 1000)
}