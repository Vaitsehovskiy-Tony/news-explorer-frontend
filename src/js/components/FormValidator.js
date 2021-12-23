export default class FormValidator {
  constructor(popupSelector, validator) {
    this._popupSelector = popupSelector;
    this._formElement = this._popupSelector.querySelector(validator.popupForm);
    this._inputElement = validator.popupField;
    this._errorElement = validator.popupError;
    this._errorDisabled = validator.popupHide;
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputElement));
    this._submitButton = this._formElement.querySelector(validator.popupSubmit);
  }

  enableValidation(){
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setInputListeners();
  }

  _setInputListeners(){
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._submitButtonToggler(this._formElement);
      });
    });
  }

  _submitButtonToggler(){
    const submitState = !this._hasInvalidInput(this._formElement);
      if ((submitState) && (!this._isEmpty())) {
      this._submitButton.classList.add('active');
    } else {
      this._submitButton.classList.remove('active');
    }
  }

  _openInputError(input){
    const errSpan = this._popupSelector.querySelector(`.${input.id}-error`);
    errSpan.textContent = this._checkInputValidity(input, errSpan);
    errSpan.classList.remove(this._errorDisabled);
  }


  _checkInputValidity(input, error) {
    if (input.validity.valueMissing) {
      return (error.textContent = 'Это обязательное поле, господин');
    } if (input.validity.tooShort) {
      return (error.textContent = 'Господин, должно быть от 8 до 30 символов');
    } if (input.validity.tooLong) {
      return (error.textContent = 'Господин, должно быть от 8 до 30 символов');
    } if (input.validity.typeMismatch) {
      return (error.textContent = 'Здесь должен быть email, господин');
    }
  }

  _hideInputError(input){
    const errSpan = this._popupSelector.querySelector(`.${input.id}-error`);
    errSpan.textContent = '';
    errSpan.classList.add(this._errorDisabled);
  }

  _hasInvalidInput(){
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _isEmpty () {
    return this._inputs.some((input) => {
      return input.value == '' ;
    });
  }

  _isValid (input) {
    if (!input.validity.valid) {
      this._openInputError(input);
    } else {
      this._hideInputError(input);
    }
  }
}
