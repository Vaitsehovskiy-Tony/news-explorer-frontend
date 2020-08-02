import '../css/articles.css';

/* eslint-disable no-undef */
import ArticleSaved from '../js/components/ArticleSaved';
import ArticleList from '../js/components/ArticleList';
import { PROPS, mainApi } from '../js/constants/constants';

const { renderAccountButton, renderAccountCount, headerRenderMobileOpenAccount, headerRenderMobileCloseAccount } = require('../js/utils/render');

const headerButtonName = document.querySelector('.headr__bttn_name');

const articlesList = document.querySelector('.articles-list');
const headerMenu320 = document.querySelector('.headr__button-320');
const headerClose320 = document.querySelector('.headr__close-320');

const savedArticle = new ArticleSaved();
const savedArticlesList = new ArticleList(articlesList, savedArticle);

window.addEventListener('load', () => {
  Promise.all([mainApi.getArticles(), mainApi.getUserInfo()])
    .then(
      ([articles, userData]) => {
        console.log(userData);
        renderAccountButton(userData.data.name);

        if (articles.data.length > 0) {
          renderAccountCount(userData.data.name, articles.data.length, articles.data);
          document.querySelector('.results')
            .classList.add('results_is-opened');
          savedArticlesList.render(articles.data);
        } else {
          console.log('У вас нет сохраненных статей');
        }
      },
    )
    .catch((err) => {
      console.log(err);
    });
});

articlesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('article-card__delete-icon')) {
    const articleId = event.target.closest('.article-card').getAttribute('id');
    mainApi
      .deleteArticle(`${articleId}`)
      .then((data) => {
        console.log(data.message);
      })
      .catch((err) => {
        console.log(`Удаление неуспешно: ${err}`);
      });

    savedArticle.remove(event);
  }
});

headerMenu320.addEventListener('click', () => {
  headerRenderMobileOpenAccount();
});

headerClose320.addEventListener('click', () => {
  headerRenderMobileCloseAccount();
});

headerButtonName.addEventListener('click', () => {
  mainApi
    .logout()
    .then((data) => {
      console.log(data);
      PROPS.isLoggedIn = false;
      window.location.href = './';
    })
    .catch((err) => {
      console.log(err);
    });
});
