import MainApi from '../api/MainApi';
import NewsApi from '../api/NewsApi';

export const PROPS = {
  isLoggedIn: '',
};

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
