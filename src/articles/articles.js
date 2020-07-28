import '../css/articles.css';

/* eslint-disable no-undef */
import ArticleSaved from '../js/components/ArticleSaved';
import ArticleList from '../js/components/ArticleList';
import { PROPS, mainApi } from '../js/constants/constants';

const { renderAccountButton, renderAccountCount } = require('../js/utils/headerRender');

const headerButtonName = document.querySelector('.header__button_name');

const articlesList = document.querySelector('.articles-list');
const savedArticle = new ArticleSaved();
const savedArticlesList = new ArticleList(articlesList, savedArticle);

window.addEventListener('load', () => {
  Promise.all([mainApi.getArticles(), mainApi.getUserInfo()])
    .then(
      ([articles, userData]) => {
        // отрисовка хедера
        renderAccountButton(userData.name);

        if (articles.articles.length > 0) {
          // имя, у вас 5 сохранённых статей
          renderAccountCount(userData.name, articles.articles.length, articles.articles[0].keyword);
          // показать секцию Результаты поиска
          document.querySelector('.results')
            .classList.add('results_is-opened');
          savedArticlesList.render(articles.articles);
          // Если articles.articles.length === 2, то передать 2е слово
        } else {
          console.log('У вас нет сохраненных статей');
        }
        //
      },
    )
    .catch((err) => {
      console.log(err);
    });
});

// Удаление карточки
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

// logout
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
