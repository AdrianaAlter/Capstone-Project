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
      this.props.toggleDisplay();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},

	updatePrivacy: function (e) {
		this.state.private == true ? this.setState({ private: false }) : this.setState({ private: true });
	},


	render: function () {

		var checkBox = this.state.private == true ? "fa fa-square-o" : "fa fa-check-square-o";

	  return(
				<form className="edit-board-form">
					<h2>Title<i className="fa fa-times xout" aria-hidden="true" onClick={this.props.toggleDisplay}></i></h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<h2>Public?<i className={checkBox} aria-hidden="true" onClick={this.updatePrivacy}></i></h2>
					<button onClick={this.editBoard}><i className="fa fa-check" aria-hidden="true"></i></button>
				</form>
		);
	}

});


module.exports = EditBoardForm;
