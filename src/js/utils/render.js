/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
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

function renderAccountCount(name, count, array) {
  const arr = array.map((i) => i.keyword);

  const result = {};

  arr.forEach((a) => {
    result[a] = result[a] + 1 || 1;
  });

  function swap(obj) {
    const res = {};
    for (let prop in obj) {
      const value = obj[prop];
      res[value] = prop;
    }
    return res;
  }

  const newResult = swap(result);

  const firstWord = newResult[Object.keys(newResult).length];
  let secondWord = newResult[Object.keys(newResult).length - 1];
  const otherWord = Object.keys(result).length - 2;

  if (!secondWord) {
    secondWord = arr[0];
  }

  console.log(firstWord);
  console.log(secondWord);
  console.log(otherWord);

  document.querySelector('.account-info__title').textContent = `${name}, у вас ${count} сохранённых статей`;
  if (otherWord > 0) {
    document.querySelector('.account-info__keywords_bold').textContent = `${firstWord}, ${secondWord} и ${otherWord} другим`;
  } else if (otherWord === 0) {
    document.querySelector('.account-info__keywords_bold').textContent = `${firstWord} и ${secondWord}`;
  } else if (otherWord === -1) {
    document.querySelector('.account-info__keywords_bold').textContent = `${firstWord}`;
  }
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
