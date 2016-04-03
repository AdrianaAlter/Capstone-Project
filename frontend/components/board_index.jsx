var React = require('react');
var BoardStore = require('../store/board_store.js');
var BoardActions = require('../actions/board_actions.js');
var ApiUtil = require('../util/api_util.js');
// var Modal = require('react-modal');
var NewBoardForm = require('./new_board_form.jsx');
// var Link = require('react-router').Link;
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

	// getNewBoardForm: function () {
	// 	NewBoardForm.toggleDisplayed();
	// },

  render: function () {

    var boardItems = this.state.boards.map(function (board) {
      return <BoardIndexItem key={board.id}	className="board-title" board={board}/>;
    });


    return (
      <div>
        <p>My Boards</p>
        <ul className="board-items group">
          {boardItems}
          <li className="new-board-button">{NewBoardButton}</li>
        </ul>
      </div>

    );
  }

});

module.exports = BoardIndex;

// <ul className="board-items group">
//   <div className="board-index-label">My Boards</div>
//   {boardItems}
// </ul>
// <NewBoardButton />
