var React = require('react');

var BoardIndexItem = React.createClass({

  render: function () {

    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }




});


module.exports = BoardIndexItem;
