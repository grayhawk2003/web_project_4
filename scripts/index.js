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
const modalContainer = document.querySelector('.modal__container');
const modal = document.querySelector('.modal');
/*const modal = document.querySelector('.modal__form');*/
const modalContainerPreview = document.querySelector('.modal__container_type_preview');
const modalContainerProfile = document.querySelector('.modal__container_type_profile');
const modalContainerAddCard = document.querySelector('.modal__container_type_add-card');

const addCardModal = document.querySelector('.modal_type_add-card');
const addCardModalForm = document.querySelector('.modal__form_type_add-card'); 

const previewModal = document.querySelector('.modal_type_preview');

const profileModal = document.querySelector('.modal_type_profile');
const profileModalForm = document.querySelector('.modal__form_type_profile');
const profileModalFormName = document.querySelector('.modal__input_type_name');
const profileModalFormOccupation = document.querySelector('.modal__input_type_occupation');

//////////////////////////////////
//BUTTONS and OTHER DOM ELEMENTS//
//////////////////////////////////

////Add Card Modal//
const addCardModalCloseButton = document.querySelector('.modal__close-button_add-card');
const addCardButton = document.querySelector('.profile__add-button');
const addCardTitle = document.querySelector('.modal__input_type_title');
const addCardUrl = document.querySelector('.modal__input_type_image-url');
const addCardCreateButton =document.querySelector('.modal__submit_type_create-card');
////Profile Modal///
const profileEditButton = document.querySelector('.profile__edit-button');
const profileModalCloseButton = document.querySelector('.modal__close-button_profile');
const profileName = document.querySelector('.profile__title');
const profileOccupation = document.querySelector('.profile__occupation');
///Preview Modal///
const previewModalCloseButton = document.querySelector('.modal__close-icon_preview');
const modalCaption = document.querySelector('.modal__caption');
const newModalCaption = document.querySelector('.modal__caption');



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
 
  cardLikeButton.addEventListener('click', (evt) => onLikeButtonClick (evt));
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

///Toggle ANY Modal Window////
function toggleModal(modalWindow) {  
  modalWindow.classList.toggle('modal_open');   
}



//CLOSE ANY POP UP WHEN CLICKING ON MODAL CONTAINER//
const onModalContainerClick = modal => {  
  const openModal = document.querySelector('.modal_open');
  toggleModal(openModal); 
}

modalContainerPreview.addEventListener('click', () => onModalContainerClick (previewModal));

modalContainerProfile.addEventListener('click', () => onModalContainerClick (profileModal));

modalContainerAddCard.addEventListener('click', () => onModalContainerClick (addCardModal));



//CLOSE ANY POP UP WHEN CLICKING ESC//
function ESCclose(evt) {
  if (evt.keyCode === 27) {
    const openModal = document.querySelector('.modal_open');
    toggleModal(openModal);
  }
}  



document.addEventListener("keydown", ESCclose);


////Remove Card///
const onTrashButtonClick = card => {
  placesList.removeChild(card);
}

////Open Image Preview Modal///
const onImagePreview = (card) => {
  const modalImage = previewModal.querySelector('.modal__image');
  modalImage.src = card.link;
  modalImage.alt = addCardTitle.value;
  modalCaption.textContent = card.name;
  toggleModal(previewModal);   
}


//Change Like Button Heart to black////
const onLikeButtonClick = evt => {
  evt.target.classList.toggle('card__like-button_type_active');
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
  const newCard = createCardElement({name: addCardTitle.value, link: addCardUrl.value});
  placesList.prepend(newCard); 
  toggleModal(addCardModal);
});   



initialCards.forEach(card => renderCard(card, placesList));
  

