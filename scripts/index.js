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
 
/////////////  
///MODALS////
/////////////
let addCardModal = document.querySelector('.modal_type_add-card');
let addCardModalForm = document.querySelector('.modal__form_type_add-card'); 

let previewModal = document.querySelector('.modal_type_preview');

let profileModal = document.querySelector('.modal_type_profile');
let profileModalForm = document.querySelector('.modal__form_type_profile');
let profileModalFormName = document.querySelector('.modal__input_type_name');
let profileModalFormOccupation = document.querySelector('.modal__input_type_occupation');

//////////////////////////////////
//BUTTONS and OTHER DOM ELEMENTS//
//////////////////////////////////

////Add Card Modal//
let addCardModalCloseButton = document.querySelector('.modal_close_add-card');
let addCardButton = document.querySelector('.profile__add-button');
let addCardTitle = document.querySelector('.modal__input_type_title');
let addCardUrl = document.querySelector('.modal__input_type_image-url');
////Profile Modal///
let profileEditButton = document.querySelector('.profile__edit-button');
let profileModalCloseButton = document.querySelector('.modal_close_profile');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__occupation');
///Preview Modal///
let previewModalCloseButton = document.querySelector('.modal_close_preview');



//Wrappers//
const placesList = document.querySelector('.places');


///////////////
///FUNCTIONS///
///////////////


///Create clone of card////
function createCardElement (card) {
  //get reference to template elements we want to use//
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardDeleteButton = cardElement.querySelector('.card__trash-button');

  cardImage.src = card.link; 
  cardTitle.textContent = card.name;

  cardImage.addEventListener('click', () => onImagePreview (card));
  //handle image click//
 
  cardLikeButton.addEventListener('click', () => onLikeButtonClick (card));
      //handle like button click//

  cardDeleteButton.addEventListener('click', () => onTrashButtonClick (cardElement)); 
  

  return cardElement;
}

///Render Card///
function renderCard (card, wrapper) {
    const cardElement = createCardElement(card);
    wrapper.append(cardElement);
    //placesList becomes wrapper//
    //or Rafael said you can shorten by combining the two:  wrapper.append(cardElement(card));
}

//Creating new card///
function createNewCard () {
    const newCard = cardTemplate.cloneNode(true);
    const newCardImage = newCard.querySelector('.card__image');
    const newCardTitle = newCard.querySelector('.card__title');
    newCardImage.src = card.link; 
    newCardTitle.textContent = card.name;
    return newCard;
}

///Toggle ANY Modal Window////
function toggleModal(modalWindow) {  
    modalWindow.classList.toggle('modal_open');   
}

////Remove Card///
const onTrashButtonClick = card => {
    placesList.removeChild(card);
}

////Open Image Preview Modal///
const onImagePreview = card => {
    const modalImage = previewModal.querySelector('.modal__image');
    modalImage.src = card.link;
    toggleModal(previewModal);
}


//////////////
//EVENT HANDLERS//
/////////////////

addCardButton.addEventListener('click', () => toggleModal(addCardModal));

addCardModalCloseButton.addEventListener('click', () => toggleModal(addCardModal));


profileEditButton.addEventListener('click', function() {
    profileModalFormName.value = profileName.textContent;
    profileModalFormOccupation.value = profileOccupation.textContent;
    toggleModal(profileModal);
});


profileModalCloseButton.addEventListener('click', () => toggleModal(profileModal));

previewModalCloseButton.addEventListener('click', () => toggleModal(previewModal));


profileModalForm.addEventListener('submit', function(evt) {
    evt.preventDefault(); 
    profileName.textContent = profileModalFormName.value;
    profileOccupation.textContent = profileModalFormOccupation.value;
    toggleModal(profileModal);
});   

//ADDING NEW CARD BY FILLING IN FORM///
addCardModalForm.addEventListener('submit', function(evt) {
    evt.preventDefault(); 
    createNewCard();
    newCardTitle.textContent = addCardTitle.value;
    newCardImage.src = addCardUrl.value;
    placesList.prepend(newCard);
    toggleModal(addCardModal);
});   


/*addCardModalForm.addEventListener('sumbmit', createNewCard(card) {   
    cardTitle.textContent = addCardTitle.value;
    cardImage.src = addCardUrl.value;   
    placesList.prepend(newCard);
    toggleModal(addCardModal);
});*/

 

initialCards.forEach(card => renderCard(card, placesList));
    
    











  

















    
    











/*function handleFormSubmit (evt) {
    
    
} )   

profileName.addEventListener('input', function(event){
    let inputValue = event.target.value;
    profile
}*/



