export default class SearchForm {
    constructor(searchSelector, search, {getNews}) {
    this._searchSelector = searchSelector;
    this._results = search.results;
    this._resultsNothing = search.resultsNothing;
    this._resultsSearching = search.resultsSearching;
    this._getNews = getNews;
    this._searchHandler = this._searchLogic.bind(this);
  }

  setSearchListener() {
    this._searchSelector.addEventListener('submit', this._searchHandler)
  }

  _newsSearching() {
    this._close(this._results);
    this._open(this._resultsSearching);
    this._close(this._resultsNothing);
  }

  newsFound() {
    this._open(this._results);
    this._close(this._resultsSearching);
    this._close(this._resultsNothing);
  }

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

  _open(obj) {
    obj.classList.remove('results__loading_hidden');
  }

  _close(obj) {
    obj.classList.add('results__loading_hidden');
  }
}
