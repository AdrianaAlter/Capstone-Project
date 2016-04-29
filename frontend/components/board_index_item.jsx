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
    
    var icon = this.props.board.private ? <i className="fa fa-user" aria-hidden="true"></i> : <i className="fa fa-users" aria-hidden="true"></i>;

    return(
      <Link to={"/boards/" + this.props.board.id}><li>{this.props.board.title}{icon}</li></Link>
    );
  }

});

module.exports = BoardIndexItem;
