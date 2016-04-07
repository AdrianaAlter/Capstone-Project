var React = require('react');
var BoardActions = require('../actions/board_actions.js');

var EditBoardForm = React.createClass({

	getInitialState: function () {
		return({ title: "" });
	},


  editBoard: function (e) {
      e.preventDefault();
      var board = {};
      board.title = this.state.title;
      ApiUtil.editBoard(board, this.props.boardId);
      this.setState({ title: "" });
      this.props.closeModal();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},


	render: function () {
	   return(
				<form className="edit-board-form">
          <h1>Update Board</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.editBoard}>Update</button>
				</form>
		);
	}

});


module.exports = EditBoardForm;