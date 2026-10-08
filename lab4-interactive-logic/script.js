// 1. using dialog to get user input on which option to display
const dialog = document.getElementById('confirm');
const option1Btn = document.getElementById('option1btn');
const option2Btn = document.getElementById('option2btn');

function showDialog() {
    dialog.showModal();

    option1Btn.addEventListener('click', () => {
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option2').style.display = 'none';
        dialog.close();
    });

    option2Btn.addEventListener('click', () => {
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'block';
        dialog.close();
    });
}

showDialog();

// ----------------------------------------------------------------------------------------------

// 2. using text user input that dynamically updates --> password checker

const input = document.getElementById('passwordInput');
const strength = document.getElementById('strength');

input.addEventListener('input', () => {
    const password = input.value; // the actual thing entered by the user
    let score = 0;

    if (password.length >= 8) {
        score++;
    }
    if (/[A-Z]/.test(password)) {
        score++;
    }
    if (/[a-z]/.test(password)) {
        score++;
    }
    if (/[0-9]/.test(password)) {
        score++;
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~` ]/.test(password)) {
        score++;
    }

    // update the strength display based on the score
    if (score === 0) { // nothing entered
        strength.textContent = 'none';
    }
    else if (score <= 2) { // 1 or 2 of the above conditions are true
        strength.textContent = 'weak👎';
    }
    else if (score === 3) { // 3 of the above conditions are true
        strength.textContent = 'getting there...';
    }
    else if (score === 4) { // 4 of the above conditions are true
        strength.textContent = 'strong!💪';
    }
    else { // all the conditions above are true
        strength.textContent = 'even stronger!!💪💪';
    }
});

// ----------------------------------------------------------------------------------------------

// 3. using user's mouse position to toggle div visibility on and off

const disco = document.getElementById('disco');

disco.addEventListener('mousemove', function (event) {
    const rect = disco.getBoundingClientRect(); // to get the starting position of the disco div

    // for dynamic disco width and height
    const discoWidth = rect.width;
    const discoHeight = rect.height;

    // mouse position relative to disco
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const box1 = document.getElementById('purplebox1');
    const box2 = document.getElementById('pinkbox1');
    const box3 = document.getElementById('bluebox');
    const box4 = document.getElementById('redbox');
    const box5 = document.getElementById('purplebox2');
    const box6 = document.getElementById('pinkbox2');

    // show or hide the boxes based on the x position of the mouse
    // dynamic boundary calculation

    // if mouse in box1
    if ((mouseX < discoWidth / 3) && (mouseY < discoHeight / 2)) {
        box1.style.visibility = 'visible';
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'hidden';
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'hidden';
    } 
    // if mouse in box2
    else if (((mouseX >= discoWidth / 3) && (mouseX < (discoWidth / 3) * 2)) && (mouseY < discoHeight / 2)) {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'visible';
        box3.style.visibility = 'hidden';
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'hidden';
    } 
    // if mouse in box3
    else if (((mouseX >= (discoWidth / 3) * 2) && (mouseX < discoWidth)) && (mouseY < discoHeight / 2)) {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'visible';
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'hidden';
    } 
    // if mouse in box4
    else if ((mouseX < discoWidth / 3) && ((mouseY >= discoHeight / 2) && (mouseY < discoHeight))) {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'hidden';
        box4.style.visibility = 'visible';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'hidden';
    } 
    // if mouse in box5
    else if (((mouseX >= discoWidth / 3) && (mouseX < (discoWidth / 3) * 2)) && ((mouseY >= discoHeight / 2) && (mouseY < discoHeight))) {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'hidden';
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'visible';
        box6.style.visibility = 'hidden';
    } 
    // if mouse in box6
    else if (((mouseX >= (discoWidth / 3) * 2) && (mouseX < discoWidth)) && ((mouseY >= discoHeight / 2) && (mouseY < discoHeight))) {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'hidden';
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'visible';
    } 
    // otherwise
    else {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'hidden';
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'hidden';
    }
});