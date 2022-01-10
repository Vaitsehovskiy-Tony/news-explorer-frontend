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

  // включаем валидацию
  enableValidation(){
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setInputListeners();
  }

  // установка слушателей на каждый инпут
  _setInputListeners(){
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._submitButtonToggler(this._formElement);
      });
    });
  }

  // меняет цвет в зависимости от корректности всех данных
  _submitButtonToggler(){
    const submitState = !this._hasInvalidInput(this._formElement);
      if ((submitState) && (!this._isEmpty())) {
      this._submitButton.classList.add('active');
    } else {
      this._submitButton.classList.remove('active');
    }
  }

  // так открываем ошибку
  _openInputError(input){
    const errSpan = this._popupSelector.querySelector(`.${input.id}-error`);
    errSpan.textContent = this._checkInputValidity(input, errSpan);
    errSpan.classList.remove(this._errorDisabled);
  }

  // выдача кастомных ошибок
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

  // прячем ошибку
  _hideInputError(input){
    const errSpan = this._popupSelector.querySelector(`.${input.id}-error`);
    errSpan.textContent = '';
    errSpan.classList.add(this._errorDisabled);
  }

  // проверка есть ли хотя бы один неправильный инпут
  _hasInvalidInput(){
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  // есть ли пустое поле
  _isEmpty () {
    return this._inputs.some((input) => {
      return input.value == '' ;
    });
  }

  // метод открытия/очистка поля ошибки
  _isValid (input) {
    if (!input.validity.valid) {
      this._openInputError(input);
    } else {
      this._hideInputError(input);
    }
  }
}
