var React = require('react');
var UserStore = require('../store/user_store.js');
var SessionStore = require('../store/session_store.js');
var ApiUtil = require('../util/api_util.js');
var Link = require('react-router').Link;

var UserProfile = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return { user: UserStore.all(), current: SessionStore.currentUser() };
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this._onChange);
    ApiUtil.fetchSingleUser(this.props.params.user_id);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function (nextProps) {
    ApiUtil.fetchSingleUser(nextProps.params.user_id);

  },

  _onChange: function () {
    this.setState({ user: UserStore.all() });
  },

  goToBoard: function (id) {
    this.hideResults();
    this.context.router.push("/boards/" + id);
  },

  render: function () {

    if (!this.state.user) { return(<div></div>);};



    var boards = this.state.user.boards ? this.state.user.boards : [];

    if (boards.length >= 1) {
    var boardLis = this.state.user.boards.map(function (board) {
      if (!board.private) { return <Link key={board.id} to={"/boards/" + board.id}>{board.title}</Link>; }
    });
  };


    var emailString = this.state.user.user_name ? this.state.user.user_name.toLowerCase().replace(".", "").split(" ").join(".") + "@catmail.com" : "";

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

    // var pic = (this.state.user && this.state.user.user_name == this.state.current.user_name) ? "user-pic" : "user-pic-two";

    var pics = {
      "Mr. Cat": "user-pic-two",
      "Ineffective Mouser": "mouser",
      "Unsubtle Impostor": "dog"
    };

    var pic = (this.state.user.user_name && pics[this.state.user.user_name]) ? pics[this.state.user.user_name] : "user-pic";

    return (
          <section className="user-profile group">
            <section className={pic}></section>
            <ul>
              <li><h1>{this.state.user.user_name}</h1></li>
              <li><h2>Email: {emailString}</h2></li>
              <li><h2>CatTrello User since {date}</h2></li>
              <li><h2>Boards: {boards.length}</h2></li>
              {boardLis}
            </ul>
          </section>
        );
    }



});

module.exports = UserProfile;
