var React = require('react');
var ListDetail = require('./list_detail.jsx');

var BoardStore = require('../store/board_store.js');

var ListIndexItem = React.createClass({


  render: function () {


    return(

        <section className="list-index-item">
          <h1>{this.props.list.title}</h1>
          <ListDetail boardId={this.props.list.board_id} listId={this.props.list.id} current={this.props.current}/>
        </section>

    );

  }
});

module.exports = ListIndexItem;
