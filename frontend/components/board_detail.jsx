var React = require('react');
var ListIndex = require('./list_index.jsx');
var BoardStore = require('../store/board_store.js');
var CardStore = require('../store/card_store.js');
var EditBoardButton = require('./edit_board_button.jsx');
var SessionStore = require('../store/session_store.js');

var BoardDetail = React.createClass({

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState: function () {
    return { board: this.getStateFromStore() };
  },

  getStateFromStore: function () {
    return BoardStore.find(this.props.params.board_id);
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState( { board: BoardStore.find(nextProps.params.board_id) });
  },

  setNewState: function () {
      this.setState( { board: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listener = BoardStore.addListener(this.setNewState);

    ApiUtil.fetchSingleBoard(this.props.params.board_id);

    // ApiUtil.fetchAllCards(this.props.params.board_id);
  },

  componentWillUnmount: function () {
    if (this.listener) {this.listener.remove();}
  },

  deleteBoard: function () {
    var boardId = parseInt(this.props.params.board_id);
    ApiUtil.deleteBoard(boardId);
  },

  render: function () {

    if (!this.state.board) {

      return (
        <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i></div>
      );
    }

    var status = this.state.board.private ? "fa fa-user" : "fa fa-users";
    var current = SessionStore.currentUser();
    var edit = this.state.board.author_id == current.id ? <EditBoardButton boardId={this.props.params.board_id} /> : <div></div>;
    var del = this.state.board.author_id == current.id ? <button className="delete-board-button" onClick={this.deleteBoard}>Delete this board...</button> : <div></div>;
    var isCurrent = this.state.board.author_id == current.id ? true : false;

    return (
            <section className="board-detail group">
              <section>
                <h1>{this.state.board.title}<i className={status} aria-hidden="true"></i></h1>

              </section>
              <ul className="list-index group">
                <ListIndex boardId={this.props.params.board_id} lists={this.state.board.lists} current={isCurrent}/>
              </ul>
              {del}
              {edit}
            </section>
          );
    }

});





module.exports = BoardDetail;
