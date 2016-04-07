var React = require('react');
var BoardStore = require('../store/board_store.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var EditBoardForm = require('./edit_board_form.jsx');


var EditBoardButton = React.createClass({

  getInitialState: function () {
    return({ modalOpen: false });
  },

  openModal: function () {
    this.setState({ modalOpen: true });
  },

  closeModal: function () {
    this.setState({ modalOpen: false });
  },

  render: function () {
    var styles = {
      content: { maxHeight: "249px", maxWidth: "302px", padding: "0", border: "none" },
      overlay: { maxHeight: "350px", maxWidth: "400px", position: "absolute", padding: "0", border: "none", backgroundColor: "none" }
    };

    return (
      <button className="edit-board-button" onClick={this.openModal}>
        Update this board...
        <Modal className="modal" isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={styles}>
          <EditBoardForm boardId={this.props.boardId} closeModal={this.closeModal}/>
        </Modal>
    </button>
    );
  }
});


module.exports = EditBoardButton;
