export function headerRender(name, isLogged) {
  if (isLogged) {
    document.querySelector('.headr__menu-articles')
      .classList.add('headr__menu-articles_is-opened');
    document.querySelector('.headr__button_name')
      .classList.add('headr__button_name_is-opened');
    document.querySelector('.headr__button_name').textContent = name;
    document.querySelector('.headr__button_authorize')
      .classList.add('headr__button_hidden');
  }
}

export function headerRenderLogout() {
  document.querySelector('.headr__menu-articles')
    .classList.remove('headr__menu-articles_is-opened');
  document.querySelector('.headr__button_name')
    .classList.remove('headr__button_name_is-opened');
  document.querySelector('.headr__button_authorize')
    .classList.remove('headr__button_hidden');
}

export function renderAccountButton(name) {
  document.querySelector('.headr__button_name').textContent = name;
}

export function renderAccountCount(name, count, word) {
  document.querySelector('.account-info__title').textContent = `${name}, у вас ${count} сохранённых статей`;
  document.querySelector('.account-info__keywords_bold').textContent = `${word}`;
}
