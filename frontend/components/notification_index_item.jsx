var React = require('react');
var Link = require('react-router').Link;
var NotificationIndexItem = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  deleteNotification: function () {
    var boardId = this.props.boardId;
    var id = this.props.id;
    ApiUtil.deleteNotification(id);
  },

  goToBoard: function () {
    this.context.router.push("/boards/" + this.props.boardId);
  },

  render: function () {
    var dnb = <i className="fa fa-check-circle" aria-hidden="true" onClick={this.deleteNotification}></i>;

    return(
      <li className="notification-index-item" onClick={this.goToBoard}>
        <h1>{this.props.author} left you a note!</h1>
        {dnb}
      </li>
    );
  }
});

module.exports = NotificationIndexItem;
