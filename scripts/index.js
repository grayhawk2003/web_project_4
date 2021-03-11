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
let addCardModal = document.querySelector('.modal_type_add-card');
let addCardModalForm = document.querySelector('.modal__form_type_add-card');

let profileModal = document.querySelector('.modal_type_profile');
let profileModalForm = document.querySelector('.modal__form_type_profile');
let profileModalFormName = document.querySelector('.modal__input_type_name');
let profileModalFormOccupation = document.querySelector('.modal__input_type_occupation');

//Buttons and other DOM elements//
let addCardModalCloseButton = document.querySelector('.modal_close_add-card');
let addCardButton = document.querySelector('.profile__add-button');
let addCardTitle = document.querySelector('.modal__input_type_title');
let addCardUrl = document.querySelector('.modal__input_type_image-url');
let profileEditButton = document.querySelector('.profile__edit-button');
let profileModalCloseButton = document.querySelector('.modal_close_profile');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__occupation');



//Wrappers//

const placesList = document.querySelector('.places');


///////////////
///FUNCTIONS///

function createCardElement (card) {
  //get reference to template elements we want to use//
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const deleteCardButton = cardElement.querySelector('.card__trash-button');

  cardImage.src = card.link;  
  cardTitle.textContent = card.name;

  cardImage.addEventListener('click', () => {
      //handle image click//
  });

  cardLikeButton.addEventListener('click', () => {
      //handle like button click//
  });

  return cardElement;
}

function renderCard (card, wrapper) {
    const cardElement = createCardElement(card);
    wrapper.append(cardElement);
    //placesList becomes wrapper//
    //or Rafael said you can shorten by combining the two:  wrapper.append(cardElement(card));
}

//replace profileWindow with modalWindow so that we can reuse the funtion for other popups///
function toggleModal(modalWindow) {  
    modalWindow.classList.toggle('modal_open');   
}



//////////////
//EVENT HANDLERS//
/////////////////

addCardButton.addEventListener('click', () => toggleModal(addCardModal));

/*addCardModalCloseButton.addEventListener('click', function() {
    toggleModal(addCardModal);
});*/
///////THE ABOVE CODE BECAME THE FUNCTION BELOW/////
addCardModalCloseButton.addEventListener('click', () => toggleModal(addCardModal));


profileEditButton.addEventListener('click', function() {
    profileModalFormName.value = profileName.textContent;
    profileModalFormOccupation.value = profileOccupation.textContent;
    /*profileModal.classList.toggle('modal_open');*/  //had this code for project 4, 
    //but need to use function that applies to ANY modal, so used below line of code///
    toggleModal(profileModal);
});

/*profileModalCloseButton.addEventListener('click', function() {
    toggleModal(profileModal);
});*/
///////THE ABOVE CODE BECAME THE FUNCTION BELOW/////
profileModalCloseButton.addEventListener('click', () => toggleModal(profileModal));


profileModalForm.addEventListener('submit', function(evt) {
    evt.preventDefault(); 
    profileName.textContent = profileModalFormName.value;
    profileOccupation.textContent = profileModalFormOccupation.value;
    toggleModal(profileModal);
});   


//ADDING NEW CARD BY FILLING IN FORM///
addCardModalForm.addEventListener('sumbmit', function(evt) {
    evt.preventDefault();
    //add card//
    //change name on card//
    cardTitle.textContent = addCardTitle.value;
    //change picture on card//
    toggleModal(addCardModal);
});

 

initialCards.forEach(card => renderCard(card, placesList));
    
    











  

















    
    











/*function handleFormSubmit (evt) {
    
    
} )   

profileName.addEventListener('input', function(event){
    let inputValue = event.target.value;
    profile
}*/



