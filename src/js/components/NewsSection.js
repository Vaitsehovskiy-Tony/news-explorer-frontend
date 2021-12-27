export default class NewsSection {
  constructor(newsSection, keyword, {cardCreator, newsToCheck}) {
    this._container = newsSection.cardGrid;
    this._showMoreButton = newsSection.showMoreButton;
    this._keyword = keyword;
    this._cardCreator = cardCreator;
    this._newsToCheck = newsToCheck;
    this._showMoreHandler = this._showMoreLogic.bind(this);
  }

  //очистка контейнера
  //проверка есть ли сохраненные новости среди выдачи(для залогиненых пользователей)
  //рендер 3 новостей
  //инсталл слушателя событий
  showNews() {
    this._cleanContainer();
    this._checkIfSaved();
    this._checkNewsLength();
    this._moreButtonListener();
  }

  // рендер 3 новостей
  _checkNewsLength() {
    if (this._newsToRender.length > 3) {
      this._showMoreButton.classList.remove('results__show-more_hidden');
      this._newsSlicer();
    } else {
      this._showMoreButton.classList.add('results__show-more_hidden');
      this._render(this._newsToRender, this._keyword);
    }
  }

  // добавление одной готовой карточки
  addCard(card) {
    this._container.appendChild(card);
  }

  removeCard(card) {
    this._container.removeChild(card);
  }

  // отрисовка массива из конструктора
  _render(arr, keyword) {
    for (let i = 0; i < arr.length; i++) {
      this._cardCreator(arr[i], keyword);
     }
  }

  // рендер трех карточек с обрезкой основного массива
  _newsSlicer() {
    const newsPack = this._newsToRender.slice(0, 3);
    this._newsToRender.splice(0, 3);
    this._render(newsPack, this._keyword);
  }

  // логика слушателя
  _showMoreLogic(evt){
    evt.preventDefault();
    this._checkNewsLength();
    this._newsSlicer();
    this._removeMoreButtonListener();
    this._moreButtonListener();
  }

  // установка и удаление слушателей кнопки "показать еще"
  _moreButtonListener() {
    this._showMoreButton.addEventListener('click', this._showMoreHandler)
  }

  _removeMoreButtonListener() {
    this._showMoreButton.removeEventListener('click', this._showMoreHandler)
  }

  _cleanContainer() {
    this._container.innerHTML = '';
  }

  getInfo() {
    const arr = [];
    this._newsToRender.forEach(i => arr.push(i.firstElementChild.getAttribute(keyword)));
    console.log(arr);
  }

  _checkIfSaved() {
      if (this._newsToCheck.newNews === undefined) {
        this._newsToRender = this._newsToCheck.savedNews;
      } else if (this._newsToCheck.savedNews === undefined) {
        this._newsToRender = this._newsToCheck.newNews;
      } else {
        this._newsToCheck.newNews.forEach(card => {
          card.isLiked = this._newsToCheck.savedNews
          .some(savedCard => savedCard.link == card.url);
        })
        this._newsToRender = this._newsToCheck.newNews
      }
    }
}
