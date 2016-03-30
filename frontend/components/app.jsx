var React = require('react');
var Header = require('./header');
var BoardIndex = require('./board_index');

var App = React.createClass({
  render: function () {
    return(
      <div id="app">
        <Header />
        <BoardIndex />
      </div>
    );
  }
});


module.exports = App;
