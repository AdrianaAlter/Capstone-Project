var React = require('react');
var ListDetail = require('./list_detail.jsx');
// var ListStore = require('../store/list_store.js');
var BoardStore = require('../store/board_store.js');

var ListIndexItem = React.createClass({
  // getInitialState: function () {
  //   return { list: this.getStateFromStore() };
  // },
  // //
  // getStateFromStore: function () {
  //   return BoardStore.findListInBoard(this.props.list.id, this.props.boardId);
  // },
  // //
  // // setNewState: function () {
  // //     this.setState( { list: this.getStateFromStore() });
  // // },
  // //
  // // componentDidMount: function () {
  // //   this.listener = ListStore.addListener(this.setNewState);
  // //   ApiUtil.fetchSingleList(this.props.boardId, this.props.list.id);
  // //
  // // },
  // //
  // // componentWillUnmount: function () {
  // //   this.listener.remove();
  // // },

  render: function () {


    return(

        <section className="list-index-item">
          <h1>{this.props.list.title}</h1>
          <ListDetail boardId={this.props.list.board_id} listId={this.props.list.id}/>
        </section>

    );

  }
});

module.exports = ListIndexItem;
