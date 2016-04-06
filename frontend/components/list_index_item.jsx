var React = require('react');
var ListDetail = require('./list_detail.jsx');

var ListIndexItem = React.createClass({

  render: function () {

    return(

        <section className="list-index-item">
          <h1>{this.props.list.title}</h1>
          <ListDetail boardId={this.props.boardId} listId={this.props.list.id}/>
        </section>

    );

  }
});

module.exports = ListIndexItem;
