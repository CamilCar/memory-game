
let img = document.createElement('img');
img.style = {

  height: '10%',
  width: '10%'
}; 
img.src = 'assets/images/buckingham-palace.jpeg';
document.getElementsByClassName("card-front")[0].appendChild(img);

function flip(event) {
    let currentTarget = event.currentTarget;
    currentTarget.children[1].style.visibility = "hidden";

}
