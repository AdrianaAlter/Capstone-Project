var React = require('react');
var Link = require('react-router').Link;


var BoardIndexItem = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  goTo: function () {
    this.context.router.push("/boards/" + this.props.board.id);
  },
  render: function () {

    return(
      <li onClick={this.goTo}>{this.props.board.title}</li>
    );
  }

});

module.exports = BoardIndexItem;
