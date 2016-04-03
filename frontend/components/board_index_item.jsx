var React = require('react');
var Link = require('react-router').Link;

var BoardIndexItem = React.createClass({

  render: function () {

    return(
      <li><Link to={"/boards/" + this.props.board.id}>{this.props.board.title}</Link></li>
    );
  }
});

module.exports = BoardIndexItem;
