var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var EditCardForm = require('./edit_card_form.jsx');

var EditCardButton = React.createClass({

  render: function () {

    return (
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={this.props.toggle}></i>
    );
  }
});


module.exports = EditCardButton;
