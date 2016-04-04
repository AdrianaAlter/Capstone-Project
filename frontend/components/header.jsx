var React = require('react');
var ApiUtil = require('../util/api_util.js');
var SessionButtons = require('./session.jsx');
var Search = require('./search.jsx');

var Header = React.createClass({
  render: function () {


    return(
      <header className="header group">
        <nav className="header-nav group">
          <ul>
            <li>Boards</li>
            <li className="search"><Search /></li>
            <li className="header-logo">CatTrello</li>
          </ul>
          <SessionButtons />
        </nav>
      </header>
    );
  }

});

module.exports = Header;
