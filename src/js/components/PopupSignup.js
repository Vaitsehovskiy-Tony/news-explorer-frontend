import Popup from './Popup';

export default class PopupSignup extends Popup {
  constructor(popupAltButton, popupFormSignup, { callback, altPopup}) {
    super(popupFormSignup);
    this._callback = callback;
    this._altPopup = altPopup;
    this._inputs = this._popup.querySelectorAll('.popup__input');
    this._popupAltButton = this._popup.querySelector(popupAltButton);
    this._submitHandler = this._submitLogic.bind(this);
    this._altPopupHandler = this._altPopupLogic.bind(this);
    this._submitButton = this._popup.querySelector('.popup__button');
  }

  open() {
    super.open();
    this._setEventListeners();
  }

  close() {
    super.close();
    this._clearInputValues();
    this._removeEventListeners();
  }

  _getInputValues() {
    this._newInputs = [];
    this._inputs.forEach((i) => this._newInputs.push(i.value));
    return this._newInputs;
  }

  _clearInputValues() {
    this._inputs.forEach((i) => i.value === '');
  }

  // установка и деинсталляция слушателей
  _setEventListeners() {
    super._setEventListeners();
    this._altPopupListener();
    this._submitListener();
  }

  _removeEventListeners() {
    this._removeSubmitListener();
    this._removeAltPopupListener();
  }

  // слушатели событий
  _submitListener() {
    this._submitButton.addEventListener('click', this._submitHandler);
  }
  _altPopupListener() {
    this._popupAltButton.addEventListener('click', this._altPopupHandler);
  }

  // очистка от слушателей событий
  _removeAltPopupListener() {
    this._popupAltButton.removeEventListener('click', this._altPopupHandler);
  }

  _removeSubmitListener() {
    this._submitButton.removeEventListener('click', this._submitHandler);
  }

  // логика слушателей событий
  _submitLogic(evt) {
    evt.preventDefault();
    if (this._submitButton.classList.contains('active')) {
      this._callback(this._getInputValues());
      this.close();
    }
  }

  _altPopupLogic(evt) {
    evt.preventDefault();
    this.close();
    this._altPopup(evt);
  }

}
