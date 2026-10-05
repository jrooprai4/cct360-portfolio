const buttons = document.querySelectorAll('.toggle'); // select all buttons with class 'toggle'
const sections = document.querySelectorAll('.content'); // select all sections with class 'content'

// looping through the buttons and listening for a click
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target'); // get the id (data-target) that this button points to
        const targetSection = document.getElementById(targetId); // get that section by its id

        const isOpen = targetSection.style.display === 'block'; // check if this section is already open
        // ^ '===' is strict equality --> checks value and data type ^

        // closing all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // if the section wasn't open already, open it
        if (!isOpen) {
            targetSection.style.display = 'block';
        }
    });
});

// note: the difference b/w my version for showing the sequences vs the one given (img_seq_buttons) is that mine just hides 
// and unhides the divs, whereas the given one changes the source of the images

// -----------------------------------------------------------------------------------------------------------------------

// sequence 1 - click each image to reverse the sequence
const morning1 = document.getElementById('morning1');
const afternoon1 = document.getElementById('afternoon1');
const evening1 = document.getElementById('evening1');
const night1 = document.getElementById('night1');

// functions to reverse the images
function reverseMorning() {
    morning1.src = 'images/night.png';
}

function reverseAfternoon() {
    afternoon1.src = 'images/evening.png';
}

function reverseEvening() {
    evening1.src = 'images/afternoon.png';
}

function reverseNight() {
    night1.src = 'images/morning.png';
}

// click event listeners for each image
morning1.addEventListener('click', reverseMorning);
afternoon1.addEventListener('click', reverseAfternoon);
evening1.addEventListener('click', reverseEvening);
night1.addEventListener('click', reverseNight);

// -----------------------------------------------------------------------------------------------------------------------

// sequence 2 - randomized clicks
const morning2 = document.getElementById('morning2');
const afternoon2 = document.getElementById('afternoon2');
const evening2 = document.getElementById('evening2');
const night2 = document.getElementById('night2');
const images = ['images/morning.png', 'images/afternoon.png', 'images/evening.png', 'images/night.png'];

// functions to randomize the images
function randomizeMorning() {
    const index = Math.floor(Math.random() * images.length); // get a random index
    morning2.src = images[index];
}

function randomizeAfternoon() {
    const index = Math.floor(Math.random() * images.length); // get a random index
    afternoon2.src = images[index];
}

function randomizeEvening() {
    const index = Math.floor(Math.random() * images.length); // get a random index
    evening2.src = images[index];
}

function randomizeNight() {
    const index = Math.floor(Math.random() * images.length); // get a random index
    night2.src = images[index];
}

// click event listeners for each image
morning2.addEventListener('click', randomizeMorning);
afternoon2.addEventListener('click', randomizeAfternoon);
evening2.addEventListener('click', randomizeEvening);
night2.addEventListener('click', randomizeNight);