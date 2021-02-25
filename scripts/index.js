let editButton = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__close-button');
let submitButton = document.querySelector('.modal__form-submit');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__occupation');
let formName = document.querySelector('.modal__form-name');
let formOccupation = document.querySelector('.modal__form-occupation');
let form = document.querySelector('.modal__form');

function closeModal () {
    modal.style.display = 'none';
    closeButton.style.display = 'none';
}

editButton.addEventListener('click', function(evt) {
    evt.preventDefault(); /*Kevin had me add this*/
    modal.style.display = 'block';
    /*closeButton.style.display = 'block'; */ 
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    /*closeButton.style.display = 'none';*/
});

submitButton.addEventListener('click', function(evt) {
    evt.preventDefault(); /*Kevin had me add this*/
    profileName.textContent = formName.value;
    profileOccupation.textContent = formOccupation.value;
    closeModal ();
});    

form.addEventListener('submit', )







  

















    
    











/*function handleFormSubmit (evt) {
    
    
} )   

profileName.addEventListener('input', function(event){
    let inputValue = event.target.value;
    profile
}*/



