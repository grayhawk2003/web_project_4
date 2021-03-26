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