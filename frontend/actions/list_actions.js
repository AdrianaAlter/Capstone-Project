var ListConstants = require('../constants/list_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var ListActions = {

	 receiveAllLists: function () {
		 Dispatcher.dispatch({
			 actionType: ListConstants.ALL_LISTS_RECEIVED,
			 lists: lists
		 });
	 }


};

module.exports = ListActions;
