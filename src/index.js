/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import './css/style.css';

import Article from './js/components/Article';
import ArticleList from './js/components/ArticleList';
import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';

import { PROPS, mainApi, newsApi } from './js/constants/constants';

const { headerRender, headerRenderLogout } = require('./js/utils/headerRender');

const headerbttnAuthorize = document.querySelector('.headr__bttn_authorize');
const headerbttnName = document.querySelector('.headr__bttn_name');

const searchForm = document.querySelector('.search__form');

const popupFormAuthorize = document.querySelector('.pop-up__form_authorize');
const popupFormRegistration = document.querySelector('.pop-up__form_registration');
const popupLinkRegistration = document.querySelector('.pop-up__link_registration');
const popupLinkAuthorize = document.querySelector('.pop-up__link_authorize');
const popupLinkLogInAfterSuccessReg = document.querySelector('.pop-up__link_log-in');
const articlesList = document.querySelector('.articles-list');

const article = new Article();
const cardList = new ArticleList(articlesList, article);
const popupAuthorize = new Popup(document.querySelector('.pop-up_authorize'));
const popupRegistration = new Popup(document.querySelector('.pop-up_registration'));
const popupSuccessRegistration = new Popup(document.querySelector('.pop-up_success-registration'));

const formVAlidAuthorize = new FormValidator(document.querySelector('.pop-up_authorize'));
const formVAlidRegistration = new FormValidator(document.querySelector('.pop-up_registration'));

window.addEventListener('load', () => {
  console.log(PROPS);
  console.log(PROPS.isLoggedIn);
  // eslint-disable-next-line no-use-before-define
  checkLogged();
});

popupLinkRegistration.addEventListener('click', () => {
  popupAuthorize.close();
  popupRegistration.open();
});

headerbttnAuthorize.addEventListener('click', () => {
  popupAuthorize.open();
});

popupLinkAuthorize.addEventListener('click', () => {
  popupRegistration.close();
  popupAuthorize.open();
});

popupLinkLogInAfterSuccessReg.addEventListener('click', () => {
  popupSuccessRegistration.close();
  popupAuthorize.open();
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  newsApi
    .getInitialCards(searchForm.word.value)
    .then((res) => {
      document.querySelector('.results')
        .classList.add('results_is-opened');
      cardList.renderMainPage(res.articles, searchForm.word.value);
    })
    .catch((err) => {
      console.log(33);
      console.log(err);
    });
});

popupFormRegistration.addEventListener('submit', (event) => {
  event.preventDefault();
  mainApi
    .signUp(
      popupFormRegistration.email.value,
      popupFormRegistration.password.value,
      popupFormRegistration.name.value,
    )
    .then((res) => {
      console.log(55);
      console.log(res);
      if (res.message) {
        console.log(77);
        console.log(res);
        return Promise.reject(res);
      }
      popupFormRegistration.reset();
      popupRegistration.close();
      popupSuccessRegistration.open();
    })
    .catch((err) => {
      console.log(66);
      console.log(err);
      popupFormRegistration.querySelector('.pop-up__error').textContent = err.message;
    });
});

popupFormAuthorize.addEventListener('submit', (event) => {
  event.preventDefault();
  mainApi
    .signIn(
      popupFormAuthorize.email.value,
      popupFormAuthorize.password.value,
    )
    .then((res) => {
      console.log(res.data);
      PROPS.isLoggedIn = true;
      console.log(777);
      popupFormAuthorize.reset();
      popupAuthorize.close();
      headerRender(res.data, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(888);
      console.log(err);
    });
});

headerbttnName.addEventListener('click', () => {
  mainApi
    .logout()
    .then((res) => {
      console.log(res);
      PROPS.isLoggedIn = false;
      headerRenderLogout();
    })
    .catch((err) => {
      console.log(err);
    });
});

articlesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('article-card__like-icon')) {
    mainApi
      .postArticle(
        event.target
          .closest('.article-card')
          .getAttribute('keyword'),
        event.target.closest('.article-card').querySelector('.article-card__title').textContent,
        event.target.closest('.article-card').querySelector('.article-card__text').textContent,
        event.target.closest('.article-card').querySelector('.article-card__date').textContent,
        event.target.closest('.article-card').querySelector('.article-card__source').textContent,
        event.target.closest('.article-card').getAttribute('src'),
        event.target.closest('.article-card').querySelector('.article-card__image').style.backgroundImage.slice(5, -2),
      )
      .then((data) => {
        console.log(data);
        article.like(event);
      })
      .catch((err) => {
        console.log(66);
        console.log(err);
      });
  } else if (event.target.classList.contains('article-card__delete-icon')) {
    const articleId = event.target.closest('.article-card').getAttribute('id');
    mainApi
      .deleteArticle(`${articleId}`)
      .then((data) => {
        console.log(data.message);
      })
      .catch((err) => {
        console.log(`Удаление неуспешно: ${err}`);
      });
    article.like(event);
  }
});

function checkLogged() {
  mainApi.getUserInfo()
    .then((res) => {
      if (res.message) {
        console.log(1000);
        console.log(res);
        return Promise.reject(res);
      }
      console.log(5000);
      console.log(res);
      PROPS.isLoggedIn = true;
      console.log(PROPS.isLoggedIn);
      headerRender(res.name, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(1001);
      console.log(err.message);
    });
}
