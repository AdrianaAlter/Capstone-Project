var React = require('react');
var Link = require('react-router').Link;


var BoardIndexItem = React.createClass({

  // getInitialState: function () {
  //     return { lists: [] };
  // },
  //
  // getLists: function () {
  //   var fetchedLists = ApiUtil.fetchAllLists(this.props.board.id);
  //   this.setState({ lists: fetchedLists });
  //
  // },

  render: function () {
    // var listStatus = this.state.lists ? "full" : "empty";

    return(
      <li><Link to={"boards/" + this.props.board.id}>{this.props.board.title}</Link></li>
    );
  }
});

module.exports = BoardIndexItem;
