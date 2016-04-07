var BoardConstants = require('../constants/board_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var BoardActions = {

  receiveAllBoards: function (boards) {
    Dispatcher.dispatch({
      actionType: BoardConstants.ALL_BOARDS_RECEIVED,
      boards: boards
    });
  },

  receiveSingleBoard: function (board) {
    Dispatcher.dispatch({
      actionType: BoardConstants.SINGLE_BOARD_RECEIVED,
      board: board
    });
  },

  receiveAllLists: function (info) {

    Dispatcher.dispatch({
      actionType: BoardConstants.ALL_LISTS_RECEIVED,
      lists: info
    });
  },

  receiveSingleList: function (list) {
     Dispatcher.dispatch({
      actionType: BoardConstants.SINGLE_LIST_RECEIVED,
      list: list
    });
  }

};

module.exports = BoardActions;
