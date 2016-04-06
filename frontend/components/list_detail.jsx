var React = require('react');
var CardIndex = require('./card_index.jsx');
var NewCardButton = require('./new_card_button.jsx');
var ListStore = require('../store/list_store.js');

var ListDetail = React.createClass({

  getInitialState: function () {
    return { list: this.getStateFromStore(), deleted: false };
  },

  getStateFromStore: function () {
    var listId = parseInt(this.props.listId);
    return ListStore.find(listId);
  },

  // componentWillReceiveProps: function (newProps) {
  //   this.listener2 = ListStore.addListener(this.setNewState);
  //   ApiUtil.fetchSingleList(this.props.boardId, newProps.listId);
  // },

  setNewState: function () {
      this.setState( { list: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listener = ListStore.addListener(this.setNewState);
    ApiUtil.fetchSingleList(this.props.boardId, this.props.listId);
  },

  componentWillUnmount: function () {
    if (this.listener) {this.listener.remove();}
    if (this.listener2) {this.listener2.remove();}
  },

  deleteList: function () {
    var board = this.props.boardId;
    var listId = parseInt(this.props.listId);
    ApiUtil.deleteList(board, listId);
  },

  render: function () {
    if (!this.state.list) {
      return (
        <div></div>
      );
    }

    return (

      <section className="list-detail group">
        <CardIndex boardId={this.props.boardId} listId={this.props.listId}/>
        <NewCardButton boardId={this.props.boardId} listId={this.props.listId}/>
        <button className="delete-list-button" onClick={this.deleteList}>Delete this list...</button>
      </section>
    );
  }

});

module.exports = ListDetail;
