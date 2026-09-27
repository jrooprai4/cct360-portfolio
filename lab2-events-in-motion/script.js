const openbttn = document.getElementById('surprise');
const closebttn = document.getElementById('goBack');


// need if statements to check if the buttons exist on the page first bc both html pages are using the same script
if (openbttn) {
    openbttn.addEventListener('click', () => {
        // opens page2.html in a new window/tab
        window.open('page2.html', '_blank');
    });}

if (closebttn) {
    closebttn.addEventListener('click', () => {
        // close this window/tab
        window.close();
    });}