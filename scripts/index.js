let button = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.modal__close-icon');
let submit = document.querySelector('.modal__form-submit');

button.addEventListener('click', function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    close.style.display = 'block';
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
    close.style.display = 'none';
});

submit.addEventListener('click', function() {
    
})

