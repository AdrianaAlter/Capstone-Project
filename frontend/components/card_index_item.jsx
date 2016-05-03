var React = require('react');
var EditCardButton = require('./edit_card_button.jsx');

var CardIndexItem = React.createClass({

  deleteCard: function () {
    var boardId = this.props.boardId;
    var id = this.props.card.id;
    ApiUtil.deleteCard(boardId, id);
  },


  render: function () {
    var dcb = this.props.current ? <button onClick={this.deleteCard}><i className="fa fa-trash" aria-hidden="true"></i></button> : <div></div>;
    var ecb = this.props.current ? <EditCardButton boardId={this.props.boardId} listId={this.props.listId} cardId={this.props.card.id} /> : <div></div>;

    return(
      <li className="card-index-item">
        {this.props.card.title}
        {dcb}
        {ecb}
      </li>
    );
  }
});

module.exports = CardIndexItem;
