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
    for(let i = 0; 0 < imageArray.length ; i++){
        let img = document.createElement('img');
        img.src = imageArray[i];
        document.getElementsByClassName("card-front")[i].appendChild(img);
    }
}


function flip(event) {
    let currentTarget = event.currentTarget;
    currentTarget.children[1].style.visibility = "hidden";

}
