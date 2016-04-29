var React = require('react');
var BoardActions = require('../actions/board_actions.js');
var BoardStore = require('../store/board_store.js');

var EditBoardForm = React.createClass({

	getInitialState: function () {
    var boardId = this.props.boardId;

    var startingBoard = BoardStore.find(boardId);

		return({ title: startingBoard.title, private: startingBoard.private });
	},


  editBoard: function (e) {
      e.preventDefault();
      var board = {};
      board.title = this.state.title;
			board.private = this.state.private;
      ApiUtil.editBoard(board, this.props.boardId, this.props.listId);
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
				<form className="edit-board-form">
          <h1>Update Board</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<input className="checkbox" type="checkbox" onClick={this.updatePrivacy}></input>
					<button onClick={this.editBoard}>Update</button>
				</form>
		);
	}

});


module.exports = EditBoardForm;
