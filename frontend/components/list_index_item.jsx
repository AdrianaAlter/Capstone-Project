var React = require('react');

var ListIndexItem = React.createClass({

  render: function () {
    return(
      <li className="list-index-item">{this.props.list.title}</li>
    );
  }
});

module.exports = ListIndexItem;
