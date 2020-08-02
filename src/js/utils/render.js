import { PROPS } from '../constants/constants';

const header = document.querySelector('.headr');
const headerLogo = document.querySelector('.headr__logo');
const headerMenuMain = document.querySelector('.headr__menu-main');
const headerButtonAuthorize = document.querySelector('.headr__bttn_authorize');
const headerButtonLogout = document.querySelector('.headr__button_logout');
const headerUserName = document.querySelector('.headr__user-name');
const headerImgLogout = document.querySelector('.headr__img-logout');
const headerMenuContainer320 = document.querySelector('.headr__menu_container-320');
const headerMenu320 = document.querySelector('.headr__button-320');
const headerClose320 = document.querySelector('.headr__close-320');

function headerRender(name, isLogged) {
  if (isLogged) {
    document.querySelector('.headr__menu-articles')
      .classList.add('headr__menu-articles_is-opened');
    document.querySelector('.headr__bttn_name')
      .classList.add('headr__bttn_name_is-opened');
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

function headerRenderMobileOpen() {
  header.classList.toggle('headr_black-background');
  headerMenuContainer320.classList.add('headr__menu_visible');
  headerMenu320.classList.add('headr__menu_invisible');
  headerClose320.classList.add('headr__menu_visible');

  headerMenuMain.classList.add('headr__menu_visible');
  if (!PROPS.isLoggedIn) {
    headerButtonAuthorize.classList.add('headr__menu_visible');
  }
}

function headerRenderMobileClose() {
  console.log('click');
  header.classList.toggle('headr_black-background');
  headerMenuContainer320.classList.remove('headr__menu_visible');

  headerMenuMain.classList.remove('headr__menu_visible');
  headerButtonAuthorize.classList.remove('headr__menu_visible');

  headerMenu320.classList.remove('headr__menu_invisible');
  headerClose320.classList.remove('headr__menu_visible');
}
function headerRenderMobileOpenAccount() {
  header.classList.toggle('headr_black-background');
  headerLogo.classList.toggle('headr_font-black');
  headerMenuContainer320.classList.add('headr__menu_visible');

  headerMenu320.classList.add('headr__menu_invisible');
  headerClose320.classList.add('headr__menu_visible');

  headerMenuMain.classList.add('headr__menu_visible');
  headerMenuMain.classList.toggle('headr_font-black');

  headerButtonLogout.classList.toggle('headr__button_black');
  headerUserName.classList.toggle('headr_font-black');
  headerImgLogout.src = '../images/exit1440white.svg';
}

function headerRenderMobileCloseAccount() {
  header.classList.toggle('headr_black-background');
  headerLogo.classList.toggle('headr_font-black');
  headerMenuContainer320.classList.remove('headr__menu_visible');

  headerMenu320.classList.remove('headr__menu_invisible');
  headerClose320.classList.remove('headr__menu_visible');

  headerMenuMain.classList.remove('headr__menu_visible');
  headerMenuMain.classList.toggle('headr_font-black');

  headerButtonLogout.classList.toggle('headr__button_black');
  headerUserName.classList.toggle('headr_font-black');
  headerImgLogout.src = '../images/exit1440black.svg';
}

// eslint-disable-next-line max-len
export { headerRender, headerRenderLogout, renderAccountButton, renderAccountCount, headerRenderMobileOpen, headerRenderMobileClose, headerRenderMobileOpenAccount, headerRenderMobileCloseAccount };
