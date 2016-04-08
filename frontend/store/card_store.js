var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var CardConstants = require('../constants/card_constants.js');

var CardStore = new Store(Dispatcher);
var _cards = {};

CardStore.all = function () {
  var cards = [];
  var lists = Object.keys(_cards);
  lists.forEach(function (list) {
    cards.concat(_cards[list]);
  });

  return cards;
};

CardStore.resetCards = function (cards) {
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var listId = card.list_id;
    if (_cards[listId]) { _cards[listId].push(card); }
    else {
      _cards[listId] = [];
      _cards[listId].push(card);
    }
  }
  return _cards;
};

CardStore.findCardsByListId = function (list_id) {

  return _cards[list_id];
};

CardStore.resetCard = function (card) {

  var listId = card.list_id;
  if (!_cards[listId]) {
    _cards[listId] = [];
  }

  var listCards = _cards[listId];
  var cardIds = [];
  for (var i = 0; i < listCards.length; i++) {
    cardIds.push(listCards[i].id);
  }

  if (cardIds.includes(card.id)) {
    var index = cardIds.indexOf(card.id);
    listCards[index] = card;
  }
  else {
    listCards.push(card);
  }
};

  // var cardIds = [];
  // for (var i = 0; i < _cards[listId].length; i++) { cardIds.push(_cards[listId][i].id); }
  //
  // if (cardIds.includes(card.id)) {
  //   for (var j = 0; i < _cards[listId].length; j++) {
  //     if (_cards[listId][j].id === card.id) {
  //       _cards[listId][j] = card;
  //     }
  //   }
  // }
  //
  // else { _cards[listId].push(card); }
  //
  // return _cards[listId];

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
