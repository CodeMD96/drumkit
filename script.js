const sounds = {
    a : new Audio('sounds/clap.wav'),
    s : new Audio('sounds/hihat.wav'),
    d : new Audio('sounds/kick.wav'),
    f : new Audio('sounds/openhat.wav'),
    g : new Audio('sounds/boom.wav'),
    h : new Audio('sounds/ride.wav'),
    j : new Audio('sounds/snare.wav'),
    k : new Audio('sounds/tom.wav'),
    l : new Audio('sounds/tink.wav'),
};

addEventListener("keypress", (e) => {
    sounds[`${e.key.toLowerCase()}`].currentTime = 0;
    sounds[`${e.key.toLowerCase()}`].play();
});