var NotificationConstants = require('../constants/notification_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var NotificationActions = {

  receiveAllNotifications: function (notifications) {
    Dispatcher.dispatch({
      actionType: NotificationConstants.ALL_NOTIFICATIONS_RECEIVED,
      notifications: notifications
    });
  },

  receiveSingleNotification: function (notification) {
    Dispatcher.dispatch({
      actionType: NotificationConstants.SINGLE_NOTIFICATION_RECEIVED,
      notification: notification
    });
  },

};

module.exports = NotificationActions;
