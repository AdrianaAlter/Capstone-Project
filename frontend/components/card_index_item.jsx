var React = require('react');
var EditCardButton = require('./edit_card_button.jsx');

var CardIndexItem = React.createClass({

  deleteCard: function () {
    var boardId = this.props.boardId;
   
    var id = this.props.card.id;

    ApiUtil.deleteCard(boardId, id);
  
  },

  render: function () {

    return(
      <li className="card-index-item">
        {this.props.card.title}
        <button className="card-delete-button" onClick={this.deleteCard}>x</button>
        <EditCardButton boardId={this.props.boardId} listId={this.props.listId} cardId={this.props.card.id} />
      </li>
    );
  }
});

module.exports = CardIndexItem;
