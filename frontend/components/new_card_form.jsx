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
      this.props.toggleDisplay();
  },

	updateTitle: function (e) {
		var newTitle = e.currentTarget.value;
		this.setState({ title: newTitle });
	},

	render: function () {

	return(
				<form className="new-card-form" onSubmit={this.createNewCard}>
					<input className="title-field" type="text" value={this.state.title} onChange={this.updateTitle}></input>
					<i className="fa fa-times xout" aria-hidden="true" onClick={this.props.toggleDisplay}></i>
					<i className="fa fa-check" aria-hidden="true" onClick={this.createNewCard}></i>
				</form>
		);
	}

});


module.exports = NewCardForm;
