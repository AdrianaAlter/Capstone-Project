var React = require('react');
var ListIndex = require('./list_index.jsx');
var BoardStore = require('../store/board_store.js');
var Header = require('./header.jsx');

var BoardDetail= React.createClass({

  getInitialState: function () {
    return { board: this.getStateFromStore() };
  },

  getStateFromStore: function () {

    var boardId = parseInt(this.props.params.board_id);
    return BoardStore.find(boardId);
  },

  componentWillReceiveProps: function (newProps) {
    this.listener = BoardStore.addListener(this.setNewState);
    ApiUtil.fetchSingleBoard(newProps.params.boardId);
  },

  setNewState: function () {
    this.setState( { board: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listener = BoardStore.addListener(this.setNewState);
    ApiUtil.fetchSingleBoard(this.state.board.id);

  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <div className="board-detail">
        <header>
          <Header />
        </header>
        <ul>
          <li><h1>{this.state.board.title}</h1></li>
          <li><h2>{this.state.board.description}</h2></li>
        </ul>
      </div>
    );
  }
});


module.exports = BoardDetail;
