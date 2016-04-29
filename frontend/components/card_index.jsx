var React = require('react');
var CardStore = require('../store/card_store.js');

var CardActions = require('../actions/card_actions.js');
var CardIndexItem = require('./card_index_item.jsx');
var ApiUtil = require('../util/api_util.js');

var CardIndex = React.createClass({

  // getInitialState: function () {
  //   return { cards: this.getStateFromStore() };
  // },
  //
  // getStateFromStore: function () {
  //   return CardStore.all();
  // },
  //
  //
  // setNewState: function () {
  //     this.setState( { cards: this.getStateFromStore() });
  // },
  //
  // componentDidMount: function () {
  //   this.listener = CardStore.addListener(this.setNewState);
  //
  // },
  //
  // componentWillUnmount: function () {
  //   this.listener.remove();
  // },

  render: function () {
    if (!this.props.cards) {
      return (
        <div></div>
      );
    }


    var boardId = this.props.boardId;
    var current = this.props.current;

    var cardIndexItems = this.props.cards.map(function (card) {
      return <CardIndexItem key={card.id} card={card} listId={card.list_id} boardId={boardId} current={current} />;
    });

    return (
      <ul className="card-index group">
          {cardIndexItems}
			</ul>
	  );
  }


});

module.exports = CardIndex;
