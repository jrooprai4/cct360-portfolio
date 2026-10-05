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