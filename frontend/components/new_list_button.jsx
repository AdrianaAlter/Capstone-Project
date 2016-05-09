var React = require('react');

var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var NewListForm = require('./new_list_form.jsx');


var NewListButton = React.createClass({

  getInitialState: function () {
    return({ display: "button" });
  },

  toggleDisplay: function () {
    this.state.display == "button" ? this.setState({ display: "form" }) : this.setState({ display: "button" })
  },

  render: function () {

    if (this.state.display == "button")
      { return <li className="new-list-button" onClick={this.toggleDisplay}>Add a list...</li> }
    else { return (<NewListForm toggleDisplay={this.toggleDisplay} boardId={this.props.boardId}/>)};


  }

});


module.exports = NewListButton;
