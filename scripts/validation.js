///3 FUNCTIONS TO DEFINE INPUT FIELD'S BEHAVIOR//////

///1.  SHOW ERROR ELEMENT IN ORDER TO NOTIFY USER////
const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  };


///2.  HIDE ERROR ELEMEMENT///
const hideInputError = (formElement, inputElement, settings) => {
    // Find the error message element
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
  }; 

///3.  CHECK IF FIELD IS VALID, AND ALSO CALLS EITHER SHOWINPUTERROR() OR HIDEINPUTERROR()//////
const isValid = (formElement, inputElement) => {
    if (!formInput.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

////FUNCTIONS TO CHECK IF BUTTON SHOULD BE ACTIVE OR NOT BASED ON VALIDITY OF ALL FIELDS/////

//TO CHECK THE VALIDITY OF ALL FIELDS////
const hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
  };   

//CHANGE SUBMIT BUTTON ACTIVE STATUS///
const toggleButtonState = (inputList, buttonElement, settings) => {
    
    // If there is at least one invalid input
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
     
    } else {         
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };   

//EVENT LISTENERS///
const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));

    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, settings);
    
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
    
    toggleButtonState(inputList, buttonElement, settings);

      });
    });
  };

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach(formElement => {
      formElement.addEventListener('submit', event => {
        event.preventDefault();
      });

      setEventListeners(formElement, settings);
    });
  };

  
 enableValidation({
    formSelector: ".form",   //.popup__form//
    inputSelector: ".modal__input",    //.popup__input//
    submitButtonSelector: ".modal__submit",     //submitButtonSelector: ".modal__button",//
    inactiveButtonClass: "modal__submit_inactive",     //inactiveButtonClass: "modal__button_disabled",///
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__input-error_active"
  }); 
  
  
/*
    buttonElement: ".modal__submit",
    buttonElementInactive: ".modal__submit_inactive"

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});  */