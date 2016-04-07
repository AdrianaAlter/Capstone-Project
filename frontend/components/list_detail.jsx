var React = require('react');
var CardIndex = require('./card_index.jsx');
var NewCardButton = require('./new_card_button.jsx');
var ListStore = require('../store/list_store.js');

var ListDetail = React.createClass({

  // getInitialState: function () {
  //   return { cards: this.getCards() };
  // },


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
    this.listener = ListStore.addListener(this.getCards);
    // ApiUtil.fetchSingleList(this.props.boardId, this.props.listId);
  },
  //
  componentWillUnmount: function () {
    if (this.listener) {this.listener.remove();}
    // if (this.listener2) {this.listener2.remove();}
  },

  deleteList: function () {
    var board = this.props.boardId;
    var listId = this.props.listId;
    ApiUtil.deleteList(board, listId);
  },

  // getCards: function () {
  //   var boardId = this.props.boardId;
  //   var listId = this.props.listId;
  //   ApiUtil.fetchAllCards(boardId, listId);
  // },

  render: function () {
    // if (!this.state.lists) {
    //   return (
    //     <div></div>
    //   );
    // }
    // <CardIndex boardId={this.props.boardId} listId={this.props.listId}/>

    // var cards = this.props.cards.map(function (card) {
    //   return <li key={card.id}>{card.title}</li>;
    // });

    return (

      <section className="list-detail group">
        <CardIndex cards={this.props.cards} listId={this.props.listId} boardId={this.props.boardId}/>
        <NewCardButton boardId={this.props.boardId} listId={this.props.listId}/>
        <button className="delete-list-button" onClick={this.deleteList}>Delete this list...</button>
      </section>
    );
  }

});

module.exports = ListDetail;
