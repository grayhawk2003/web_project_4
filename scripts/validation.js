/////DECLARATIONS//////
const formElement = document.querySelector(".modal__form");
const formInput = formElement.querySelector(".modal__input");
const formError = formElement.querySelector('.${formInput.id}-error');


///3 FUNCTIONS TO DEFINE INPUT FIELD'S BEHAVIOR//////

///1.  SHOW ERROR ELEMENT IN ORDER TO NOTIFY USER////
const showInputError = (element) => {
    element.classList.add("modal__input_type_error");
};

///2.  HIDE ERROR ELEMEMENT///
const hideInputError = (element) => {
    element.classList.remove("modal__input_type_error");
};

///3.  CHECK IF FIELD IS VALID, AND ALSO CALLS EITHER SHOWINPUTERROR() OR HIDEINPUTERROR()//////
const isValid = (element) => {
  if (!formInput.validity.valid) {
      showInputError(formInput);
  }
  else {
      hideInputError(formInput);
  }
};

//EVENT LISTENERS///

formElement.addEventListener("submit", function(evt) {
    evt.preventDefault();
});

formInput.addEventListener("input", isValid);



//////////////////////////// LIZA LIVE CODE ///////////////////////////////////////
/*
function checkInputValidity(input, form, rest) {
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
  }); 