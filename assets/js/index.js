/* initiate game */
imagesToBoard();


/* images */ 

function imagesToBoard() {
    let imageArray = [
        'assets/images/buckingham-palace.jpeg',
        'assets/images/colosseum.jpeg',
        'assets/images/eiffel-tower.jpeg',
        'assets/images/notre-dame.jpeg',
        'assets/images/taj-mahal.jpeg',
        'assets/images/white-house.jpeg',
    ]
    let boardHtml = ""
    for(let i = 0; i < imageArray.length ; i++){
        let cardsHtml = `
            <div class="card" onclick="flip(event);">
                <div class="card-front">
                <img src="${imageArray[i]}">
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
