import Popup from './Popup';

export default class PopupSuccess extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    super.open();
    // this._setEventListeners();
  }

  close() {
    super.close();
  }

  // _setEventListeners() {
  //   super._setEventListeners();
  // }
}
