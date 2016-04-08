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
//
//   var tourPic = <section className="tour-content">
//     <h1>meow</h1>
//     <div className="tour-pic"></div>
//   </section>;
//   var tour = <li className="footerlink" onClick={this.openModal}>Tour
//     <Modal className="modal" isOpen={this.state.modalOpen}
//       onRequestClose={this.closeModal}
//       style={styles}>{tourPic}
//     </Modal>
//   </li>;
//

//
//   var pricing = <li className="footerlink" onClick={this.openModal}>Pricing
//     <Modal className="modal" isOpen={this.state.modalOpen}
//       onRequestClose={this.closeModal}
//       style={styles}>
//     </Modal>
//   </li>;
//

  var tourContent =<h1 className="tour">Because cats are also known for their navigational skills.</h1>;

  var jobs = <li onClick={this.openModal}>Jobs
    <Modal className="modal" isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>

    </Modal>
  </li>;

  var about = <li onClick={this.openModal}>About
    <Modal className="about" isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>
      <h1>It's about cats.</h1>
      <h2>(You seriously couldn't figure that out on your own??)</h2>
    </Modal>
  </li>;

  var legal = <li onClick={this.openModal}>Legal
    <Modal isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>
      <h1 className="legal">If you're looking for legitimate legal information, a good first step is probably to go to a website that isn't cat-themed.</h1>
    </Modal>
  </li>;

  var tour = <li onClick={this.openModal}>Tour
    <Modal isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      style={styles}>
      {tourContent}
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
