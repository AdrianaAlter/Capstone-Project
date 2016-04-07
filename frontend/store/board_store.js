var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var BoardConstants = require('../constants/board_constants.js');

var BoardStore = new Store(Dispatcher);
var _boards = [];

BoardStore.all = function () {
  return _boards.slice();
};

BoardStore.resetBoards = function (boards) {
  _boards = boards;

};

BoardStore.resetBoard = function (board) {

  var oldBoard = BoardStore.find(board.id);

  if (oldBoard) {
    _boards[_boards.indexOf(oldBoard)] = board;
  }

  else {
    _boards.push(board);
  }
};

BoardStore.find = function (id) {
  for (var i = 0; i < _boards.length; i++) {
    if (_boards[i].id === id) { return _boards[i]; }
  }
};

BoardStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case BoardConstants.ALL_BOARDS_RECEIVED:
      BoardStore.resetBoards(payload.boards);
      BoardStore.__emitChange();
      break;
    case BoardConstants.SINGLE_BOARD_RECEIVED:
      BoardStore.resetBoard(payload.board);
      BoardStore.__emitChange();
      break;
  }
};

module.exports = BoardStore;
