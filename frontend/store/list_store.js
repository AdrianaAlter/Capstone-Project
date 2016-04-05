var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var ListConstants = require('../constants/list_constants.js');

var ListStore = new Store(Dispatcher);
var _lists = [];

ListStore.all = function () {
  return _lists.slice();
};

ListStore.reset = function (lists) {
  _lists = lists;
};

ListStore.resetSingleList = function (list) {
  _lists = [];
  _lists.push(list);
};

ListStore.find = function (id) {
  for (var i = 0; i < _lists.length; i++) {
    if (_lists[i].id === id) { return _lists[i]; }
  }
};



ListStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case ListConstants.ALL_LISTS_RECEIVED:

      ListStore.reset(payload.lists);
      ListStore.__emitChange();

      break;
    case ListConstants.SINGLE_LIST_RECEIVED:
      ListStore.resetSingleList(payload.list);
      ListStore.__emitChange();
      break;
  }

};

module.exports = ListStore;
