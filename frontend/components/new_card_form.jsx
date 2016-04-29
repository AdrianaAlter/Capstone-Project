var React = require('react');
var CardActions = require('../actions/card_actions.js');
var NewCardForm = React.createClass({

	getInitialState: function () {
		return({ title: "" });
	},

  createNewCard: function (e) {
      e.preventDefault();
      var card = {};
      card.title = this.state.title;
      card.list_id = this.props.listId;
      ApiUtil.createNewCard(card, this.props.boardId);
      this.setState({ title: "" });
      this.props.closeModal();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},

	render: function () {

	return(
				<form className="new-card-form">
          <h1>Create Card<i className="fa fa-times xout" aria-hidden="true" onClick={this.props.closeModal}></i></h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.createNewCard}>Create</button>
				</form>
		);
	}

});


module.exports = NewCardForm;
