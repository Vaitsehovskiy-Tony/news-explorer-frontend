/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

export default class FormValidator {
  constructor(popup) {
    this.form = popup.querySelector('form');
    this.button = this.form.querySelector('button');
    this.form.addEventListener('input', this.setEventListeners.bind(this));
  }

  checkInputValidity(input, error) {
    if (input.validity.valueMissing) {
      return (error.textContent = 'Это обязательное поле');
    } if (input.validity.tooShort) {
      return (error.textContent = 'Должно быть от 2 до 30 символов');
    } if (input.validity.tooLong) {
      return (error.textContent = 'Должно быть от 2 до 30 символов');
    } if (input.validity.typeMismatch) {
      return (error.textContent = 'Здесь должна быть ссылка');
    }
    error.textContent = '';
  }

  setSubmitButtonState(form, button) {
    if (form.checkValidity()) {
      button.removeAttribute('disabled');
      button.classList.remove('bttn_disabled');
      return;
    }
    if (!form.checkValidity()) {
      button.setAttribute('disabled', true);
      button.classList.add('bttn_disabled');
    }
  }

  setEventListeners(event) {
    this.checkInputValidity(
      event.target,
      event.target.closest('div').querySelector('.input__error'),
    );
    this.setSubmitButtonState(this.form, this.button);
  }

  setError(err) {
    this.form.querySelector('.pop-up__error').textContent = err;
  }
}
