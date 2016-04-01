var React = require('react');
var BoardActions = require('../actions/board_actions.js');

var NewBoardForm = React.createClass({

	getInitialState: function () {
		return({ title: ""});
	},

	componentDidMount: function () {

	},

	updateTitle: function (e) {
		var newTitle = event.currentTarget.value;
		this.setState({ title: newTitle });
	},

	handleSubmit: function (e) {
		event.preventDefault();
		var data = {
			title: this.state.title,
			body: this.state.body
		};
		BoardActions.createNewBoard(data);
		this.setState({ title: "" });
	},


	render: function () {
		return(
			<div className="new-board-form">
				<h1>Create Board</h1>
				<form onSubmit={this.handleSubmit}>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onInput={this.updateTitle} />
					<input className="create-board" type="submit" value="Create" />
				</form>
			</div>
		);
	}

});


module.exports = NewBoardForm;
