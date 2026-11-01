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

// play, pause, and reset buttons, and progress bars for the videos

const vid1 = document.getElementById('vid1');
const vid2 = document.getElementById('vid2');
const vid3 = document.getElementById('vid3');

const play1 = document.getElementById('play1');
const play2 = document.getElementById('play2');
const play3 = document.getElementById('play3');

const pause1 = document.getElementById('pause1');
const pause2 = document.getElementById('pause2');
const pause3 = document.getElementById('pause3');

const reset1 = document.getElementById('reset1');
const reset2 = document.getElementById('reset2');
const reset3 = document.getElementById('reset3');


play1.addEventListener('click', () => playVid(vid1));
play2.addEventListener('click', () => playVid(vid2));
play3.addEventListener('click', () => playVid(vid3));

pause1.addEventListener('click', () => pauseVid(vid1));
pause2.addEventListener('click', () => pauseVid(vid2));
pause3.addEventListener('click', () => pauseVid(vid3));

reset1.addEventListener('click', () => resetVid(vid1));
reset2.addEventListener('click', () => resetVid(vid2));
reset3.addEventListener('click', () => resetVid(vid3));


function playVid(video) {
    video.play();
}

function pauseVid(video) {
    video.pause();
}

function resetVid(video) {
    video.currentTime = 0;
    video.pause();
}