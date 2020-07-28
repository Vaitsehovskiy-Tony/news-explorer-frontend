import MainApi from '../api/MainApi';
import NewsApi from '../api/NewsApi';

const PROPS = {
  isLoggedIn: '',
};

const mainApi = new MainApi({
  baseUrl: 'https://myownnews.ru.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/everything?pageSize=20&apiKey=6aa47727b1b54808b0244a1d2c266dab&',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {
  PROPS,
  mainApi,
  newsApi,
};
