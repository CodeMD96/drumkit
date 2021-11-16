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

addEventListener("keypress", (event) => {
    sounds[`${event.key.toLowerCase()}`].load();
    sounds[`${event.key.toLowerCase()}`].play();
});