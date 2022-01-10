export default class SearchForm {
    constructor(searchSelector, search, {getNews}) {
    this._searchSelector = searchSelector;
    this._results = search.results;
    this._resultsNothing = search.resultsNothing;
    this._resultsSearching = search.resultsSearching;
    this._getNews = getNews;
    this._searchHandler = this._searchLogic.bind(this);
  }

  // установка слушателя
  setSearchListener() {
    this._searchSelector.addEventListener('submit', this._searchHandler)
  }

  // отображение прелоудера
  _newsSearching() {
    this._close(this._results);
    this._open(this._resultsSearching);
    this._close(this._resultsNothing);
  }

  // если результатов ноль отображение соответствующей секции
  // иначе секция результатов
  newsNoResultsCheck(res) {
    if ((res === undefined) || (res.articles.length === 0) || (res.articles.length === undefined)) {
      this._close(this._results);
      this._close(this._resultsSearching);
      this._open(this._resultsNothing);
    } else {
      this._open(this._results);
      this._results.classList.remove('results_hidden');
      this._close(this._resultsSearching);
      this._close(this._resultsNothing);
    }
  }

  // отобразить прелоудер, затем коллбэк
  _searchLogic(evt) {
    evt.preventDefault();
    this._newsSearching();
    this._getNews(this._searchSelector.keyword.value);
  }

  // кастомный метод открыть
  _open(obj) {
    obj.classList.remove('results__loading_hidden');
  }

  // кастомный метод закрыть
  _close(obj) {
    obj.classList.add('results__loading_hidden');
  }
}
