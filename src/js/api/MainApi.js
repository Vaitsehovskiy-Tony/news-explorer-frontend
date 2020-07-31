/* eslint-disable class-methods-use-this */
export default class MainApi {
  constructor(options) {
    this.options = options;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.resolve(res.json());
    }
    console.log(res.json);
    return res.json();
  }

  signUp(email, password, name) {
    return fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  logout() {
    return fetch(`${this.options.baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.resolve(res);
        }
        return res;
      });
  }

  signIn(email, password) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  getArticles() {
    return fetch(`${this.options.baseUrl}/articles`, {
      method: 'GET',
      headers: {
        authorization: this.options.headers.authorization,
      },
      credentials: 'include',
      withCredentials: true,
    })
      .then((res) => this._getResponseData(res));
  }

  postArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this.options.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      withCredentials: true,
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  deleteArticle(articleId) {
    return fetch(`${this.options.baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.options.headers.authorization,
      },
      credentials: 'include',
      withCredentials: true,
    }).then((res) => this._getResponseData(res));
  }

  getUserInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      withCredentials: true,
      headers: {
        authorization: this.options.headers.authorization,
      },
    })
      .then((res) => this._getResponseData(res));
  }
}
