var React = require('react');
var Header = require('./header');
var BoardIndex = require('./board_index');
var SessionStore = require('../store/session_store.js');
var ApiUtil = require('../util/api_util');

var App = React.createClass({

  render: function () {


    return(
      <div id="app">
        <Header />
        <BoardIndex />
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
