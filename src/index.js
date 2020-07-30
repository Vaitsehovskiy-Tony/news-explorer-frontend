/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import './css/style.css';

import Article from './js/components/Article';
import ArticleList from './js/components/ArticleList';
import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';

import { PROPS, mainApi, newsApi } from './js/constants/constants';

const { headerRender, headerRenderLogout, renderAccountButton, renderAccountCount } = require('./js/utils/render');

const headrbttnAuth = document.querySelector('.headr__bttn_authorize');
const headrbttnName = document.querySelector('.headr__bttn_name');
const searchForm = document.querySelector('.search__form');
const popupFormAuth = document.querySelector('.pop-up__form_authorize');
const popupFormRegistr = document.querySelector('.pop-up__form_registration');
const popupLinkRegistr = document.querySelector('.pop-up__link_registration');
const popupLinkAuth = document.querySelector('.pop-up__link_authorize');
const popupLinkLogInAfterSuccessReg = document.querySelector('.pop-up__link_log-in');
const articlesList = document.querySelector('.articles-list');

const article = new Article();
const cardList = new ArticleList(articlesList, article);
const popupAuth = new Popup(document.querySelector('.pop-up_authorize'));
const popupRegistr = new Popup(document.querySelector('.pop-up_registration'));
const popupSuccessRegistr = new Popup(document.querySelector('.pop-up_success-registration'));

const formVAlidAuth = new FormValidator(document.querySelector('.pop-up_authorize'));
const formVAlidRegistr = new FormValidator(document.querySelector('.pop-up_registration'));

window.addEventListener('load', () => {
  console.log(PROPS);
  console.log(PROPS.isLoggedIn);
  // eslint-disable-next-line no-use-before-define
  checkLogged();
});

popupLinkRegistr.addEventListener('click', () => {
  popupAuth.close();
  popupRegistr.open();
});

headrbttnAuth.addEventListener('click', () => {
  popupAuth.open();
});

popupLinkAuth.addEventListener('click', () => {
  popupRegistr.close();
  popupAuth.open();
});

popupLinkLogInAfterSuccessReg.addEventListener('click', () => {
  popupSuccessRegistr.close();
  popupAuth.open();
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

popupFormRegistr.addEventListener('submit', (event) => {
  event.preventDefault();
  mainApi
    .signUp(
      popupFormRegistr.email.value,
      popupFormRegistr.password.value,
      popupFormRegistr.name.value,
    )
    .then((res) => {
      console.log(55);
      console.log(res);
      if (res.message) {
        console.log(77);
        console.log(res);
        return Promise.reject(res);
      }
      popupFormRegistr.reset();
      popupRegistr.close();
      popupSuccessRegistr.open();
    })
    .catch((err) => {
      console.log(66);
      console.log(err);
      popupFormRegistr.querySelector('.pop-up__error').textContent = err.message;
    });
});

popupFormAuth.addEventListener('submit', (event) => {
  event.preventDefault();
  mainApi
    .signIn(
      popupFormAuth.email.value,
      popupFormAuth.password.value,
    )
    .then((res) => {
      console.log(res.data);
      PROPS.isLoggedIn = true;
      console.log(777);
      popupFormAuth.reset();
      popupAuth.close();
      headerRender(res.data.name, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(888);
      console.log(err);
    });
});

headrbttnName.addEventListener('click', () => {
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
