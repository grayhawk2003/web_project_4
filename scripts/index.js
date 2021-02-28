let editButton = document.querySelector('.profile__edit-button');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__close-button');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__occupation');
let formName = document.querySelector('.modal__input_type_name');
let formOccupation = document.querySelector('.modal__input_type_occupation');
let editModalForm = document.querySelector('.modal__form');

function closeModal () {
    modal.classList.remove('modal_open');   
}

editButton.addEventListener('click', function() {
    formName.value = profileName.textContent;
    formOccupation.value = profileOccupation.textContent;
    modal.classList.add('modal_open');
});

closeButton.addEventListener('click', function() {
    closeModal();
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



