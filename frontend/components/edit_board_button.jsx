var React = require('react');
var BoardStore = require('../store/board_store.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var EditBoardForm = require('./edit_board_form.jsx');
var EditBoardButton = React.createClass({

  getInitialState: function () {
    return({ display: "button" });
  },

  openModal: function () {
    this.setState({ modalOpen: true });
  },

  closeModal: function () {
    this.setState({ modalOpen: false });
  },

  toggleDisplay: function () {
    this.state.display == "button" ? this.setState({ display:"form" }) : this.setState({ display: "button" });
  },

  render: function () {
    var styles = {
      content: { maxHeight: "249px", maxWidth: "302px", padding: "0", border: "none" },
      overlay: { maxHeight: "350px", maxWidth: "400px", position: "absolute", padding: "0", border: "none", backgroundColor: "none" }
    };

    var component = this.state.display == "button" ? <button className="edit-board-button" onClick={this.toggleDisplay}>Update this board...</button> : <EditBoardForm boardId={this.props.boardId} listId={this.props.listId} toggleDisplay={this.toggleDisplay}/>;

    return (
      component
    );
  }
});


module.exports = EditBoardButton;
