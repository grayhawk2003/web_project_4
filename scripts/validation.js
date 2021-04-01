///3 FUNCTIONS TO DEFINE INPUT FIELD'S BEHAVIOR//////

///1.  SHOW ERROR ELEMENT IN ORDER TO NOTIFY USER////
const showInputError = (formElement, formInput, errorMessage) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.add("modal__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("modal__input-error_active");
  };


///2.  HIDE ERROR ELEMEMENT///
const hideInputError = (formElement, formInput) => {
    // Find the error message element
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove("modal__input_type_error");
    errorElement.classList.remove("modal__input-error_active");
    errorElement.textContent = "";
  }; 

///3.  CHECK IF FIELD IS VALID, AND ALSO CALLS EITHER SHOWINPUTERROR() OR HIDEINPUTERROR()//////
const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
      showInputError(formElement, formInput, formInput.validationMessage);
    } else {
      hideInputError(formElement, formInput);
    }
  };

////FUNCTIONS TO CHECK IF BUTTON SHOULD BE ACTIVE OR NOT BASED ON VALIDITY OF ALL FIELDS/////

//TO CHECK THE VALIDITY OF ALL FIELDS////
const hasInvalidInput = (inputList) => {
    
    return inputList.some((formInput) => {
    return !formInput.validity.valid;
    })
  };   

//CHANGE SUBMIT BUTTON ACTIVE STATUS///
const toggleButtonState = (inputList, buttonElement) => {
    // If there is at least one invalid input
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("modal__submit_inactive");
      /*buttonElement.setAttribute("disabled");*/
     
    } else {         
      buttonElement.classList.remove("modal__submit_inactive");
      /*buttonElement.removeAttribute("disabled");*/
      buttonElement.disabled = false;
    }
  };   

//EVENT LISTENERS///
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.modal__input'));

    const buttonElement = formElement.querySelector(".modal__submit");

    toggleButtonState(inputList, buttonElement);
    
    inputList.forEach(formInput => {
      formInput.addEventListener('input', () => {
        isValid(formElement, formInput);
    
    toggleButtonState(inputList, buttonElement);

      });
    });
  };

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach(formElement => {
      formElement.addEventListener('submit', event => {
        event.preventDefault();
      });

      setEventListeners(formElement);
    });
  };

  
 enableValidation({
    formElement: ".form",   //formSelector//
    formInput: ".modal__input",    //inputSelector//
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: ".modal__button_disabled",
    inputErrorClass: ".modal__input_type_error",
    errorClass: ".modal__input-error_active"
  }); 
  
  
  
  
  
  
