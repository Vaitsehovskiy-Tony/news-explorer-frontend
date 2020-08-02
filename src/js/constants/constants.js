import MainApi from '../api/MainApi';
import NewsApi from '../api/NewsApi';
import Article from '../components/Article';
import ArticleList from '../components/ArticleList';

export const PROPS = {
  isLoggedIn: '',
};

const articlesList = document.querySelector('.articles-list');
const resultsButton = document.querySelector('.results__button');

export const article = new Article();

export const cardList = new ArticleList(articlesList, article, resultsButton);

export const mainApi = new MainApi({
  baseUrl: 'https://myownnews.ru.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const newsApi = new NewsApi({
  baseUrl: 'https://praktikum.tk/news/v2/everything?language=ru&apiKey=6aa47727b1b54808b0244a1d2c266dab&',
  headers: {
    'Content-Type': 'application/json',
  },
});
