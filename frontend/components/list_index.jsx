var React = require('react');
var ListStore = require('../store/list_store.js');
var ListActions = require('../actions/list_actions.js');
var ApiUtil = require('../util/api_util.js');

var ListIndex = React.createClass({

  getInitialState: function () {
    return { lists: ListStore.all() };
  },

  componentDidMount: function () {
    this.listener = ListStore.addListener(this._onChange);
    ApiUtil.fetchAllLists();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ lists: ListStore.all() });
  },

  render: function () {

    var listItems = this.state.lists.map(function (list) {
      return <li key={list.id}><div className="list-title">{list.title}</div></li>;
    });

    return (
      <div className="list-index group">
        <ul className="list-items">
          {listItems}
				</ul>
				<button className="new-list-button">Add a list...</button>
				</div>
    );
  }

});

module.exports = ListIndex;
