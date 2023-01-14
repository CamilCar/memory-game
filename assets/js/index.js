let state = {
    flippedCards: 0,
    card1Url: '',
    card2Url: '',
    amountOfCards: 0,
    amountOfCardsTurned: 0,
    score: 0,
}

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

    state.amountOfCards = shuffledArray.length;

    let boardHtml = '';
    for (let i = 0; i < shuffledArray.length; i++) {
        let cardsHtml = `
            <div class="card" onclick="flipCard(event);">
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

function flipCard(event) {
    let currentTarget = event.currentTarget
    if (state.flippedCards === 2) {
        return
    }
    displayCard(currentTarget)
    state.flippedCards++

    let imgSrc = currentTarget.querySelector("img").getAttribute("src")

    if (state.flippedCards === 1) {
        state.card1Url = imgSrc
        return
    }
    if (state.flippedCards === 2) {
        state.card2Url = imgSrc
        if (state.card1Url !== state.card2Url) {
            setTimeout(() => {
                flipBackCards()
                resetTurn();
            }, 1000)
        } else {
            state.amountOfCardsTurned += 2;
            checkIfBoardIsDone();
            resetTurn();
        }
    }

}

function resetTurn() {
    state.flippedCards = 0;
    state.card1Url = "";
    state.card2Url = "";

}

function displayCard(cardElement) {
    cardElement.children[1].style.visibility = "hidden";
}

function flipBackCards() {

    let firstCardImg = document.querySelectorAll(`img[src='${state.card1Url}']`);
    let secondCardImg = document.querySelectorAll(`img[src='${state.card2Url}']`);

    firstCardImg[0].parentElement.nextElementSibling.style.visibility = "visible"
    firstCardImg[1].parentElement.nextElementSibling.style.visibility = "visible"
    secondCardImg[0].parentElement.nextElementSibling.style.visibility = "visible"
    secondCardImg[1].parentElement.nextElementSibling.style.visibility = "visible"
}

function checkIfBoardIsDone() {
    console.log(state)
    let boardIsDone = state.amountOfCards === state.amountOfCardsTurned
    if (boardIsDone) {
        let newScore = state.score+1

        console.log(newScore)
        state.score = newScore
        increaseScore(newScore);

        setTimeout(() => {
            alert("Well done! Play another round?")
            emptyState();
            imagesToBoard();
        }, 250)
    }
}

function emptyState() {
    state.flippedCards = 0
    state.card1Url = ''
    state.card2Url = ''
    state.amountOfCards = 0
    state.amountOfCardsTurned = 0
}

function increaseScore(score) {
    document.getElementById("score").innerText = score
}
