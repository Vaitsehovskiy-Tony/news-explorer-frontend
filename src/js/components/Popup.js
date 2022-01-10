export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeButton = this._popup.querySelector('.popup__close');
    this._escCloseHandler = this._escCloseLogic.bind(this);
    this._overlayCloseHandler = this._overlayCloseLogic.bind(this);
    this._сloseHandler = this.close.bind(this);
  }


  open() {
    this._popup.classList.add('popup_is-opened');
    this._setEventListeners();
  }

  close() {
    this._removeEventListeners();
    this._popup.classList.remove('popup_is-opened');
  }

  _formToggleClass() {
    this._popup.classList.toggle('popup_is-opened');
  }

  // слушатели событий
  _listenerCloseButton() {
    this._closeButton.addEventListener('click', this._сloseHandler);
  }

  _listenerEscClose() {
    document.addEventListener('keydown', this._escCloseHandler)
  }

  _overlayFormListener() {
    this._popup.addEventListener('click', this._overlayCloseHandler);
  }

  // очистка от слушателей событий
  _removeListenerCloseButton() {
    this._closeButton.removeEventListener('click', this._сloseHandler);
  }

  _removeListenerEscClose () {
    document.removeEventListener('keydown', this._escCloseHandler)
  }

  _removeOverlayFormListener() {
    this._popup.removeEventListener('click', this._overlayCloseHandler);
  }

  // логика слушателей событий
  _escCloseLogic(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _overlayCloseLogic(evt) {
    if (evt.target.classList.contains('overlay')) {
      this.close();
    }
  }

  // установка и деинсталляция слушателей
  _setEventListeners() {
    this._listenerCloseButton();
    this._listenerEscClose();
    this._overlayFormListener();
  }

  _removeEventListeners() {
    this._removeListenerCloseButton();
    this._removeListenerEscClose();
    this._removeOverlayFormListener();
  }
}
