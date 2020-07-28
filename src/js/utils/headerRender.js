export function headerRender(name, isLogged) {
  if (isLogged) {
    document.querySelector('.header__menu-articles')
      .classList.add('header__menu-articles_is-opened');
    document.querySelector('.header__button_name')
      .classList.add('header__button_name_is-opened');
    document.querySelector('.header__button_name').textContent = name;
    document.querySelector('.header__button_authorize')
      .classList.add('header__button_hidden');
  }
}

export function headerRenderLogout() {
  document.querySelector('.header__menu-articles')
    .classList.remove('header__menu-articles_is-opened');
  document.querySelector('.header__button_name')
    .classList.remove('header__button_name_is-opened');
  document.querySelector('.header__button_authorize')
    .classList.remove('header__button_hidden');
}

export function renderAccountButton(name) {
  document.querySelector('.header__button_name').textContent = name;
}

export function renderAccountCount(name, count, word) {
  document.querySelector('.account-info__title').textContent = `${name}, у вас ${count} сохранённых статей`;
  document.querySelector('.account-info__keywords_bold').textContent = `${word}`;
}
