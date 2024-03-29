export default class SavedCard {
  constructor(cardTemplate, newsCard, {itemToRemove}) {
    this._cardTemplate = cardTemplate;
    this._itemToRemove = itemToRemove;
    this._cardReminderRemove = newsCard.cardReminderRemove;
    this._removeHandler = this._removeLogic.bind(this);
  }

  // возвращает шаблон карточки
  _getTemplate() {
    return document.querySelector(this._cardTemplate).content.cloneNode(true);
  }

  // создания карточки
  create(item) {
    this.date = new Date();
    this.newCard = this._getTemplate();
    this._cardId = item._id;
    this.newCard.querySelector('.card__login-reminder-text').textContent = this._cardReminderRemove;
    this.newCard.querySelector('.card__date').textContent = this.date.toUTCString(item.date);
    this.newCard.querySelector('.card__title').textContent = item.title;
    this.newCard.querySelector('.card__subtitle').textContent = item.text;
    this.newCard.querySelector('.card__source').textContent = item.source;
    this.newCard.querySelector('.card__img').setAttribute('src', `${item.image}`);
    this.newCard.firstElementChild.setAttribute('src', `${item.link}`);
    this.newCard.querySelector('.card__tag').classList.add('active');
    this.newCard.querySelector('.card__tag-text').textContent = item.keyword;
    this._removeListener();
    this.newCard.firstElementChild.setAttribute('_id', `${item._id}`);
    return this.newCard;
  }

  // слушатель удаления
  _removeListener(){
    this.newCard.firstElementChild.addEventListener('click', this._removeHandler)
  }

  // логика удаления
  _removeLogic(evt) {
    if (evt.target.classList.contains('card__bookmark_bin')) {
      this._itemToRemove(this._cardId, evt.target.parentElement);
    }
  }
}
