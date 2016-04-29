var React = require('react');
var ListIndexItem = require('./list_index_item.jsx');
var NewListButton = require('./new_list_button.jsx');
var ApiUtil = require('../util/api_util.js');

var ListIndex = React.createClass({

  render: function () {

    if (!this.props.lists) {
      return (
        <div></div>
      );
    }

    var current = this.props.current;


    var listItems = this.props.lists.map(function (list) {
      return <ListIndexItem key={list.id} list={list} current={current} />;
    });

    var nlb = this.props.current ? <NewListButton boardId={this.props.boardId}/> : <div></div>;


    return (
        <ul className="list-index">
            {listItems}
            {nlb}
  			</ul>
  	  );
    }


});

module.exports = ListIndex;
