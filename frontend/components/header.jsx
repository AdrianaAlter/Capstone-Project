var React = require('react');
var ApiUtil = require('../util/api_util.js');
var SessionButtons = require('./session.jsx');
var Search = require('./search.jsx');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function () {

  return(
      <header className="header">
        <nav className="header-nav group">
          <ul>
            <li><Link to={"/"}>Boards</Link></li>
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
