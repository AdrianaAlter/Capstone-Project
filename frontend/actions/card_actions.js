var CardConstants = require('../constants/card_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var CardActions = {

  receiveAllCards: function (cards) {

    Dispatcher.dispatch({
      actionType: CardConstants.ALL_CARDS_RECEIVED,
      cards: cards,
      
    });
  },

  receiveSingleCard: function (card) {
    Dispatcher.dispatch({
      actionType: CardConstants.SINGLE_CARD_RECEIVED,
      card: card
    });
  }
};

module.exports = CardActions;
