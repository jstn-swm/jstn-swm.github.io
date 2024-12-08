let audioControl = document.querySelector('audio');
let audioContainer = document.querySelector('#audioContainer')
let playPauseBtn = document.querySelector('#audioContainer .play-pause');

playPauseBtn.addEventListener('click', togglePlay);

function togglePlay() {
    audioControl.paused ? audioControl.play() : audioControl.pause();
}
audioControl.addEventListener("play", () => {
    audioContainer.classList.add("paused");
});
audioControl.addEventListener("pause", () => {
    audioContainer.classList.remove("paused");
});