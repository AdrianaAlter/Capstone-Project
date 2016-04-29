var React = require('react');
var BoardActions = require('../actions/board_actions.js');

var NewBoardForm = React.createClass({

	getInitialState: function () {
		return({ title: "", private: true });
	},


  createNewBoard: function (e) {

      e.preventDefault();
      var board = {};
      board.title = this.state.title;
			board.private = this.state.private;
      ApiUtil.createNewBoard(board);
      this.setState({ title: "" });
      this.props.closeModal();
  },


	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},

	updatePrivacy: function (e) {
		this.state.private == true ? this.setState({ private: false }) : this.setState({ private: true });
	},

	render: function () {

		return(
				<form className="new-board-form">
          <h1>Create Board</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<input className="checkbox" type="checkbox" onClick={this.updatePrivacy}></input>
					<button onClick={this.createNewBoard}>Create</button>
				</form>
		);
	}

});


module.exports = NewBoardForm;
