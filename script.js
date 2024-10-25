const sounds = {
    kick: new Audio('./Sound/6.mp3'),
    snare: new Audio('./Sound/5.mp3'),
    hihat: new Audio('./Sound/1.mp3'),
    tom1: new Audio('./Sound/2.mp3'),
    tom2: new Audio('./Sound/3.mp3'),
    cymbal: new Audio('./Sound/4.mp3'),
};

const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach(pad => {
    pad.addEventListener('click', () => {
        const soundType = pad.getAttribute('data-sound');
        sounds[soundType].currentTime = 0; // Reset sound to start
        sounds[soundType].play();
    });
});
