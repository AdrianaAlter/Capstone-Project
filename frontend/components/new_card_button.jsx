var React = require('react');
var CardStore = require('../store/card_store.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var NewCardForm = require('./new_card_form.jsx');

var NewCardButton = React.createClass({

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
      <li className="new-card-button" onClick={this.openModal}>
        Add a new card...
        <Modal className="modal" isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={styles}>
          <NewCardForm boardId={this.props.boardId} listId={this.props.listId} closeModal={this.closeModal}/>
        </Modal>
    </li>
    );
  }
});

module.exports = NewCardButton;
