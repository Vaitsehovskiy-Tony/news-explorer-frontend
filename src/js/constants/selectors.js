export default {
  // может стоит разбить на 2 - селектор и вэлью, или по-другому
  searchSelector: document.querySelector('.search-form'),
  cardTemplateMain: '#cardTemplateMain',
  cardTemplateSaved: '#cardTemplateSaved',
  popupFormSignin: document.querySelector('.popup__signin'),
  popupFormSignup: document.querySelector('.popup__signup'),
  popupAltButton: '.popup__alternative-button',
  popupFormSignupOk: document.querySelector('.popup__signup-ok'),
  search: {
    results: document.querySelector('.results'),
    resultsSearching: document.querySelector('.results__loading'),
    resultsNothing: document.querySelector('.no-results'),
  },
  header: {
    headerSaved: '.header-navbar__saved',
    headerAuth: '.header-navbar__auth',
    headerName: '.header-navbar__name',
    headerNameButton: '.header-navbar__menu-item-name',
    headrbttnLogin: document.querySelector('.header-navbar__menu-item_auth'),
    headrbttnMobLogin: document.querySelector('.header-mob__menu-item_auth'),
    headrBttnMobMenuOpen: document.querySelector('.header-navbar__mob-menu-icon'),
    headrMobClose: document.querySelector('.header-mob__close-icon'),
    headerMob: document.querySelector('.header-mob'),
  },
  validator: {
    popupForm: '.popup__form',
    popupField: '.popup__input',
    popupError: '.popup__error',
    popupSubmit: '.popup__button',
    popupHide: '.popup__error_hide',
  },
  newsSection: {
    cardGrid: document.querySelector('.result__cards'),
    showMoreButton: document.querySelector('.results__show-more'),
  },
  newsCard: {
    cardReminderSignin: 'Войдите, чтобы сохранять',
    cardReminderAdd: 'Добавить в избранное',
    cardReminderRemove: 'Убрать из сохранённых',
  },
  infoSaved: {
    infoTitle: document.querySelector('.info__your-bookmarks'),
    infoTemplate: '#infoTemplate',
  }
}
