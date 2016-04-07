var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var CardConstants = require('../constants/card_constants.js');

var CardStore = new Store(Dispatcher);
var _cards = {};

CardStore.all = function (listId) {

  var cards = [];
  if (_cards[listId]) {
    var listCards = _cards[listId];
    for (var i = 0; i < listCards.length; i++) {
      cards.push(listCards[i]);
    }
  }
  return cards;
};

CardStore.resetCards = function (cards) {
  //
  // if (cards) {
  //   var listId = cards[0].list_id;
  //
  //   if (_cards[listId]) {
  //     for (var i = 0; i < cards.length; i++) {
  //       _cards[listId].push(cards[i]);
  //     }
  //   }
  //   else {
  //     _cards[listId] = [];
  //   }
  //   return _cards[listId];
  // }
  // else {
  //
  // }
};


CardStore.resetCard = function (card) {
  var listId = card.list_id;

  if (!_cards[listId]) { _cards[listId] = []; }

  var cardIds = [];
  for (var i = 0; i < _cards[listId].length; i++) { cardIds.push(_cards[listId][i].id); }

  if (cardIds.includes(card.id)) {
    for (var j = 0; i < _cards[listId].length; j++) {
      if (_cards[listId][j].id === card.id) {
        _cards[listId][j] = card;
      }
    }
  }

  else { _cards[listId].push(card); }

  return _cards[listId];
};

// CardStore.find = function (id) {
//
//
//   if (_cards[listId] && _cards[listId].include(card)) {
//     for (var i = 0; i < _cards[listId].length; i++) {
//       if (_cards[listId][i].id === card.id) {
//         _cards[listId][i] = card;
//       }
//     }
//   }
//   return _cards[listId];
// };


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
