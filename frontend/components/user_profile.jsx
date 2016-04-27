var React = require('react');
var UserStore = require('../store/user_store.js');
var ApiUtil = require('../util/api_util.js');

var UserProfile = React.createClass({

  getInitialState: function () {
    return { user: UserStore.all() };
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this._onChange);
    ApiUtil.fetchSingleUser(this.props.params.user_id);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ user: UserStore.all() });
  },

  render: function () {

    var boards = this.state.user.boards ? this.state.user.boards.length : "";

    var dateEls = this.state.user.created_at ? this.state.user.created_at.slice(0, this.state.user.created_at.indexOf("T")).split("-") : "";
    var month = function(dateEls) {
      if(dateEls) {
        if (dateEls[1][0] == "0") {
          return dateEls[1].slice(1);
        }
        else { return dateEls[1] };
      }
      else { return ""};
    };

    var date = month(dateEls) + "/" + dateEls[2] + "/" + dateEls[0];

    // else {
      return (
            <section className="user-profile group">
              <section className="user-pic"></section>
              <ul>
                <li><h1>{this.state.user.user_name}</h1></li>
                <li><h2>CatTrello User since {date}</h2></li>
                <li><h2>Boards: {boards}</h2></li>
              </ul>
            </section>
          );
    }



});

module.exports = UserProfile;
