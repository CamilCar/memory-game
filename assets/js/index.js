/* initiate game */
imagesToBoard();

let state = {
    flippedCards: 0,
    card1Url: '',
    card2Url: ''
}
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

function flipCard(event){
    let currentTarget = event.currentTarget
    displayCard(currentTarget)

    state.flippedCards++
    let imgSrc = currentTarget.querySelector("img").getAttribute("src")

    if (state.flippedCards === 1) {
        state.card1Url = imgSrc
        return
    }
    if(state.flippedCards === 2) {
        state.card2Url = imgSrc
        if (state.card1Url !== state.card2Url){
            setTimeout(() => {
                flipBackCards()
                emptyState();
            }, 1000)
        } else {
            emptyState();
        }
    }

}
function emptyState(){
    state.flippedCards = 0;
    state.card1Url = "";
    state.card2Url = "";

}

function displayCard(cardElement){
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
    

