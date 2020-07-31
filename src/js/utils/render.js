function headerRender(name, isLogged) {
  if (isLogged) {
    document.querySelector('.headr__menu-articles')
      .classList.add('headr__menu-articles_is-opened');
    document.querySelector('.headr__bttn_name')
      .classList.add('headr__bttn_name_is-opened');
    // имя не появляется
    document.querySelector('.headr__user-name').textContent = name;
    document.querySelector('.headr__bttn_authorize')
      .classList.add('headr__bttn_hidden');
  }
}

function headerRenderLogout() {
  document.querySelector('.headr__menu-articles')
    .classList.remove('headr__menu-articles_is-opened');
  document.querySelector('.headr__bttn_name')
    .classList.remove('headr__bttn_name_is-opened');
  document.querySelector('.headr__bttn_authorize')
    .classList.remove('headr__bttn_hidden');
}

function renderAccountButton(name) {
  document.querySelector('.headr__user-name').textContent = name;
}

function renderAccountCount(name, count, word) {
  document.querySelector('.account-info__title').textContent = `${name}, у вас ${count} сохранённых статей`;
  document.querySelector('.account-info__keywords_bold').textContent = `${word}`;
}

export { headerRender, headerRenderLogout, renderAccountButton, renderAccountCount };
