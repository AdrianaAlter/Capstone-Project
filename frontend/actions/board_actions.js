var BoardConstants = require('../constants/board_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var BoardActions = {

  receiveAllBoards: function (boards) {
    debugger

    Dispatcher.dispatch({
      actionType: "BoardConstants.ALL_BOARDS_RECEIVED",
      boards: boards
    });

  }
};

module.exports = BoardActions;
