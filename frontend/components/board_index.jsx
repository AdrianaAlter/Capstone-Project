var React = require('react');
var BoardStore = require('../store/board_store.js');
var BoardActions = require('../actions/board_actions.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var NewBoardForm = require('./new_board_form.jsx');
var Link = require('react-router').Link;


var BoardIndex = React.createClass({

  getInitialState: function () {
    return { boards: BoardStore.all() };
  },

	// openModal: function () {
	// 	this.setState({modalIsOpen: true});
	// },
	//
	// closeModal: function () {
	// 	this.setState({modalIsOpen: false});
	// },

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
      return <li key={board.id}	className="board-title">{board.title}</li>;
    });

    return (
      <div className="board-index group">
        <ul>
          <div className="board-index-label">My Boards</div>
          	{boardItems}
				</ul>

				<ul className="new-board-buttons">
					<li><a href="#">Create new board...</a></li>
					<li><a href="#">Create new board...</a></li>
					<li><a href="#">Create new board...</a></li>
				</ul>
			</div>
    );
  }

});
Modal.setAppElement(BoardIndex);
module.exports = BoardIndex;



// <button onClick={this.openModal}>Create New Board</button>
// <Modal
// 	isOpen={this.state.modalIsOpen}
// 	onRequestClose={this.closeModal}>
// 	{NewBoardForm}
// </Modal>
