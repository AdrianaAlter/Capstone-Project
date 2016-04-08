var React = require('react');
var CardActions = require('../actions/card_actions.js');

var EditCardForm = React.createClass({

	getInitialState: function () {
		return({ title: "" });
	},


  editCard: function (e) {
      e.preventDefault();
      var card = {};
      card.title = this.state.title;
      card.listId = this.props.listId;

      ApiUtil.editCard(card, this.props.boardId, this.props.cardId);
      this.setState({ title: "" });
      this.props.closeModal();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},


	render: function () {

	   return(
				<form className="edit-card-form">
          <h1>Update Card</h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.editCard}>Update</button>
				</form>
		);
	}

});


module.exports = EditCardForm;
