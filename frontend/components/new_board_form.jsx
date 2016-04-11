var React = require('react');
var BoardActions = require('../actions/board_actions.js');

var NewBoardForm = React.createClass({

	getInitialState: function () {
		return({ title: "" });
	},


  createNewBoard: function (e) {
    
      e.preventDefault();
      var board = {};
      board.title = this.state.title;
      ApiUtil.createNewBoard(board);
      this.setState({ title: "" });
      this.props.closeModal();
  },


	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });

	},

	render: function () {

		return(
				<form className="new-board-form">
          <h1>Create Board</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.createNewBoard}>Create</button>
				</form>
		);
	}

});


module.exports = NewBoardForm;
