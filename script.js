//your JS code here. If required.
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        let soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

document.querySelector('.stop').addEventListener('click', () => {
    stopSound();
});

let audio = new Audio();

function playSound(soundFile) {
    if (audio.src !== soundFile) {
        audio.src = `sounds/${soundFile}`;
        audio.play();
    } else {
        audio.play();
    }
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0; // Reset to the start of the sound
}
