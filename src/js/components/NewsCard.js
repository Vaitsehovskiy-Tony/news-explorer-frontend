export default class NewsCard {
  constructor(
    cardTemplate,
    isLoggedIn,
    newsCard,
    {
      removeNews,
      addNews,
    }
    ) {
    this._cardTemplate = cardTemplate;
    this._isLoggedIn = isLoggedIn;
    this._cardReminderSignin = newsCard.cardReminderSignin;
    this._cardReminderAdd = newsCard.cardReminderAdd;
    this._removeNews = removeNews;
    this._addNews = addNews;
    this._likeHandler = this._likeLogic.bind(this);
  }

  _getTemplate() {
    return document.querySelector(this._cardTemplate).content.cloneNode(true);
  }

  _chooseReminder() {
    if (this._isLoggedIn) return this._cardReminderAdd;
    else return this._cardReminderSignin;
  }

  create(item, keyword) {
    this._cardItem = item;
    this._keyword = keyword;
    this.date = new Date();
    this.newCard = this._getTemplate();
    this.newCard.querySelector('.card__login-reminder-text').textContent = this._chooseReminder();
    this.newCard.querySelector('.card__date').textContent = this.date.toUTCString(item.publishedAt);
    this.newCard.querySelector('.card__title').textContent = item.title;
    this.newCard.querySelector('.card__subtitle').textContent = item.description;
    this.newCard.querySelector('.card__source').textContent = item.source.name;
    this.newCard.querySelector('.card__img').setAttribute('src', `${item.urlToImage}`);
    this.newCard.firstElementChild.setAttribute('src', `${item.url}`);
    if (keyword) this.newCard.firstElementChild.setAttribute('keyword', `${keyword}`);
    this._wasSaved();
    this._likeListener();
    return this.newCard;
  }

  _wasSaved() {
    if (this._cardItem.isLiked) this.newCard.querySelector('.card__bookmark').classList.add('card__bookmark_logged');
  }

  _likeListener(){
    this.newCard.firstElementChild.addEventListener('click', this._likeHandler)
  }

  _likeLogic(evt) {
    if ((evt.target.classList.contains('card__bookmark_logged')) && (this._isLoggedIn == true)) {
      evt.target.classList.remove('card__bookmark_logged');
      this._removeNews(this.newCard._id);
    } else if (evt.target.classList.contains('card__bookmark') && (this._isLoggedIn == true)) {
      evt.target.classList.add('card__bookmark_logged');
      this._addNews(this._cardRepack());
    }
  }

  _cardRepack() {
    return this.cardToSave = {
      keyword: this._keyword,
      title: this._cardItem.title,
      text: this._cardItem.description,
      date: this._cardItem.publishedAt,
      source: this._cardItem.source.name,
      link: this._cardItem.url,
      image: this._cardItem.urlToImage,
    }
  }
}
