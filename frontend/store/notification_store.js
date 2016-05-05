var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');

var NotificationConstants = require('../constants/notification_constants.js');

var NotificationStore = new Store(Dispatcher);
var _notifications = {};


NotificationStore.all = function () {
  var notifications = [];
  var userIds = Object.keys(_notifications);

  userIds.forEach(function (userId) {
    notifications.push((_notifications[userId]));
  });

  return notifications;
};

NotificationStore.resetNotifications = function (notifications) {
  for (var i = 0; i < notifications.length; i++) {
    var notification = notifications[i];
    var userId = notification.user_id;
    if (_notifications[userId]) {
      var userNotifications = _notifications[userId];
      var notificationIds = [];
      for (var j = 0; j < userNotifications.length; j++) {
        notificationIds.push(userNotifications[j].id);
      }
      if (notificationIds.includes(notification.id)) {
        var index = notificationIds.indexOf(notification.id);
        userNotifications[index] = notification;
      }
      else {
        userNotifications.push(notification);
      }
    }
    else {
      _notifications[userId] = [];
      _notifications[userId].push(notification);
    }
  }
  
  return _notifications;
};

NotificationStore.resetNotification = function (notification) {

  var userId = notification.user_id;
  if (!_notifications[userId]) {
    _notifications[userId] = [];
  }

  var userCards = _notifications[userId];
  var notificationIds = [];
  for (var i = 0; i < userCards.length; i++) {
    notificationIds.push(userCards[i].id);
  }

  if (notificationIds.includes(notification.id)) {
    var index = notificationIds.indexOf(notification.id);
    userCards[index] = notification;
  }
  else {
    userCards.push(notification);
  }
};

NotificationStore.forUser = function(userId) {
  return _notifications[userId];
};

NotificationStore.findOutIndex = function (notification) {
  for (var i = 0; i < _notifications.length; i++) {
    if (_notifications[i].id == notification.id) { return i; }
  }
};

NotificationStore.forBoard = function (userId, boardId) {
  var userNotifications = _notifications[userId];
  var result = [];
  if (userNotifications) {
    for (var i = 0; i < userNotifications.length; i++) {
      if (userNotifications[i].board_id == boardId) {
        result.push(userNotifications[i]);
      }
    }
    return result;
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
