export default class Header {
  constructor(
    header,
    {
      callback,
      popupCallback,
      getInfo,
    },
  )
  {
    this._headerSaved = document.querySelectorAll(header.headerSaved);
    this._headerAuth = document.querySelectorAll(header.headerAuth);
    this._headerName = document.querySelectorAll(header.headerName);
    this._headerNameButton = document.querySelectorAll(header.headerNameButton);
    this._callback = callback;
    this._popupCallback = popupCallback;
    this._getInfo = getInfo;
    this._logoutHandler = this._logoutLogic.bind(this);
    this._headrbttnLogin = header.headrbttnLogin;
    this._headrbttnMobLogin = header.headrbttnMobLogin;
    this._headrBttnMobMenuOpen = header.headrBttnMobMenuOpen;
    this._headrMobClose = header.headrMobClose;
    this._headerMob = header.headerMob;
    this._mobMenuHandler = this._mobMenuLogic.bind(this);
    this._popupOpenHandler = this._popupOpenLogic.bind(this);
  }

  // рендер с проверкой авторизации
  render(isLoggedIn, userName) {
    if(isLoggedIn) {
      this._headerIteratorAdd(this._headerAuth);
      this._headerIteratorRemove(this._headerSaved);
      this._headerIteratorRemove(this._headerName);
      this._headerNameButton.forEach(i => i.textContent = userName);
      this._logoutListener();
    } else {
      this._headerIteratorRemove(this._headerAuth);
      this._headerIteratorAdd(this._headerSaved);
      this._headerIteratorAdd(this._headerName);
      this._headerNameButton.forEach(i => i.textContent = '');
      this._removeLogoutListener();
    }
  }

  // метод активирует слушателей, затем проверяет наличие токена
  // если находит - подключает коллбэк(рендер данных от сервера)
  tokenCheck(gotToken) {
    this._setEventListeners();
    if (gotToken) {
      this._getInfo(gotToken)
    }
  }

  // установка слушателей
  _setEventListeners() {
    this._popupOpenListener();
    this._mobMenuListener();
  }

  // метод раздачи класса всем элементам
  _headerIteratorAdd(selector) {
    selector.forEach(i => i.classList.add('header-navbar__menu-item_hidden'));
  }

  // метод раздачи класса всем элементам
  _headerIteratorRemove(selector) {
    selector.forEach(i => i.classList.remove('header-navbar__menu-item_hidden'));
  }

  // слушатели на кнопки логина у мобильного и десктопного меню
  _popupOpenListener() {
    this._headrbttnLogin.addEventListener('click', this._popupOpenHandler);
    this._headrbttnMobLogin.addEventListener('click', this._popupOpenHandler);
  }

  // очистка слушателей на кнопки логина у мобильного и десктопного меню
  _removePopupOpenListener() {
    this._headrbttnLogin.removeEventListener('click', this._popupOpenHandler);
    this._headrbttnMobLogin.removeEventListener('click', this._popupOpenHandler);
  }

  // слушатели логаута
  _logoutListener() {
    this._headerName.forEach(i => i.addEventListener('click', this._logoutHandler));
  }

  // удаление слушателей логаута
  _removeLogoutListener() {
    this._headerName.forEach(i => i.removeEventListener('click', this._logoutHandler));
  }

  // логика логаута
  _logoutLogic() {
    this._callback();
    this.render(false, '');
  }

  // логика открытия попапа
  _popupOpenLogic() {
    this._popupCallback();
  }

  // удаление слушателя мобильного меню
  _removeMobMenuListener() {
    this._headrBttnMobMenuOpen.removeEventListener('click', this._mobMenuHandler);
    this._headrMobClose.removeEventListener('click', this._mobMenuHandler);
  }

  // слушатель мобильного меню
  _mobMenuListener() {
    this._headrBttnMobMenuOpen.addEventListener('click', this._mobMenuHandler);
    this._headrMobClose.addEventListener('click', this._mobMenuHandler);
  }

  // логика мобильного меню
  _mobMenuLogic() {
    this._headerMob.classList.toggle('header-mob_is-opened');
  }
}
