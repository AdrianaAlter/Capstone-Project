var React = require('react');


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
      this.props.toggleDisplay();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},



	render: function () {

	return(
				<form className="new-list-form">
  				<h2>Title<i className="fa fa-times xout" aria-hidden="true" onClick={this.props.toggleDisplay}></i></h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.createNewList}><i className="fa fa-check" aria-hidden="true"></i></button>
				</form>
		);
	}

});


module.exports = NewListForm;
