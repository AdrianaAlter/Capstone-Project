var React = require('react');
var ReactDom = require('react-dom');
var AlertStore = require('../store/alert_store.js');
var Alert = require('react-simple-alert');

var Alerts = React.createClass({

  getInitialState: function () {
    return { alert: false }
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
      // debugger
      this.setState({ alertTitle: alertContent[0] });
      this.setState({ alertText: alertContent[1] });
      this.setState({ alert: true });
    }
  },

  closeAlert: function () {
    this.setState({ alert: false });
  },

  render: function () {

    var rsaOptions = {
            title: this.state.alertTitle,
            message: this.state.alertText,
            alert: this.state.alert
        };

    return (
      <Alert options={rsaOptions} />
    )
  }

});

module.exports = Alerts;
