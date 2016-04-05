var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var CardConstants = require('../constants/card_constants.js');

var CardStore = new Store(Dispatcher);
var _cards = [];

CardStore.all = function () {
  return _cards.slice();
};
//
CardStore.resetCards = function (cards) {
  _cards = cards;
};
//
CardStore.resetCard = function (card) {
  _cards = [];
  _cards.push(card);
};
//
CardStore.find = function (id) {
  for (var i = 0; i < _cards.length; i++) {
    if (_cards[i].id === id) { return _cards[i]; }
  }
};

CardStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case CardConstants.ALL_CARDS_RECEIVED:
      CardStore.resetCards(payload.cards);
      CardStore.__emitChange();
      break;
    case CardConstants.SINGLE_CARD_RECEIVED:
      CardStore.resetCard(payload.card);
      CardStore.__emitChange();
      break;
  }
};

module.exports = CardStore;
