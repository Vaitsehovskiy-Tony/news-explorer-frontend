export default class ArticleList {
  constructor(container, card, button) {
    this.container = container;
    this.card = card;
    this.button = button;
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

  renderMainPage(newArticles, keyword, likedArticles) {
    for (let i = 0; i < newArticles.length; i += 1) {
      const newCard = this.card.create(
        newArticles[i], keyword,
      );
      if (likedArticles.length > 0) {
        let isLike = false;
        // eslint-disable-next-line prefer-const
        let newArticle = newArticles[i];

        for (let n = 0; n < likedArticles.length; n += 1) {
          isLike = likedArticles.some((savedArticle) => savedArticle.link === newArticle.url);
        }
        if (isLike) {
          newCard
            .querySelector('.article-card__like-icon')
            .classList.toggle('article-card__like-icon_liked');
        }
      }

      this.container.appendChild(newCard);
    }
  }
}
