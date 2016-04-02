var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var SearchResultConstants = require('../constants/search_result_constants');

var SearchResultsStore = new Store(Dispatcher);

var _results = [];
var _meta = {};

SearchResultsStore.all = function () {
	return _results.slice(0);
};

SearchResultsStore.meta = function () {
	return $.extend(true, {}, _meta);
};

SearchResultsStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case SearchResultConstants.SEARCH_RESULTS_RECEIVED:
			_results = payload.searchResults;
			_meta = payload.meta;
			SearchResultsStore.__emitChange();
			break;
	}
};

module.exports = SearchResultsStore;
