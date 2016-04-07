var React = require('react');

var CardIndexItem = React.createClass({

  deleteCard: function () {
    var boardId = this.props.boardId;
    var listId = this.props.listId;
    var id = this.props.card.id;
    ApiUtil.deleteCard(boardId, listId, id);
    ApiUtil.fetchSingleList(boardId, listId);

    // ApiUtil.fetchAllCards(boardId, listId);
  },

  render: function () {

    return(
      <li className="card-index-item">
        {this.props.card.title}
        <h2 className="card-delete-button" onClick={this.deleteCard}>x</h2>
      </li>
    );
  }
});

module.exports = CardIndexItem;
