export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this.popup.querySelector('.pop-up__close')
      .addEventListener('click', this.close.bind(this));
  }

  open() {
    this.popup.classList.add('pop-up_is-opened');
  }

  close() {
    this.popup.classList.remove('pop-up_is-opened');
  }
}
