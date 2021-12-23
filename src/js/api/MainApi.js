// MainApi. Отвечает за взаимодействие с написанным вами Node.js API. Конструктор этого класса принимает опции, необходимые для инициализации работы с API. Вот список обязательных методов:
// signup регистрирует нового пользователя;
// signin аутентифицирует пользователя на основе почты и пароля;
// getUserData возвращает информацию о пользователе;
// getArticles забирает все статьи;
// createArticle создаёт статью;
// removeArticle удаляет статью.

// Каждый из методов этих классов возвращает промис, содержит в себе обработку ответа и обязательный блок .catch(), бросающий ошибку дальше с помощью Promise.reject или throw. Также классы MainApi и NewsApi не должны взаимодействовать с DOM напрямую из своих методов.


/* eslint-disable class-methods-use-this */
export default class MainApi {
  constructor(options) {
    this.isLoggedIn = false;
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.credentialsState = options.credentialsState;
    this.logoutLink = options.logoutLink;
    this.signInLink = options.signInLink;
    this.signUpLink = options.signUpLink;
    this.articlesLink = options.articlesLink;
    this.usersLink = options.usersLink;
    this.usersMeLink = options.usersMeLink;
    this.headersAuth = Object.assign(
      {},
      this.headers,
      {
        authorization: `Bearer ${localStorage.getItem('token')}`
      });
  }

  // впомогательная функция для запросов на сервер
  // eslint-disable-next-line consistent-return
  async _request(url, method, someHeader, toString) {
    try {
      const res = await fetch(this.baseUrl + url, {
        method,
        headers: someHeader,
        credentials: this.credentialsState,
        // authorization: this.headers.authorization,
        body: toString ? JSON.stringify(toString) : undefined,
      });
      if (res.ok) return res.json();
    } catch (e) {
      // eslint-disable-next-line no-unused-expressions
      `error: ${e}`;
    }
  }

  signUp(email, password, name) {
    return this._request(this.signUpLink, 'POST', this.headers, {
      email,
      password,
      name,
    });
  }

  signIn(email, password) {
    return this._request(this.signInLink, 'POST', this.headers, {
      email,
      password,
    });
  }

  logout() {
    return this._request(this.logoutLink, 'POST', this.headers);
  }

  getArticles() {
    return this._request(this.articlesLink, 'GET', this.headers);
  }

  postArticle({keyword, title, text, date, source, link, image}) {
    return this._request(this.articlesLink, 'POST', this.headers, {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    });
  }

  deleteArticle(articleId) {
    return this._request(this.articlesLink + articleId, 'DELETE', this.headers);
  }

  getUserInfo() {
    return this._request(this.usersLink + this.usersMeLink, 'GET', this.headersAuth);
  }
}

// _getResponseData(res) {
//   if (!res.ok) {
//     return Promise.resolve(res.json());
//   }
//   console.log(res.json);
//   return res.json();
// }

// signUp(email, password, name) {
//   return fetch(`${this.options.baseUrl}/signup`, {
//     method: 'POST',

//     // браузер пошлёт куки в специальном заголовке Cookie вместе с запросом
//     // credentials: 'include',
//     headers: {
//       // authorization: this.options.headers.authorization,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email,
//       password,
//       name,
//     }),
//   })
//     .then((res) => this._getResponseData(res));
//   // .catch((err) => console.log(err, err.name, err.text));
// }

// logout() {
//   return fetch(`${this.options.baseUrl}/logout`, {
//     method: 'POST',
//     credentials: 'include',
//   })
//     .then((res) => {
//       if (!res.ok) {
//         return Promise.resolve(res);
//       }
//       return res;
//     });
// }

// signIn(email, password) {
//   return fetch(`${this.options.baseUrl}/signin`, {
//     method: 'POST',
//     headers: {
//       authorization: this.options.headers.authorization,
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   })
//     .then((res) => this._getResponseData(res));
// }

// getArticles() {
//   return fetch(`${this.options.baseUrl}/articles`, {
//     method: 'GET',
//     headers: {
//       authorization: this.options.headers.authorization,
//     },
//     credentials: 'include',
//     withCredentials: true,
//   })
//     .then((res) => this._getResponseData(res));
// }

//   postArticle(keyword, title, text, date, source, link, image) {
//     return fetch(`${this.options.baseUrl}/articles`, {
//       method: 'POST',
//       headers: {
//         authorization: this.options.headers.authorization,
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//       withCredentials: true,
//       body: JSON.stringify({
//         keyword,
//         title,
//         text,
//         date,
//         source,
//         link,
//         image,
//       }),
//     })
//       .then((res) => this._getResponseData(res));
//   }

//   deleteArticle(articleId) {
//     return fetch(`${this.options.baseUrl}/articles/${articleId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: this.options.headers.authorization,
//       },
//       credentials: 'include',
//       withCredentials: true,
//     }).then((res) => this._getResponseData(res));
//   }

//   getUserInfo() {
//     return fetch(`${this.options.baseUrl}/users/me`, {
//       method: 'GET',

//       // сл строчка ведет к проблемам с CORS
//       credentials: 'include',
//       withCredentials: true,
//       headers: {
//         authorization: this.options.headers.authorization,
//         'Access-Control-Allow-Origin': '*',
//       },
//     })
//       .then((info) => this._getResponseData(info));
//   }
// }

// signUp(email, password, name) {
//   return fetch(`${this.options.baseUrl}/signup`, {
//     method: 'POST',

//     // браузер пошлёт куки в специальном заголовке Cookie вместе с запросом
//     // credentials: 'include',
//     headers: {
//       // authorization: this.options.headers.authorization,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email,
//       password,
//       name,
//     }),
//   })
//     .then((res) => this._getResponseData(res));
//   // .catch((err) => console.log(err, err.name, err.text));
// }
