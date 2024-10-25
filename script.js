const sounds = {
    kick: new Audio('./6.mp3'),
    snare: new Audio('./5.mp3'),
    hihat: new Audio('./1.mp3'),
    tom1: new Audio('./2.mp3'),
    tom2: new Audio('./3.mp3'),
    cymbal: new Audio('./4.mp3'),
};

const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach(pad => {
    pad.addEventListener('click', () => {
        const soundType = pad.getAttribute('data-sound');
        sounds[soundType].currentTime = 0; // Reset sound to start
        sounds[soundType].play();
    });
});
