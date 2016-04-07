var ListConstants = require('../constants/list_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var ListActions = {

	 receiveAllLists: function (lists) {
		 Dispatcher.dispatch({
			 actionType: ListConstants.ALL_LISTS_RECEIVED,
			 lists: lists
		 });
   },

   receiveSingleList: function (list) {
      Dispatcher.dispatch({
       actionType: ListConstants.SINGLE_LIST_RECEIVED,
       list: list
     });
   },

   receiveAllCards: function (info) {
     Dispatcher.dispatch({
       actionType: ListConstants.ALL_CARDS_RECEIVED,
       cards: info
     });
   },

   receiveSingleCard: function (card) {
     Dispatcher.dispatch({
       actionType: ListConstants.SINGLE_CARD_RECEIVED,
       card: card
     });
   }

};

module.exports = ListActions;
