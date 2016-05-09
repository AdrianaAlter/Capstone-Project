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
      this.props.toggle();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},


	render: function () {

	   return(
				<form className="edit-card-form">
          <input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<i className="fa fa-times xout" aria-hidden="true" onClick={this.props.toggle}></i>
					<i className="fa fa-check" aria-hidden="true" onClick={this.editCard}></i>
				</form>
		);
	}

});


module.exports = EditCardForm;
