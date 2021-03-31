/////DECLARATIONS//////
/*const formElement = document.querySelector(".modal__form");
const formInput = formElement.querySelector(".modal__input");
const formError = formElement.querySelector(`#${formInput.id}-error`);*/


///3 FUNCTIONS TO DEFINE INPUT FIELD'S BEHAVIOR//////

///1.  SHOW ERROR ELEMENT IN ORDER TO NOTIFY USER////
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("modal__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("modal__input-error_active");
  };


///2.  HIDE ERROR ELEMEMENT///
const hideInputError = (formElement, inputElement) => {
    // Find the error message element
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("modal__input_type_error");
    errorElement.classList.remove("modal__input-error_active");
    errorElement.textContent = "";
  }; 

///3.  CHECK IF FIELD IS VALID, AND ALSO CALLS EITHER SHOWINPUTERROR() OR HIDEINPUTERROR()//////
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

////FUNCTIONS TO CHECK IF BUTTON SHOULD BE ACTIVE OR NOT BASED ON VALIDITY OF ALL FIELDS/////

//TO CHECK THE VALIDITY OF ALL FIELDS////
const hasInvalidInput = (inputList) => {
    // iterate over the array using the some() method
    return inputList.some((inputElement) => {
      // If the field is invalid, the callback will return true.
      // The method will then stop, and hasInvalidInput() function will return true
      // hasInvalidInput returns true  
      return !inputElement.validity.valid;
    })
  };   

//CHANGE SUBMIT BUTTON ACTIVE STATUS///
const toggleButtonState = (inputList, buttonElement) => {
    // If there is at least one invalid input
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("modal__submit_inactive");
     
    } else {         
      buttonElement.classList.remove("modal__submit_inactive");
   
    }
  };   

//EVENT LISTENERS///
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.modal__input'));

    const buttonElement = formElement.querySelector(".modal__submit");

    toggleButtonState(inputList, buttonElement);
    
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
    
      });
    });
  };

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.modal__form'));

    formList.forEach(formElement => {
      formElement.addEventListener('submit', event => {
        event.preventDefault();
      });

      setEventListeners(formElement);
    });
  };

enableValidation();


  
  
 enableValidation({
    formElement: ".modal__form",   //formSelector//
    formInput: ".modal__input",    //inputSelector//
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: ".modal__button_disabled",
    inputErrorClass: ".modal__input_type_error",
    errorClass: ".modal__input-error_active"
  }); 
  
  
  
  
  
  
