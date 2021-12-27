const currentDate = new Date();
const monthAgo = `${currentDate.getFullYear()}
                 -${currentDate.getMonth()}
                 -${currentDate.getDate()-30}`;

const newsApiConfig = {
  // const apiKeyAVasi1yevyaru = `7222a165fcf24c058fa185f9541f821b`;
  apiKeyStayPuft: '6aa47727b1b54808b0244a1d2c266dab',
  sortBy: 'everything',
  dateFrom: monthAgo,
  country: '',
  category: '',
};

const mainApiConfig = {
  // baseUrl: 'https://api.newsexplorer.nomoredomains.club/',
  baseUrl: 'http://localhost:3000/',
  credentialsState: 'include',
  logoutLink: 'logout/',
  signInLink: 'signin/',
  signUpLink: 'signup/',
  articlesLink: 'articles/',
  usersLink: 'users/',
  usersMeLink: 'me/',
  headers: {
    'Content-Type': 'application/json',
  },
};

const newsApiRequest = {
  baseUrl: 'https://nomoreparties.co/news/v2/top-headlines?'
          + `${newsApiConfig.country ? `country=${newsApiConfig.country}&` : ''}`
          + `${newsApiConfig.dateFrom ? `from=${newsApiConfig.dateFrom}&` : ''}`
          + `${newsApiConfig.sortBy ? `sortBy=${newsApiConfig.sortBy}&` : ''}`
          + `${newsApiConfig.apiKeyStayPuft ? `apiKey=${newsApiConfig.apiKeyStayPuft}&` : ''}`
          + `${newsApiConfig.category ? `category=${newsApiConfig.category}&` : ''}`,
};

export { mainApiConfig, newsApiRequest };
