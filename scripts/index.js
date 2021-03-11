////////////////
//Declarations//
////////////////

const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ]; 
 
///Modals////
let profileModal = document.querySelector('.modal');
let profileModalForm = document.querySelector('.modal__form');
let profileModalFormName = document.querySelector('.modal__input_type_name');
let profileModalFormOccupation = document.querySelector('.modal__input_type_occupation');

//Buttons and other DOM elements//
let profileEditButton = document.querySelector('.profile__edit-button');
let profileModalCloseButton = document.querySelector('.modal__close-button');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__occupation');
let card = document.querySelector('.card');

//Wrappers//

const placesList = document.querySelector('.places__list');


///////////////
///FUNCTIONS///

function closeModal () {
    profileModal.classList.remove('modal_open');   
}


//////////////
//EVENT HANDLERS//
/////////////////

profileEditButton.addEventListener('click', function() {
    profileModalFormName.value = profileName.textContent;
    profileModalFormOccupation.value = profileOccupation.textContent;
    profileModal.classList.add('modal_open');
});

profileModalCloseButton.addEventListener('click', function() {
    closeModal();
});

profileModalForm.addEventListener('submit', function(evt) {
    evt.preventDefault(); 
    profileName.textContent = profileModalFormName.value;
    profileOccupation.textContent = profileModalFormOccupation.value;
    closeModal ();
});    

initialCards.forEach(card => {
    //get reference to template elements we want to use//
    const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = `url(${card.link})`;  //use template literal for the url srd//
    cardTitle.textContent = card.name;

    placesList.append(cardElement);
});
    
    











  

















    
    











/*function handleFormSubmit (evt) {
    
    
} )   

profileName.addEventListener('input', function(event){
    let inputValue = event.target.value;
    profile
}*/



