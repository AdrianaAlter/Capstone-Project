var React = require('react');
var CardIndex = require('./card_index.jsx');
var NewCardButton = require('./new_card_button.jsx');
var CardStore = require('../store/card_store.js');
var EditListButton = require('./edit_list_button.jsx');
var ListDetail = React.createClass({

  getInitialState: function () {
    return { cards: this.findCards() };
  },


  //
  // getStateFromStore: function () {
  //   var listId = parseInt(this.props.listId);
  //   return ListStore.find(listId);
  // },
  //
  // componentWillReceiveProps: function (newProps) {
  //   this.listener2 = ListStore.addListener(this.setNewState);
  //   ApiUtil.fetchSingleList(this.props.boardId, newProps.listId);
  // },

  // setNewState: function () {
  //     this.setState( { list: this.getStateFromStore() });
  // },
  //
  componentDidMount: function () {

    this.listener = CardStore.addListener(this.setCards);
    ApiUtil.fetchSingleList(this.props.boardId, this.props.listId);
  },
  // //
  componentWillUnmount: function () {
    this.listener.remove();
    // if (this.listener2) {this.listener2.remove();}
  },


  deleteList: function () {
    var board = this.props.boardId;
    var listId = this.props.listId;
    ApiUtil.deleteList(board, listId);
  },

  findCards: function () {
    var listId = this.props.listId;
    var cards = CardStore.findCardsByListId(listId);
    return cards;
  },

  setCards: function () {
    var cards = this.findCards();
    this.setState({ cards: cards });
  },

  render: function () {

    // <CardIndex boardId={this.props.boardId} listId={this.props.listId}/>

    // var cards = this.props.cards.map(function (card) {
    //   return <li key={card.id}>{card.title}</li>;
    // });

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
