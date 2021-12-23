// NewsApi. Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции, и единственный обязательный метод getNews. getNews возвращает список новостей на основе запроса.

// Каждый из методов этих классов возвращает промис, содержит в себе обработку ответа и обязательный блок .catch(), бросающий ошибку дальше с помощью Promise.reject или throw. Также классы MainApi и NewsApi не должны взаимодействовать с DOM напрямую из своих методов.

export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  // eslint-disable-next-line consistent-return
  async getInitialCards(text) {
    try {
      const res = await fetch(`${this.baseUrl}q=${text}`, {
        method: 'GET',
      });
      if (res.ok) return res.json();
    } catch (e) {
      // eslint-disable-next-line no-unused-expressions
      `error: ${e}`;
    }
  }
}
