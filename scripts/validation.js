

///3 FUNCTIONS TO DEFINE INPUT FIELD'S BEHAVIOR//////

///1.  SHOW ERROR ELEMENT IN ORDER TO NOTIFY USER////
/*const showInputError = (formElement, formInput, errorMessage) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);   
    formInput.classList.add(enableValidation.inputErrorClass);
    errorElement.textContent = errorMessage; 
    errorElement.classList.add(enableValidation.errorClass);
  };*/

const showInputError = (formElement, formInput, errorMessage, configuration) => {
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.add(configuration.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(configuration.errorClass);
};  


///2.  HIDE ERROR ELEMENT///
const hideInputError = (formElement, formInput, configuration) => {
    // Find the error message element
    const errorElement = formElement.querySelector(`#${formInput.id}-error`);    
    formInput.classList.remove(configuration.inputErrorClass);   
    errorElement.classList.remove(configuration.errorClass);
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
const toggleButtonState = (inputList, buttonElement, configuration) => {
    // If there is at least one invalid input
    const buttonElementInactive = formElement.querySelector(configuration.buttonElementInactive);

    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(buttonElementInactive);
     
     
    } else {         
      buttonElement.classList.remove(buttonElementInactive);
     
      buttonElement.disabled = false;
    }
  };   


  /*const toggleButtonState = (inputList, buttonElement) => {
    // If there is at least one invalid input

    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("modal__submit_inactive");
     
    } else {         
      buttonElement.classList.remove("modal__submit_inactive");
    }
  }; */




//EVENT LISTENERS///
const setEventListeners = (formElement, configuration) => {
    const inputList = Array.from(formElement.querySelectorAll(configuration.formInput));

    const buttonElement = formElement.querySelector(configuration.buttonElement);

    toggleButtonState(inputList, buttonElement);
    
    inputList.forEach(formInput => {
      formInput.addEventListener('input', () => {
        isValid(formElement, formInput);
    
    toggleButtonState(inputList, buttonElement);

      });
    });
  };

/*const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach(formElement => {
      formElement.addEventListener('submit', event => {
        event.preventDefault();
      });

      setEventListeners(formElement);
    });
  };*/

  
  const enableValidation = configuration => {
    const formList = Array.from(document.querySelectorAll(configuration.formElement));
    formList.forEach(formElement => {
        formElement.addEventListener('submit', event => {
            event.preventDefault();
        });
        setEventListeners(formElement, configuration);
    });
};
  
  
enableValidation({
    formElement: ".form",   //formSelector//
    formInput: ".modal__input",    //inputSelector//
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: ".modal__button_disabled",
    inputErrorClass: ".modal__input_type_error",
    errorClass: ".modal__input-error_active",
    buttonElement: ".modal__submit",
    buttonElementInactive: ".modal__submit_inactive"
  }); 
