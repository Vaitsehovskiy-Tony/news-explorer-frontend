/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import './css/style.css';

// готово
// 1. После signin нужно сделать запрос на users/me
// 2. logout падает с ошибкой, именно сам запрос
// 3. Запрос на статьи падает, так как идешь не на прокси
// 4. Попап авторизации закрывается, но по факту авторизация не работает(нет имени)
// 5. Не работает букмарк
// 0. При ЛогИне вылезает ошибка, при втором заходе ауф проходит
// 6. При регистрации, если емейл существует приложение падает с ошибкой
// 8. Не работает смена секций результатов - ничего не найдено, идет поиск и тд
// 9. Не реализован гамбургер

// 7. Не работают темы сохраненных статей
// 8. Даты не конвертированы

import Article from './js/components/Article';
import ArticleList from './js/components/ArticleList';
import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';

import { PROPS, mainApi, newsApi, article, cardList } from './js/constants/constants';

const { headerRender, headerRenderLogout, headerRenderMobileOpen, headerRenderMobileClose } = require('./js/utils/render');
const { showFirstArticles, noResults } = require('./js/utils/articles');
// const {
//   showFirstArticles, showResultsNothing, showMessageServerError,
// } = require('./js/utils/articles');

const headrbttnAuth = document.querySelector('.headr__bttn_authorize');
const headrbttnName = document.querySelector('.headr__bttn_name');
const searchForm = document.querySelector('.search__form');
const popupFormAuth = document.querySelector('.pop-up__form_authorize');
const popupFormRegistr = document.querySelector('.pop-up__form_registration');
const popupLinkRegistr = document.querySelector('.pop-up__link_registration');
const popupLinkAuth = document.querySelector('.pop-up__link_authorize');
const popupLinkLogInAfterSuccessReg = document.querySelector('.pop-up__link_log-in');
const articlesList = document.querySelector('.articles-list');
const resultsButton = document.querySelector('.results__bttn');
const headerMenu320 = document.querySelector('.headr__button-320');
const headerClose320 = document.querySelector('.headr__close-320');
const articlesListSaved = document.querySelector('.articles-list-saved');

const popupAuth = new Popup(document.querySelector('.pop-up_authorize'));
const popupRegistr = new Popup(document.querySelector('.pop-up_registration'));
const popupSuccessRegistr = new Popup(document.querySelector('.pop-up_success-registration'));

const formVAlidAuth = new FormValidator(document.querySelector('.pop-up_authorize'));
const formVAlidRegistr = new FormValidator(document.querySelector('.pop-up_registration'));

let articlesMainPage = [];
let savedArticles = [];

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

headerMenu320.addEventListener('click', () => {
  headerRenderMobileOpen();
});

headerClose320.addEventListener('click', () => {
  headerRenderMobileClose();
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.results__nothing').classList.remove('results_is-opened');
  document.querySelector('.results__ok').classList.remove('results_is-opened');
  document.querySelector('.results__searching').classList.add('results_is-opened');
  console.log('0');

  if (PROPS.isLoggedIn) {
    console.log('1');
    mainApi.getArticles()
      .then((res) => {
        document.querySelector('.results__searching').classList.remove('results_is-opened');
        document.querySelector('.results').classList.add('results_is-opened');
        document.querySelector('.results__ok').classList.add('results_is-opened');
        // eslint-disable-next-line no-return-assign
        return savedArticles = res.data;
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  newsApi
    .getInitialCards(searchForm.word.value)
    .then((res) => {
      console.log('2');
      document.querySelector('.results__searching').classList.remove('results_is-opened');

      document.querySelector('.results')
        .classList.add('results_is-opened');
      document.querySelector('.results__ok').classList.add('results_is-opened');
      noResults(res.articles);
      articlesList.innerHTML = '';
      // eslint-disable-next-line no-return-assign
      // eslint-disable-next-line max-len
      // eslint-disable-next-line no-return-assign
      return articlesMainPage = showFirstArticles(res.articles, searchForm.word.value, savedArticles);
    })
    .catch((err) => {
      console.log(500);
      console.log(err);
    });
});

resultsButton.addEventListener('click', () => {
  let threeArticles = '';
  threeArticles = articlesMainPage.slice(0, 3);
  cardList.renderMainPage(threeArticles, searchForm.word.value, savedArticles);
  if (articlesMainPage.length <= 3) {
    resultsButton.classList.remove('results__bttn_is-opened');
    return;
  }
  return articlesMainPage.splice(0, 3);
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
  mainApi.signIn(
    popupFormAuth.email.value,
    popupFormAuth.password.value,
  )
    .then((res) => {
      console.log(res);
      PROPS.isLoggedIn = true;
      console.log(777);
      popupFormAuth.reset();
      popupAuth.close();
    })
    .catch((err) => {
      console.log(888);
      console.log(err);
    });

  mainApi.getUserInfo()
    .then((res) => headerRender(res.data.name, PROPS.isLoggedIn))
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
    console.log('click прошёл');
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
        console.log('карточка сохранена');
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

articlesList.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('article-card__like-icon') && !PROPS.isLoggedIn) {
    event.target.closest('.article-card')
      .querySelector('.article-card__help-container')
      .classList
      .add('article-card__help-container_is-opened');
  }
});

articlesList.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('article-card__like-icon') && !PROPS.isLoggedIn) {
    event.target.closest('.article-card')
      .querySelector('.article-card__help-container')
      .classList
      .remove('article-card__help-container_is-opened');
  }
});

headerMenu320.addEventListener('click', () => {
  headerRenderMobileOpen();
});

headerClose320.addEventListener('click', () => {
  headerRenderMobileClose();
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
      headerRender(res.data.name, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(1001);
      console.log(err.message);
    });
}
