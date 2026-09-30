const openbttn = document.getElementById('surprise');
const closebttn = document.getElementById('goBack');

// need if statements to check if the buttons exist on the page first bc both html pages are using the same script
if (openbttn) {
    openbttn.addEventListener('click', () => {
        // opens surprise.html in a new window/tab
        window.open('surprise.html', '_blank');
    });}

if (closebttn) {
    closebttn.addEventListener('click', () => {
        // close this window/tab
        window.close();
    });}

// function to switch the image when the button is clicked
function switchImage() {
    document.getElementById('imageSwitch').src = 'images/thumbs-up-cat.png'; // source is linked in sources.md
    document.getElementById('imageSwitch').alt = 'thumbs up cat';
    document.getElementById('imageSwitch').height = 200;
}

// shows an alert every 10 seconds
setInterval(function() {
    alert("peekabooo :)");
}, 10000); 