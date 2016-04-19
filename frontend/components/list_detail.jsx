var React = require('react');
var CardIndex = require('./card_index.jsx');
var NewCardButton = require('./new_card_button.jsx');
var CardStore = require('../store/card_store.js');
var BoardStore = require('../store/board_store.js');
var EditListButton = require('./edit_list_button.jsx');
var ListDetail = React.createClass({

  getInitialState: function () {
    return { cards: this.findCards() };
  },

  componentDidMount: function () {

    this.listener = CardStore.addListener(this.setCards);

    ApiUtil.fetchSingleList(this.props.boardId, this.props.listId);
    ApiUtil.fetchAllCards(this.props.boardId);
  },

  componentWillUnmount: function () {
    this.listener.remove();
    CardStore.resetListById(this.props.listId);
  },


  deleteList: function () {
    var board = this.props.boardId;
    var listId = this.props.listId;
    ApiUtil.deleteList(board, listId);
  },

  findCards: function () {
    var listId = this.props.listId;
    var cards = CardStore.resetListById(listId);
    return cards;
  },

  setCards: function () {
    var cards = this.findCards();
    this.setState({ cards: cards });
  },

  render: function () {


  return (

      <section className="list-detail group">
        <CardIndex cards={this.state.cards} listId={this.props.listId} boardId={this.props.boardId}/>
        <NewCardButton boardId={this.props.boardId} listId={this.props.listId}/>
        <EditListButton listId={this.props.listId} boardId={this.props.boardId}/>
        <button className="delete-list-button" onClick={this.deleteList}>Delete this list...</button>
      </section>
    );
  }

});

module.exports = ListDetail;
