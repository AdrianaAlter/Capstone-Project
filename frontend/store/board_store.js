var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var BoardConstants = require('../constants/board_constants.js');

var BoardStore = new Store(Dispatcher);
var _boards = [];

BoardStore.all = function () {
  return _boards.slice(0);
};

BoardStore.reset = function (boards) {
  _boards = boards;
};

BoardStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case BoardConstants.ALL_BOARDS_RECEIVED:
      reset(payload.boards);
      break;
  }
  BoardStore.__emitChange();

};

module.exports = BoardStore;
