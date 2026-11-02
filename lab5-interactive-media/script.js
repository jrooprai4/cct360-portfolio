// clicking on the dialog tag takes the user to the website and starts the background audio

const dialog = document.getElementById('enter');
const dialogDiv = document.getElementById('dialog-div');
const audio = document.getElementById('audio');

function showDialog() {
    dialog.showModal();

    dialogDiv.addEventListener('click', () => {
        audio.play();
        dialog.close();
    });
}

showDialog();


// ----------------------------------------------------------------------------------------------


// play/pause and reset buttons, and progress bars for the videos

// helper function to format seconds into mm:ss format
function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";  // if seconds is not a number, return 0
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// list of vid containers
const containers = document.querySelectorAll('.vid-container');

// loop through each vid container
containers.forEach((container) => {
    // elements strictly inside this specific container
    const video = container.querySelector('.videos');
    const playBtn = container.querySelector('.play');
    const resetBtn = container.querySelector('.reset');
    const progressBar = container.querySelector('.progress-slider');
    const timeDisplay = container.querySelector('.time-display');

    // play/pause button
    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playBtn.textContent = 'Pause';
        } else {
            video.pause();
            playBtn.textContent = 'Play';
        }
    });

    // reset button
    resetBtn.addEventListener('click', () => {
        video.pause();  // stops playback
        video.currentTime = 0;  // resets video's time to 0
        progressBar.value = 0;  // resets progress bar to 0
        playBtn.textContent = 'Play';  // resets play button to say play
    });

    // initialize progress bar's max value and time display when video metadata is loaded
    video.addEventListener('loadedmetadata', () => {
        progressBar.max = Math.floor(video.duration);
        timeDisplay.textContent = `${formatTime(0)} / ${formatTime(video.duration)}`;
    });

    // update progress bar and time display as video plays (if user is not dragging the bar)
    video.addEventListener('timeupdate', () => {
        if (!progressBar.classList.contains('is-dragging')) {  // if progress bar is not being dragged
            progressBar.value = Math.floor(video.currentTime);  // update bar to current time
        }
        timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    });

    // update progress bar and time display as user drags the slider
    progressBar.addEventListener('input', () => {
        progressBar.classList.add('is-dragging');
        timeDisplay.textContent = `${formatTime(progressBar.value)} / ${formatTime(video.duration)}`;
    });

    // update video current time once user releases slider
    progressBar.addEventListener('change', () => {
        progressBar.classList.remove('is-dragging');
        video.currentTime = progressBar.value;
    });
});