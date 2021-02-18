let editButton = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.modal__close-button');
let submitButton = document.querySelector('.modal__form-submit');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__occupation');
let formName = document.querySelector('.modal__form-name');
let formOccupation = document.querySelector('.modal__form-occupation');
    

editButton.addEventListener('click', function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    closeButton.style.display = 'none';
    overlay.style.display = 'none'
});

/*function formInputName() 
profileName.textContent = formName.value;
profileOccupation.textContent = formOccupation.value;*/


submitButton.addEventListener('input', function(evt) {
    evt.preventDefault();
    modal.style.display = 'none';
    overlay.style.display = 'none';
    closeButton.style.display = 'none';
    profileName.textContent = formName.value;
    profileOccupation.textContent = formOccupation.value;

});

/*
function sayHello() {  /* function outside the event listener?*/
    /*console.log("Hello Console!");
  }
  window.addEventListener('load', sayHello);











    
    











/*function handleFormSubmit (evt) {
    
    
} )   

profileName.addEventListener('input', function(event){
    let inputValue = event.target.value;
    profile
}*/



