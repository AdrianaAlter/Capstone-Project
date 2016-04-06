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
      ApiUtil.createNewCard(card, this.props.boardId, this.props.listId);
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
          <h1>Create Card</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.createNewCard}>Create</button>
				</form>
		);
	}

});


module.exports = NewCardForm;
