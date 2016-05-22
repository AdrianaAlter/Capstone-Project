var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var AlertConstants = require('../constants/alert_constants.js');

var AlertStore = new Store(Dispatcher);
var _alerts = [];

AlertStore.all = function () {
  return _alerts.slice();
};

AlertStore.newAlert = function (title, alert) {
  _alerts = [];
  _alerts.push(title);
  _alerts.push(alert);
};

AlertStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AlertConstants.INVALID_LOGIN:
      AlertStore.newAlert("Invalid Login", "You are obviously a dangerous (albeit fairly inept) impostor.  Or maybe you typed your credentials wrong, but that seems less plausible.  Either way, the cat does not approve.");
      AlertStore.__emitChange();
      break;
    case AlertConstants.LOG_OUT:
      AlertStore.newAlert("Goodbye!", "The cat misses you already; don't forget to come back soon!");
      AlertStore.__emitChange();
      break;
    case AlertConstants.BOARD_NOT_FOUND:
      AlertStore.newAlert("We can't find that board!", "Maybe the cat ate it.");
      AlertStore.__emitChange();
      break;
    case AlertConstants.BLANK_TITLE:
      AlertStore.newAlert("You left it blank!", "The cat is not amused.");
      AlertStore.__emitChange();
      break;
    case AlertConstants.NOTE_SENT:
      AlertStore.newAlert("Congratulations!", "The cat has deigned to send your note!");
      AlertStore.__emitChange();
      break;
    case AlertConstants.BOARD_DELETED:
      AlertStore.newAlert("Success!", "The cat has shredded this board!");
      AlertStore.__emitChange();
      break;
  }
};

module.exports = AlertStore;
