var React = require('react');
var ListActions = require('../actions/list_actions.js');

var NewListForm = React.createClass({

	getInitialState: function () {
		return({ title: "" });
	},


  createNewList: function (e) {
      e.preventDefault();
      var list = {};
      list.title = this.state.title;
      ApiUtil.createNewList(list, this.props.boardId);
      this.setState({ title: "" });
      this.props.closeModal();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},



	render: function () {

	return(
				<form className="new-list-form">
          <h1>Create List</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.createNewList}>Create</button>
				</form>
		);
	}

});


module.exports = NewListForm;
