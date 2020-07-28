export default class ArticleList {
  constructor(container, card) {
    this.container = container;
    this.card = card;
  }

  addCard(cardElement) {
    this.container.appendChild(cardElement);
  }

  render(array) {
    for (let i = 0; i < array.length; i += 1) {
      const newCard = this.card.create(
        array[i],
      );

      this.container.appendChild(newCard);
    }
  }

  renderMainPage(array, keyword) {
    for (let i = 0; i < array.length; i += 1) {
      const newCard = this.card.create(
        array[i], keyword,
      );
      this.container.appendChild(newCard);
    }
  }
}
