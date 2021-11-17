const buttons = document.getElementsByTagName("button");

const sounds = {
    KeyA : new Audio('sounds/clap.wav'),
    KeyS : new Audio('sounds/hihat.wav'),
    KeyD : new Audio('sounds/kick.wav'),
    KeyF : new Audio('sounds/openhat.wav'),
    KeyG : new Audio('sounds/boom.wav'),
    KeyH : new Audio('sounds/ride.wav'),
    KeyJ : new Audio('sounds/snare.wav'),
    KeyK : new Audio('sounds/tom.wav'),
    KeyL : new Audio('sounds/tink.wav'),
};

const keys = Object.keys( sounds );

addEventListener("keypress", (e) => {
    sounds[`${e.code}`].currentTime = 0;
    sounds[`${e.code}`].play();
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () =>{
        sounds[keys[i]].currentTime = 0;
        sounds[keys[i]].play();
    });
};