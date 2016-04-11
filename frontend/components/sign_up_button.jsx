var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var SignUpForm = require('./sign_up_form.jsx');

var SignUpButton = React.createClass({

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
      content: {backgroundColor: "#e4f0f6"}
    };
    return(
      <button onClick={this.openModal}>
        Sign up!  (Meow.)
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={styles}>
          <SignUpForm closeModal={this.closeModal}/>
        </Modal>
      </button>

    );
  }
});


module.exports = SignUpButton;
