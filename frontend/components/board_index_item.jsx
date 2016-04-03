var React = require('react');


var BoardIndexItem = React.createClass({


  contextTypes: { route: React.PropTypes.object },
  showDetail: function () {
    var router = this.context.router;
    ApiUtil.fetchSingleBoard(this.props.board.id, function () {
      router.push("/" + this.props.route);
    });
  },

  render: function () {

    return(

      <li onClick={this.showDetail}>{this.props.board.title}</li>
    );
  }


});

module.exports = BoardIndexItem;
