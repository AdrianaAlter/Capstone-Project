var React = require('react');
var CardStore = require('../store/card_store.js');
var ApiUtil = require('../util/api_util.js');

var NewCardForm = require('./new_card_form.jsx');

var NewCardButton = React.createClass({

  getInitialState: function () {
    return({ display: "button" });
  },

  toggleDisplay: function () {
    this.state.display == "button" ? this.setState({ display: "form" }) : this.setState({ display: "button" })
  },

  render: function () {


    if (this.state.display == "button")
      { return <li className="new-card-button" onClick={this.toggleDisplay}>Add a new card...</li> }
    else { return (<NewCardForm boardId={this.props.boardId} listId={this.props.listId} toggleDisplay={this.toggleDisplay}/>)};


  }
});

module.exports = NewCardButton;
