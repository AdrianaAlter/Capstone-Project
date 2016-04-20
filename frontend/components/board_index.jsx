var React = require('react');
var BoardStore = require('../store/board_store.js');
var BoardActions = require('../actions/board_actions.js');
var ApiUtil = require('../util/api_util.js');
var NewBoardForm = require('./new_board_form.jsx');
var NewBoardButton = require('./new_board_button.jsx');
var BoardIndexItem = require('./board_index_item.jsx');

var BoardIndex = React.createClass({


  getInitialState: function () {
    return { boards: BoardStore.all() };
  },

  componentDidMount: function () {
    this.listener = BoardStore.addListener(this._onChange);
    ApiUtil.fetchAllBoards();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ boards: BoardStore.all() });
  },

  render: function () {

    var boardItems = this.state.boards.map(function (board) {
      return <BoardIndexItem key={board.id}	lists={board.lists} className="board-title" board={board}/>;
    });

    return (
      <div className="board-index">
        <h1>My Boards</h1>
        <ul className="board-items group">
          {boardItems}
          <NewBoardButton />
        </ul>
      </div>

    );
  }

});

module.exports = BoardIndex;
