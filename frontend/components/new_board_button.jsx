var React = require('react');
var BoardStore = require('../store/board_store.js');
var ApiUtil = require('../util/api_util.js');
var NewBoardForm = require('./new_board_form.jsx');


var NewBoardButton = React.createClass({

  getInitialState: function () {
    return({ display: "button" });
  },

  toggleDisplay: function () {
    this.state.display == "button" ? this.setState({ display: "form" }) : this.setState({ display: "button" })
  },

  render: function () {


    if (this.state.display == "button")
      { return <li className="new-board-button" onClick={this.toggleDisplay}></li> }
    else { return (<NewBoardForm toggleDisplay={this.toggleDisplay}/>)};


  }

});


module.exports = NewBoardButton;
