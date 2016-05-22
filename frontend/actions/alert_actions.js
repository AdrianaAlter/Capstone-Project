var AlertConstants = require('../constants/alert_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var AlertActions = {
  invalidLogin: function () {
    Dispatcher.dispatch({
      actionType: AlertConstants.INVALID_LOGIN
    });
  },

  logOut: function () {
    Dispatcher.dispatch({
      actionType: AlertConstants.LOG_OUT
    });
  },

  boardNotFound: function () {
    Dispatcher.dispatch({
      actionType: AlertConstants.BOARD_NOT_FOUND
    });
  },

  blankTitle: function () {
    Dispatcher.dispatch({
      actionType: AlertConstants.BLANK_TITLE
    });
  },

  noteSent: function () {
    Dispatcher.dispatch({
      actionType: AlertConstants.NOTE_SENT
    });
  },

  boardDeleted: function () {
    Dispatcher.dispatch({
      actionType: AlertConstants.BOARD_DELETED
    });
  }

};

module.exports = AlertActions;
