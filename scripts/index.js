let button = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let hide = document.querySelector('.modal__close-button');
let submit = document.querySelector('.modal__form-submit');

button.addEventListener('click', function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    hide.style.display = 'block';
});

hide.addEventListener('click', function() {
    modal.style.display = 'none';
    hide.style.display = 'none';
    overlay.style.display = 'none';
});

submit.addEventListener('click', function() {

})

