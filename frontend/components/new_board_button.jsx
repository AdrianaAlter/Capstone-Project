var React = require('react');
var BoardStore = require('../store/board_store.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var NewBoardForm = require('./new_board_form.jsx');


var NewBoardButton = React.createClass({

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
      <li className="new-board-button" onClick={this.openModal}>
        <Modal className="modal" isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={styles}>
          <NewBoardForm closeModal={this.closeModal}/>
        </Modal>
    </li>
    );
  }

});


module.exports = NewBoardButton;
