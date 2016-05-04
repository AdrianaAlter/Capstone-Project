var React = require('react');
var ApiUtil = require('../util/api_util.js');
var SessionButtons = require('./session.jsx');
var Search = require('./search.jsx');

var Link = require('react-router').Link;


var Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  boards: function () {
    this.context.router.push("/");
  },

  render: function () {

  return(
      <header className="header">
        <nav className="header-nav group">
          <ul>
            <li onClick={this.boards}>Boards</li>
            <li className="search"><Search /></li>
            <li className="header-logo"><i className="fa fa-paw" aria-hidden="true"></i>CatTrello<i className="fa fa-paw" aria-hidden="true"></i></li>
          </ul>
          <SessionButtons />
        </nav>
      </header>
    );
  }

});

module.exports = Header;
