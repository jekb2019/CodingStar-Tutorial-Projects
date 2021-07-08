// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
// The two images of the Pop Cat
const openMouthImg = "./images/open.png";
const closeMouthImg = "./images/close.png";
// The two poping sounds
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// Button Event Handling for mouse clicks
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Button Event Handling for touch screens (for mobiles and tablets)
btn.addEventListener("touchstart", function(e){
    e.preventDefault(); 
    openMouth();
});

btn.addEventListener("touchend", function(e){
    e.preventDefault();
    closeMouth();
});

// The functions which will perform the cool stuff
function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}