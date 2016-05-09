var React = require('react');
var EditCardButton = require('./edit_card_button.jsx');
var EditCardForm = require('./edit_card_form.jsx');

var CardIndexItem = React.createClass({
  getInitialState: function () {
    return({ display: "button" });
  },

  toggleDisplay: function () {
    this.state.display == "button" ? this.setState({ display: "form" }) : this.setState({ display: "button" })
  },

  deleteCard: function () {
    var boardId = this.props.boardId;
    var id = this.props.card.id;
    ApiUtil.deleteCard(boardId, id);
  },


  render: function () {
    var dcb = this.props.current ? <i className="fa fa-trash" aria-hidden="true" onClick={this.deleteCard}></i> : <div></div>;
    var ecb = this.props.current ? <EditCardButton cardId={this.props.boardId} listId={this.props.listId} cardId={this.props.card.id} toggle={this.toggleDisplay} /> : <div></div>;
    var item = this.state.display == "button" ? <section>{this.props.card.title} {dcb} {ecb} </section> : <EditCardForm cardId={this.props.card.id} listId={this.props.listId} boardId={this.props.boardId} toggle={this.toggleDisplay} />;
    return(
      <li className="card-index-item">
        {item}
      </li>
    );
  }
});

module.exports = CardIndexItem;
