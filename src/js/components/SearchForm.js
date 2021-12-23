export default class SearchForm {
  // constructor({ searchSelector, callback }) {
    constructor(searchSelector, search, {getNews}) {
    this._searchSelector = searchSelector;
    this._results = search.results;
    this._resultsNothing = search.resultsNothing;
    this._resultsSearching = search.resultsSearching;
    this._getNews = getNews;
    this._searchHandler = this._searchLogic.bind(this);
    // this.callback = callback;
  }
  // попробовать переделать все открытые-спрятанные окна с помощью модификатора active

  setSearchListener() {
    this._searchSelector.addEventListener('submit', this._searchHandler)
  }

  _newsSearching() {
    this._close(this._results);
    this._open(this._resultsSearching);
    this._close(this._resultsNothing);
    // this._close(this._resultsOk);
  }

  newsFound() {
    this._open(this._results);
    this._close(this._resultsSearching);
    this._close(this._resultsNothing);
    // this._open(this._resultsOk);
  }

  newsNoResultsCheck(res) {
    this.newCards = res.articles;
    if ((this.newCards.length === 0) || (this.newCards.length === undefined)) {
      this._close(this._results);
      this._close(this._resultsSearching);
      this._open(this._resultsNothing);
      // this._close(this._resultsOk);
    } else {
      this._open(this._results);
      // унифицировать строку
      this._results.classList.remove('results_hidden');
      this._close(this._resultsSearching);
      this._close(this._resultsNothing);
      // this._open(this._resultsOk);
    }
  }

  startSearch(searchSelector) {
    searchSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._newsSearching();
    })
  }

  _searchLogic(evt) {
    evt.preventDefault();
    this._newsSearching();
    this._getNews(this._searchSelector.keyword.value);
  }

    // eslint-disable-next-line class-methods-use-this
  _open(obj) {
    obj.classList.remove('results__loading_hidden');
  }

  // eslint-disable-next-line class-methods-use-this
  _close(obj) {
    obj.classList.add('results__loading_hidden');
  }
}
