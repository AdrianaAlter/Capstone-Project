var React = require('react');

var BoardStore = require('../store/board_store.js');

var EditListForm = React.createClass({

	getInitialState: function () {

    var startingList = BoardStore.findListById(this.props.listId, this.props.boardId);
		return({ title: startingList.title });
	},


  editList: function (e) {
      e.preventDefault();
      var list = {};
      list.title = this.state.title;

      ApiUtil.editList(list, this.props.boardId, this.props.listId);
      this.setState({ title: "" });
      this.props.closeModal();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},


	render: function () {

	   return(
				<form className="edit-list-form">
          <h1>Update List</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.editList}>Update</button>
				</form>
		);
	}

});


module.exports = EditListForm;
