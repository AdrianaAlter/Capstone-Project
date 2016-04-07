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
};

ListStore.resetAllCards = function (cards) {
    var list = ListStore.find(cards[0].list_id);
    list.cards = cards;
    ListStore.resetSingleList(list);
};

ListStore.resetSingleCard = function (card) {
  var list = ListStore.find(card.list_id);
  var oldCard = ListStore.findCardInList(card, list);
  if (oldCard) {
    list.cards[list.cards.indexOf(oldCard)] = card;
  }
  else {
    list.cards.push(card);
  }
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
    case ListConstants.ALL_CARDS_RECEIVED:
      ListStore.resetAllCards(payload.cards);
      ListStore.__emitChange();
      break;
    case ListConstants.SINGLE_CARD_RECEIVED:
      ListStore.resetSingleCard(payload.card);
      ListStore.__emitChange();
      break;
  }

};

module.exports = ListStore;
