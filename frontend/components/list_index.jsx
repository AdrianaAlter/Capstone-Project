var React = require('react');
var ListStore = require('../store/list_store.js');
var ListActions = require('../actions/list_actions.js');
var ListIndexItem = require('./list_index_item.jsx');
var NewListButton = require('./new_list_button.jsx');
var ApiUtil = require('../util/api_util.js');

var ListIndex = React.createClass({
  getInitialState: function () {
    return { lists: this.getStateFromStore() };
  },

  getStateFromStore: function () {
    return ListStore.all();
  },

  setNewState: function () {
      this.setState( { lists: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listener = ListStore.addListener(this.setNewState);
    ApiUtil.fetchAllLists(this.props.boardId);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {

    if (!this.state.lists) {
      return (
        <div></div>
      );
    }

    var listItems = this.state.lists.map(function (list) {
      return <ListIndexItem key={list.id} list={list} boardId={list.board_id} cards={list.cards}/>;
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
