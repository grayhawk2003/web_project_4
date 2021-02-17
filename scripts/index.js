let button = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.modal__close-button');
let submit = document.querySelector('.modal__form-submit');

button.addEventListener('click', function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    closeButton.style.display = 'none';
    overlay.style.display = 'none'
});

submit.addEventListener('click', function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    closeButton.style.display = 'none';
    
})

/*let form = document.querySelector('.modal__form');*/





function formInputName() {
    let formName = document.querySelector('.modal__form-name');
    let formOccupation = document.querySelector('modal__form-occupation');
    let profileName = document.querySelector('.profile__title');
    let profileOccupation = document.querySelector('.profile__occupation');
    
    profileName.innerHTML = formName.nodeValue;
    profileOccupation.innerHTML = formOccupation.nodeValue;

}



submit.addEventListener('click', function() {
    profileName.innerHTML = formName.nodeValue;
    profileOccupation.innerHTML = formOccupation.nodeValue;
    
})




/*function formInputName() {
    let profileName = document.querySelector('.profile__title');
    let profileOccupation = document.querySelector('.profile__occupation');

}


/*function handleFormSubmit (evt) {
    evt.preventDefault();
    
} )   

profileName.addEventListener('input', function(event){
    let inputValue = event.target.value;
    profile
}*/



