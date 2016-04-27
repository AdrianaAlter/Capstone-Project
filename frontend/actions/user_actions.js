var UserConstants = require('../constants/user_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var UserActions = {


  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.SINGLE_USER_RECEIVED,
      user: user
    });
  }


};

module.exports = UserActions;
