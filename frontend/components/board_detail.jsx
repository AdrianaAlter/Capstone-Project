var React = require('react');
var ListIndex = require('./list_index.jsx');

var BoardDetail= React.createClass({

  render: function () {

    return (
      <div>
        <p>{this.props.title}</p>
    		{ListIndex}
      </div>
    );
  }
});


module.exports = BoardDetail;
