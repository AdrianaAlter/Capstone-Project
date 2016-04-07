var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var ListConstants = require('../constants/list_constants.js');

var ListStore = new Store(Dispatcher);
var _lists = [];

ListStore.all = function () {
  return _lists.slice();
};

ListStore.reset = function (lists) {
  _lists = lists;
};

ListStore.resetSingleList = function (list) {

  var oldList = ListStore.find(list.id);

  if (oldList) {
    _lists[_lists.indexOf(oldList)] = list;
  }

  else {
    _lists.push(list);
  }

  // var ids = [];
  // for (var i = 0; i < _lists.length; i++) {
  //   ids.push(_lists[i].id);
  // }
  //
  //
  // if (!ids.includes(list.id)){
  //   _lists.push(list);
  // }
  //
  // else {
  //   for (var j = 0; j < _lists.length; j++) {
  //     if (_lists[j].id === list.id)
  //       _lists[j] = list;
  //     }
  //   }
};

// ListStore.resetAllCards = function (cards) {
//   if (!cards) {
//
//   }
// };

ListStore.resetSingleCard = function (card) {
  var list = ListStore.find(card.list_id);

  var oldCard = ListStore.findCardInList(card, list);

  if (oldCard) {
    list.cards[list.cards.indexOf(oldCard)] = card;
  }
  else {
    list.push(card);
  }
  // var cardIds = [];
  // for (var i = 0; i < list.cards.length; i++) {
  //   cardIds.push(list.cards[i].id);
  // }
  //
  // if (!cardIds.includes(card.id)) {
  //   list.cards.push(card);
  // }
  // else {
  //   var j = list.cards.indexOf(card);
  //   list.cards[j] = card;
  // }
  //
  ListStore.resetSingleList(list);
};


ListStore.find = function (id) {
  for (var i = 0; i < _lists.length; i++) {
    if (_lists[i].id === id) { return _lists[i]; }
  }
};

ListStore.findCardInList = function (card, list) {
  for (var i = 0; i < list.cards.length; i++) {
    if (list.cards[i].id === card.id) { return list.cards[i]; }
  }
};

ListStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case ListConstants.ALL_LISTS_RECEIVED:
      ListStore.reset(payload.lists);
      ListStore.__emitChange();
      break;
    case ListConstants.SINGLE_LIST_RECEIVED:
      ListStore.resetSingleList(payload.list);
      ListStore.__emitChange();
      break;
    // case ListConstants.ALL_CARDS_RECEIVED:
    //   // ListStore.resetAllCards(payload.cards);
    //   ListStore.__emitChange();
    //   break;
    case ListConstants.SINGLE_CARD_RECEIVED:
      ListStore.resetSingleCard(payload.card);
      ListStore.__emitChange();
      break;
  }

};

module.exports = ListStore;
