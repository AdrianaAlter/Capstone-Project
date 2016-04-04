var React = require('react');
var SessionStore = require('../store/session_store.js');
var ApiUtil = require('../util/api_util');

var SessionButtons = React.createClass ({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
		return {
			currentUser: null
		};
	},

	componentDidMount: function () {
		this.sessionStoreToken = SessionStore.addListener(this.handleChange);
		this.handleChange();
	},

	componentWillUnmount: function () {
		this.sessionStoreToken.remove();
	},

	handleChange: function () {
		if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
		}
	},

	render: function () {
		var logout;
    var loggedInAs;
    if (this.state.currentUser) {
      logout =
				<li
					className="logout-button"
					onClick={ApiUtil.logOut}>
					Logout
				</li>;
      loggedInAs = <li className="user-name">{this.state.currentUser.user_name}</li>;
    }
    
		return(
			<ul className="session-buttons group">
        {loggedInAs}
				{logout}
			</ul>
		);
	}
});

module.exports = SessionButtons;
