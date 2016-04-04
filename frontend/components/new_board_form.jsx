var React = require('react');
var BoardActions = require('../actions/board_actions.js');

var NewBoardForm = React.createClass({

	getInitialState: function () {
		return({ title: "" });
	},

	// toggleDisplayed: function () {
	// 	this.setState({ displayed: true });
	// },

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
		// this.toggleDisplayed();
	},


	render: function () {

		// var className = this.state.displayed === false ? "new-board-form hidden" : "new-board-form";


		return(
				<form className="new-board-form" onSubmit={this.handleSubmit}>
          <h1>Create Board</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onInput={this.updateTitle}></input>
					<button>Create</button>
				</form>
		);
	}

});


module.exports = NewBoardForm;
