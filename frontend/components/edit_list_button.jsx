var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var EditListForm = require('./edit_list_form.jsx');


var EditListButton = React.createClass({

  getInitialState: function () {
    return({ display: "button" });
  },

  toggleDisplay: function () {
    this.state.display == "button" ? this.setState({ display:"form" }) : this.setState({ display: "button" });
  },

  render: function () {

    var component = this.state.display == "button" ? <button className="edit-list-button" onClick={this.toggleDisplay}>Update this list...</button> : <EditListForm listId={this.props.listId} boardId={this.props.boardId} toggleDisplay={this.toggleDisplay}/>
    return (
      component
    );
  }
});


module.exports = EditListButton;
