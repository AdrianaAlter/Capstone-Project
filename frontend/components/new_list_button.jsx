var React = require('react');
var ListStore = require('../store/list_store.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var NewListForm = require('./new_list_form.jsx');


var NewListButton = React.createClass({

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

      <li className="new-list-button" onClick={this.openModal}>Add a list...
        <Modal className="modal" isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={styles}>
          <NewListForm closeModal={this.closeModal} boardId={this.props.boardId}/>
        </Modal>
      </li>
    );
  }
});


module.exports = NewListButton;
