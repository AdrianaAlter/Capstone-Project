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

  var tourPic = <section className="tour-content">
    <h1>meow</h1>
    <div className="tour-pic"></div>
  </section>;
  var tour = <li className="footerlink" onClick={this.openModal}>Tour
    <Modal className="modal" isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>{tourPic}
    </Modal>
  </li>;


  var pricing = <li className="footerlink" onClick={this.openModal}>Pricing
    <Modal className="modal" isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>
    </Modal>
  </li>;

  var jobs = <li className="footerlink" onClick={this.openModal}>Jobs
    <Modal className="modal" isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>
    </Modal>
  </li>;

  return(
    <ul>
      {tour}
      {pricing}
      {jobs}
    </ul>
  );
}

});

module.exports = Footer;
