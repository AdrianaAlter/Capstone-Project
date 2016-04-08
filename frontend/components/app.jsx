var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var BoardIndex = require('./board_index');
var SessionStore = require('../store/session_store.js');
var ApiUtil = require('../util/api_util');

var App = React.createClass({

  render: function () {

  return(
      <div id="app">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});


module.exports = App;
