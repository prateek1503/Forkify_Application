class SearchView {
  _parentEl = document.querySelector('.search');
  _defaultQuery = 'pizza'; // Added default query

  constructor() {
    this._initializeSearch(); // Call the method to initialize the search
  }

  _initializeSearch() {
    this._parentEl.querySelector('.search__field').value = this._defaultQuery;
    this._triggerSearch();
  }

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  _triggerSearch() {
    const submitEvent = new Event('submit', {
      bubbles: true,
      cancelable: true,
    });
    this._parentEl.dispatchEvent(submitEvent);
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();