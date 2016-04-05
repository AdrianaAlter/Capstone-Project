var React = require('react');
var ListStore = require('../store/list_store.js');
var ListActions = require('../actions/list_actions.js');
var ListIndexItem = require('./list_index_item.jsx');

var ApiUtil = require('../util/api_util.js');

var ListIndex = React.createClass({
  getInitialState: function () {

    return { lists: ListStore.all() };
  },

  componentDidMount: function () {

    this.listener = ListStore.addListener(this.setNewState);
    ApiUtil.fetchAllLists(this.props.board);

  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ lists: ListStore.all() });
  },

  render: function () {
    return (<div></div>);
    // if (!this.state.lists) {
    //   return (
    //     <div></div>
    //   );
    // }
    //
    // else {
    //   var listItems = [];
    //   for (var i = 0; i < this.state.lists.length; i++) {
    //     var list = this.state.lists[i];
    //     listItems.push(<ListIndexItem key={list.id}	list={list}/>);
    //   }
    //
    //   return (
    //     <div className="list-index group">
    //       <ul className="list-items">
    //         {listItems}
    //         <li><button className="new-list-button">Add a list...</button></li>
  	// 			</ul>
  	// 		</div>
    //   );
    // }
  }

});

module.exports = ListIndex;
