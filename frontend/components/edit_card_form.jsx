var React = require('react');
var CardActions = require('../actions/card_actions.js');
var CardStore = require('../store/card_store.js');

var EditCardForm = React.createClass({

	getInitialState: function () {
    var startingCard = CardStore.findCardById(this.props.cardId, this.props.listId);
		return({ title: startingCard.title });
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
          <h1>Update Card<i className="fa fa-times xout" aria-hidden="true" onClick={this.props.closeModal}></i></h1>
					<h2>Title</h2>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<button onClick={this.editCard}>Update</button>
				</form>
		);
	}

});


module.exports = EditCardForm;
