var React = require('react');

var CardIndexItem = React.createClass({

  render: function () {
    return(
      <li className="card-index-item">{this.props.card.title}</li>
    );
  }
});

module.exports = CardIndexItem;
