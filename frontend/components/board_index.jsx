var React = require('react');
var BoardStore = require('../store/board_store.js');
var BoardActions = require('../actions/board_actions.js');
var ApiUtil = require('../util/api_util.js');
var BoardIndexItem = require('./board_index_item.jsx');
var NewBoardForm = require('./new_board_form.jsx');

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

	getNewBoardForm: function () {
		NewBoardForm.toggleDisplayed();
	},

  render: function () {

    var boardItems = this.state.boards.map(function (board) {
      return <li key={board.id}><div className="board-title">{board.title}</div></li>;
    });

    return (
      <div className="board-index group">
        <ul>
          <div className="board-index-label">My Boards</div>
          	{boardItems}
				</ul>
				<ul className="new-board-buttons">
					<li onClick={this.getNewBoardForm}>
						<a href="#">Create new board...</a>
						{NewBoardForm}
					</li>
					<li><a href="#">Create new board...</a></li>
					<li><a href="#">Create new board...</a></li>
				</ul>
			</div>
    );
  }

});

module.exports = BoardIndex;
