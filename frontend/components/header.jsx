var React = require('react');
var ApiUtil = require('../util/api_util.js');
var SessionButtons = require('./session.jsx');
var Header = React.createClass({
  render: function () {


    return(
      <header className="header">
        <nav className="header-nav group">
					<h1 className="header-logo">CatTrello</h1>
					<SessionButtons />
					<ul className="header-list group">
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </nav>
      </header>
    );
  }

});

module.exports = Header;
