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
  async _request(url, method, someHeader, toString) {
    try {
      const res = await fetch(this.baseUrl + url, {
        method,
        headers: someHeader,
        credentials: this.credentialsState,
        body: toString ? JSON.stringify(toString) : undefined,
      });
      // if (res.status >= 400) {
      //   return Promise.reject(res.statusText);
      // }
      if (res.ok) return res.json();
    } catch (e) {
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
