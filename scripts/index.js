let editButton = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__close-button');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__occupation');
let formName = document.querySelector('.modal__form_input_name');
let formOccupation = document.querySelector('.modal__form_input_occupation');
let editModalForm = document.querySelector('.modal__form');

function closeModal () {
    modal.classList.remove('modal_open');   
}

editButton.addEventListener('click', function(evt) {
    modal.classList.add('modal_open');
    formName.value = profileName.textContent;
    formOccupation.value = profileOccupation.textContent;
    
});

closeButton.addEventListener('click', function() {
    modal.classList.remove('modal_open');
});

editModalForm.addEventListener('submit', function(evt) {
    evt.preventDefault(); 
    profileName.textContent = formName.value;
    profileOccupation.textContent = formOccupation.value;
    closeModal ();
});    









  

















    
    











/*function handleFormSubmit (evt) {
    
    
} )   

profileName.addEventListener('input', function(event){
    let inputValue = event.target.value;
    profile
}*/



