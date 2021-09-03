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
  baseUrl: 'http://newsexplorer.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/everything?q=Apple&from=2021-09-03&sortBy=popularity&apiKey=6aa47727b1b54808b0244a1d2c266dab&',
  headers: {
    'Content-Type': 'application/json',
  },
});

