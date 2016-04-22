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
      <Link to={"/boards/" + this.props.board.id}><li>{this.props.board.title}</li></Link>
    );
  }

});

module.exports = BoardIndexItem;
