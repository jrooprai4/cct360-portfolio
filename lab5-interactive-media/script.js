// clicking on the dialog tag takes the user to the website and starts the background audio
const dialog = document.getElementById('enter');
const dialogDiv = document.getElementById('dialogdiv');
const audio = document.getElementById('audio');

function showDialog() {
    dialog.showModal();

    dialogDiv.addEventListener('click', () => {
        audio.play();
        dialog.close();
    });
}

showDialog();