export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  getInitialCards(text) {
    return (
      fetch(`${this.options.baseUrl}q=${text}`, {
        method: 'GET',
      })
    )
      .then((res) => res.json());
  }
}
