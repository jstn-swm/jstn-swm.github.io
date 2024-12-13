let computedStyles = getComputedStyle(document.documentElement);
let background = computedStyles.getPropertyValue('--background').trim();
let secondary = computedStyles.getPropertyValue('--highlight').trim();
let audioControl = document.querySelector('audio');
let audioContainer = document.querySelector('#audioContainer')
let playPauseBtn = document.querySelector('#audioContainer .play-pause');
let volumeSlider = document.querySelector('#Volume');
let trackTime = document.querySelector('#TrackTime');
let trackPlayTime = document.querySelector('#timeline');
let volumeImg = document.querySelector('#volumeIcon');

let mute = false;
let vol = audioControl.volume;

function setImage(value) {
    if(value <= 10)
        volumeImg.setAttribute('class', 'fa-solid fa-volume-off');
    if(value >= 50)
        volumeImg.setAttribute('class', 'fa-solid fa-volume-high');
    if(value < 50 && (value > 10 && value > 0))
        volumeImg.setAttribute('class', 'fa-solid fa-volume-low');
    if(value <= 0)
        volumeImg.setAttribute('class', 'fa-solid fa-volume-xmark');
}
volumeImg.addEventListener('click', () => {
    if(!mute) {
        vol = audioControl.volume*100;
        audioControl.volume = 0;
        mute = true;
    }
    else {
        audioControl.volume = vol/100;
        mute = false;
    }
    setImage(audioControl.volume*100);
});

volumeSlider.addEventListener('input', function(e) {
    let value = e.currentTarget.value;
    setImage(value);
    audioControl.volume = value / 100;
    let gradient = `linear-gradient(to top, ${secondary} ${value}%, ${background} ${value}%)`;
    volumeSlider.style.background = gradient;
});

function formatTime(seconds) {
    if(isNaN(seconds))
        return `0:00`;
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? `0` : ''}${sec}`
}

audioControl.addEventListener('timeupdate', () => {
    trackTime.value = (audioControl.currentTime / audioControl.duration) * 100;
    trackPlayTime.innerHTML = `${formatTime(audioControl.currentTime)}`;
    trackTime.style.background = `linear-gradient(to right, ${secondary} ${trackTime.value}%, #FFFFFF ${trackTime.value}%)`;
});



trackTime.addEventListener('input', function(e) {
    audioControl.currentTime = e.currentTarget.value / 100 * audioControl.duration;
});

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