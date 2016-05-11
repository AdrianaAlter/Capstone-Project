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
      this.props.toggleDisplay();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},


	render: function () {

	   return(
				<form className="edit-list-form">
        	<h1>Title<i className="fa fa-times xout" aria-hidden="true" onClick={this.props.toggleDisplay}></i></h1>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.editList}><i className="fa fa-check" aria-hidden="true"></i></button>
				</form>
		);
	}

});


module.exports = EditListForm;
