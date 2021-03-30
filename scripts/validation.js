/////DECLARATIONS//////
const formElement = document.querySelector(".modal__form");
/*const formInputList = Array.from(document.querySelectorAll(".modal__input"));
const formList = Array.from(document.querySelectorAll(".modal__form"));*/
const formInput = formElement.querySelector(".modal__input");
const formError = formElement.querySelector(`#${formInput.id}-error`);

/*const formList = Array.from(document.querySelectorAll('.modal__form'));*/


///3 FUNCTIONS TO DEFINE INPUT FIELD'S BEHAVIOR//////

///1.  SHOW ERROR ELEMENT IN ORDER TO NOTIFY USER////
const showInputError = (element, errorMessage) => {  ///ONLY WORKS FOR FIRST FIELD////
    element.classList.add('modal__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('modal__input-error_active');
};

/*const showInputError = (element, errorMessage) => {  ///ONLY WORKS FOR FIRST FIELD////    
    const inputList = Array.from(documement.querySelectorAll('.modal__input'));
    inputList.forEach((element) => {
      element.classList.add('modal__input_type_error');
      formError.textContent = errorMessage;
      formError.classList.add('modal__input-error_active');
    });
};*/



///2.  HIDE ERROR ELEMEMENT///
const hideInputError = (element) => {
    element.classList.remove('modal__input_type_error');
    formError.classList.remove('modal__input-error_active');
    formError.reset();
    /*formError.textContent = "";*/
};

///3.  CHECK IF FIELD IS VALID, AND ALSO CALLS EITHER SHOWINPUTERROR() OR HIDEINPUTERROR()//////
const isValid = () => {
    if (!formInput.validity.valid) {
        showInputError(formInput, formInput.validationMessage);
    }
    else {
        hideInputError(formInput);
    }
  };

/*const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
      hideInputError(formElement, inputElement);
  }
};*/


//EVENT LISTENERS///

formElement.addEventListener("submit", function(evt) {
    evt.preventDefault();
});

formInput.addEventListener("input", isValid);


enableValidation({
    formElement: ".modal__form",   //formSelector//
    formInput: ".modal__input",    //inputSelector//
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: ".modal__button_disabled",
    inputErrorClass: ".modal__input_type_error",
    errorClass: ".modal__input-error_active"
  }); 





//////////////////////////// LIZA LIVE CODE ///////////////////////////////////////

/*function checkInputValidity(input, form, rest) {
  if(input.validity.valid) {
      //hideErrorMessage()
  } else {
      //showErrorMessage()
  }
} 

function toggleButtonState () {

}

function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
      form.addEventListener('submit', ((evt) => {
          evt.preventDefault();
      }))

    const inputs = [...forms.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);
    
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(input, form, rest)
            toggleButtonState()
        })
    })
  })
}


enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  }); */