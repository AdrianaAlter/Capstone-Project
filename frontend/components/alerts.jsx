var React = require('react');
var ReactDom = require('react-dom');
var AlertStore = require('../store/alert_store.js');
var Modal = require('react-modal');

var Alerts = React.createClass({

  getInitialState: function () {
    return { modalOpen: false }
  },

  componentDidMount: function () {
    this.getStateFromStore();
    this.listener = AlertStore.addListener(this.getStateFromStore);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  getStateFromStore: function () {
    var alertContent = AlertStore.all();

    if (alertContent.length > 0) {
      this.setState({ alertTitle: alertContent[0] });
      this.setState({ alertText: alertContent[1] });
      this.setState({ modalOpen: true });
      alertContent = [];
    }

  },

  clearAlert: function () {
    AlertStore.clear();
    this.setState({ alertTitle: null, alertText: null, modalOpen: false});
  },

  render: function () {
    var styles = {
      content: {
        width: '500px',
        height: '225px',
        padding: '0px',
        border: '1px solid #026AA7',
        left: '30%',
        top: '30%'
      }
    };

    var alert = <section className="alert">
                  <h1>{this.state.alertTitle}<button className="xout" onClick={this.clearAlert}><i className="fa fa-times xout" aria-hidden="true"></i></button></h1>
                  <h2>{this.state.alertText}</h2>
			          </section>

    return (
      <Modal isOpen={this.state.modalOpen} style={styles}
          onRequestClose={this.clearAlert}>
          {alert}
          </Modal>
    )
  }

});

module.exports = Alerts;
