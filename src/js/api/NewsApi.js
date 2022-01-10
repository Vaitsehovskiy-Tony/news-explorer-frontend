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
