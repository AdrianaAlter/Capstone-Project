var React = require('react');
var ListIndex = require('./list_index.jsx');
var BoardStore = require('../store/board_store.js');
var Header = require('./header.jsx');

var BoardDetail = React.createClass({

  getInitialState: function () {
    return { board: this.getStateFromStore() };
  },

  getStateFromStore: function () {

    var boardId = parseInt(this.props.params.board_id);
    return BoardStore.find(boardId);
  },

  componentWillReceiveProps: function (newProps) {
    this.listener = BoardStore.addListener(this.setNewState);
    ApiUtil.fetchSingleBoard(newProps.params.board_id);
  },

  setNewState: function () {
    this.setState( { board: this.getStateFromStore() });
  },

  componentDidMount: function () {

    this.listener = BoardStore.addListener(this.setNewState);

    ApiUtil.fetchSingleBoard(this.props.params.board_id);

  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    if (!this.state.board) {
      return (
        <div></div>
      );
    }
    else {
      return (
          <section className="board-detail">
            <header className="detail-header"></header>
            <ul>
              <li><h1>Title: {this.state.board.title}</h1></li>
              <li><h2>Description: {this.state.board.description}</h2></li>
            </ul>
          </section>
      );
    }
  }
});


module.exports = BoardDetail;
