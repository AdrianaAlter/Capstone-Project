var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var NotificationConstants = require('../constants/notification_constants.js');

var NotificationStore = new Store(Dispatcher);
var _notifications = [];

NotificationStore.all = function () {
  return _notifications;
};

NotificationStore.resetNotifications = function (notifications) {
  _notifications = notifications;
};

NotificationStore.resetNotification = function (notification) {
  var i = NotificationStore.findOutIndex(notification);
  if (_notifications[i]) {
    _notifications[i] = notification;
  }
  else {
    _notifications.push(notification);
  }
};

NotificationStore.findOutIndex = function (notification) {
  for (var i = 0; i < _notifications.length; i++) {
    if (_notifications[i].id == notification.id) { return i; }
  }
};


NotificationStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case NotificationConstants.ALL_NOTIFICATIONS_RECEIVED:
      NotificationStore.resetNotifications(payload.notifications);
      NotificationStore.__emitChange();
      break;
    case NotificationConstants.SINGLE_NOTIFICATION_RECEIVED:
      NotificationStore.resetNotification(payload.notification);
      NotificationStore.__emitChange();
      break;
    }
};

module.exports = NotificationStore;
