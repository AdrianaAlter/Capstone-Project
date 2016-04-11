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


    var listItems = this.props.lists.map(function (list) {
      return <ListIndexItem key={list.id} list={list} />;
    });


    return (
        <ul className="list-index">
            {listItems}
            <NewListButton boardId={this.props.boardId}/>
  			</ul>
  	  );
    }


});

module.exports = ListIndex;
