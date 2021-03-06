var React = require('react');
var NotificationStore = require('../store/notification_store.js');
var NoteStore = require('../store/note_store.js');
var SessionStore = require('../store/session_store.js');
var NotificationIndexItem = require('./notification_index_item.jsx');
var ApiUtil = require('../util/api_util.js');

var NotificationIndex = React.createClass({

  getInitialState: function () {
    return { notifications: this.getStateFromStore(), notificationsDisplayed: false };
  },

  getStateFromStore: function () {
    return NotificationStore.forUser(SessionStore.currentUser().id);
  },

  setNewState: function () {
      this.setState( { notifications: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listener = NotificationStore.addListener(this.setNewState);
    // this.noteListener = NoteStore.addListener(this.setNewState);
    ApiUtil.fetchAllNotifications();
  },

  componentWillUnmount: function () {
    if (this.listener) {this.listener.remove();}
    // if (this.noteListener) {this.noteListener.remove();}
  },

  toggleDisplay: function () {
    this.state.notificationsDisplayed ? this.setState({ notificationsDisplayed: false }) : this.setState({ notificationsDisplayed: true });
  },

  show: function () {
    this.setState({ notificationsDisplayed: true });
  },
  hide: function () {
    this.setState({ notificationsDisplayed: false });
  },

  render: function () {

    if (!this.state.notifications) { return <div></div>};

    var notificationItems = this.state.notifications.map(function (notification) {
      return <NotificationIndexItem key={notification.id} id={notification.id} boardId={notification.board_id} author={notification.author.user_name} />;
    });

    var notificationsDisplayed = this.state.notificationsDisplayed ? "notifications-list" : "hidden";
    var none = notificationItems.length < 1 ? <li>No notifications</li> : null;

    return (
            <li className="notifications-index group" onMouseOver={this.show} onClick={this.toggleDisplay} onMouseLeave={this.hide}><h1>{notificationItems.length}</h1>

                <ul className={notificationsDisplayed} onClick={this.toggleDisplay} onMouseLeave={this.hide}>
                  {none}
                  {notificationItems}
                </ul>


            </li>
          );
    }

});





module.exports = NotificationIndex;
