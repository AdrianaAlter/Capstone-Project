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

	createNewBoard: function (board) {
		ApiUtil.createNewBoard(data);
	}

};

module.exports = BoardActions;
