var React = require('react');
var Modal = require('react-modal');
var Footer = React.createClass({

getInitialState: function () {
  return {
    currentUser: null,
    modalOpen: false
  };
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

  var legal = <li onClick={this.openModal}>Legal
    <Modal isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>
      <h1 className="legal">If you're looking for legitimate legal information, a good first step is probably to go to a website that isn't cat-themed.</h1>
    </Modal>
  </li>;


    return (

    <footer group>

      <ul>
        <li>Tour</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>About</li>
        <li>Help</li>
        {legal}
        <li>© Copyright 2016 Gratuitously Cat-Themed Web Apps, Inc.</li>
      </ul>

    </footer>

  );}

});


module.exports = Footer;
