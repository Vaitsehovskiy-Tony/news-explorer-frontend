import Popup from './Popup';

export default class PopupSuccess extends Popup {
  constructor(popupAltButton, popupSelector, {altPopup}) {
    super(popupSelector);
    this._popupAltButton = this._popup.querySelector(popupAltButton);
    this._altPopup = altPopup;
    this._altPopupHandler = this._altPopupLogic.bind(this);

  }

  open() {
    super.open();
    this._altPopupListener();
  }

  close() {
    this._removeAltPopupListener();
    super.close();
  }

  // слушатели событий
  _altPopupListener() {
    this._popupAltButton.addEventListener('click', this._altPopupHandler);
  }

  // очистка от слушателей событий
  _removeAltPopupListener() {
    this._popupAltButton.removeEventListener('click', this._altPopupHandler);
  }

// логика слушателя событий
  _altPopupLogic(evt) {
    evt.preventDefault();
    this.close();
    this._altPopup(evt);
  }
}
