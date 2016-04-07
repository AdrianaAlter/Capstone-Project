var React = require('react');
var ListDetail = require('./list_detail.jsx');
// var ListStore = require('../store/list_store.js');

var ListIndexItem = React.createClass({
  // getInitialState: function () {
  //   return { list: this.getStateFromStore() };
  // },
  //
  // getStateFromStore: function () {
  //   return ListStore.find(this.props.list.id);
  // },
  //
  // setNewState: function () {
  //     this.setState( { list: this.getStateFromStore() });
  // },
  //
  // componentDidMount: function () {
  //   this.listener = ListStore.addListener(this.setNewState);
  //   ApiUtil.fetchSingleList(this.props.boardId, this.props.list.id);
  //
  // },
  //
  // componentWillUnmount: function () {
  //   this.listener.remove();
  // },

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
