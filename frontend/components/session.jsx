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
		else {
			this.context.router.push("/login");
		}

	},

	render: function () {

		var button;
    var loggedInAs;
    if (this.state.currentUser) {
      button =
				<button
					className="logout-button"
					onClick={ApiUtil.logOut}>
					Logout
				</button>;
      loggedInAs = <h1 className="user-name">Logged in as: {this.state.currentUser.user_name}</h1>;
    }

		return(
			<div className="session-buttons group">
				{button}
				{loggedInAs}
			</div>
		);
	}
});

module.exports = SessionButtons;
