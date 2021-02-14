let button = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

button.addEventListener('click', function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
});