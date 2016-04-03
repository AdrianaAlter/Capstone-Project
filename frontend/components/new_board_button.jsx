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
    return (
      <div onClick={this.openModal}>
        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          {NewBoardForm}
        </Modal>
      </div>
    );
  }


});


module.exports = NewBoardButton;
