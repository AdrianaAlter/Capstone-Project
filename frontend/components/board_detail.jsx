var React = require('react');
var ListIndex = require('./list_index.jsx');
var BoardStore = require('../store/board_store.js');
var Header = require('./header.jsx');

var BoardDetail = React.createClass({

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState: function () {
    return { board: this.getStateFromStore(), mounted: false, deleted: false };
  },

  getStateFromStore: function () {
    var boardId = parseInt(this.props.params.board_id);
    return BoardStore.find(boardId);
  },

  componentWillReceiveProps: function (newProps) {
    this.listener = BoardStore.addListener(this.setNewState);
    ApiUtil.fetchSingleBoard(newProps.params.board_id);
  },
  //
  setNewState: function () {
    if (this.state.mounted === true) {
      this.setState( { board: this.getStateFromStore() });
    }
  },
  //
  componentDidMount: function () {
    this.listener = BoardStore.addListener(this.setNewState);
    ApiUtil.fetchSingleBoard(this.props.params.board_id);
    this.setState({ mounted: true });
  },
  //
  componentWillUnmount: function () {
    this.listener.remove();
  },

  deleteBoard: function () {
    var boardId = parseInt(this.props.params.board_id);
    ApiUtil.deleteBoard(boardId);

  },
  //
  render: function () {
    if (!this.state.board) {
      return (
        <div></div>
      );
    }

    // if (this.state.board && !this.state.board.lists) {
    //   return(
    //     <section className="board-detail">
    //       <header className="detail-header"></header>
    //       <div></div>
    //     </section>
    //   );
    // }

    else {
// debugger
      var listItems = this.state.board.lists.map (function (list) {
        return (<li className="list-item" key={list.id} list={list}>{list.title}</li>);
      });

      return (
          <section className="board-detail group">
            <header className="detail-header"></header>
            <h1>{this.state.board.title}</h1>
            <ul className="list-index group">
              {listItems}
            <li><button className="new-list-button">Add a list...</button></li>
          </ul>
          <button className="delete-board-button" onClick={this.deleteBoard}>Delete this board...</button>
          </section>
      );
    }
  }


});


module.exports = BoardDetail;
// <ListIndex board={this.props.params.board_id} />
