var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var ListConstants = require('../constants/list_constants.js');

var ListStore = new Store(Dispatcher);
var _lists = [];

ListStore.all = function () {
  return _lists.slice(0);
};

ListStore.reset = function (lists) {
  _lists = lists;
};

ListStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case ListConstants.ALL_LISTS_RECEIVED:
      ListStore.reset(payload.lists);
      ListStore.__emitChange();
      break;
  }

};

module.exports = ListStore;
