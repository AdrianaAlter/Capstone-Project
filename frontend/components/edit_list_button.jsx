var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var EditListForm = require('./edit_list_form.jsx');


var EditListButton = React.createClass({

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
      <button className="edit-list-button" onClick={this.openModal}>
        Update this list...
        <Modal className="modal" isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={styles}>
          <EditListForm listId={this.props.listId} boardId={this.props.boardId} closeModal={this.closeModal}/>
        </Modal>
    </button>
    );
  }
});


module.exports = EditListButton;