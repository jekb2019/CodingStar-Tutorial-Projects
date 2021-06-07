const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const closeImgUrl = "./images/close.png";
const openImgUrl = "./images/open.png";


// Buttn Event Handling
btn.addEventListener("mousedown", function() {
    popcat.src = openImgUrl;
    playOpenSound();
});

btn.addEventListener("mouseup", function() {
    popcat.src = closeImgUrl;
    playCloseSound();
});



// Sound
const openSound = new Audio("./sound/sound-open.mp3");
const closeSound = new Audio("./sound/sound-close.mp3");

function playOpenSound() {
    openSound.play();
}

function playCloseSound() {
    closeSound.play();
}