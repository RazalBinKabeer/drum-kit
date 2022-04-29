let btn = document.querySelectorAll(".drum");

let audioTom1 = new Audio("./sounds/tom-1.mp3");
let audioTom2 = new Audio("./sounds/tom-2.mp3");
let audioTom3 = new Audio("./sounds/tom-3.mp3");
let audioTom4 = new Audio("./sounds/tom-4.mp3");
let audioSnare = new Audio("./sounds/snare.mp3");
let audioKick = new Audio("./sounds/kick-bass.mp3");
let audioCrash = new Audio("./sounds/crash.mp3");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        if (i === 0) {
            audioTom1.play();
        } else if (i === 1) {
            audioTom2.play();
        } else if (i === 2) {
            audioTom3.play();
        } else if (i === 3) {
            audioTom4.play();
        } else if (i === 4) {
            audioSnare.play();
        } else if (i === 5) {
            audioCrash.play();
        } else if (i === 6) {
            audioKick.play();
        }
    });
}

window.addEventListener("keypress", (event) => {
    if (event.key === "w") {
        audioTom1.play();
    } else if (event.key === "a") {
        audioTom2.play();
    } else if (event.key === "s") {
        audioTom3.play();
    } else if (event.key === "d") {
        audioTom4.play();
    } else if (event.key === "j") {
        audioSnare.play();
    } else if (event.key === "k") {
        audioCrash.play();
    } else if (event.key === "l") {
        audioKick.play();
    }
});
