var React = require('react');
var Link = require('react-router').Link;
var NotificationIndexItem = React.createClass({

  deleteNotification: function () {
    var boardId = this.props.boardId;
    var id = this.props.id;
    ApiUtil.deleteNotification(id);
  },

  render: function () {
    var dnb = <i className="fa fa-check-circle" aria-hidden="true" onClick={this.deleteNotification}></i>;
      
    return(
      <li className="notification-index-item">
        <Link to={"/boards/" + this.props.boardId}><h1>{this.props.author} left you a note!</h1></Link>
        {dnb}
      </li>
    );
  }
});

module.exports = NotificationIndexItem;
