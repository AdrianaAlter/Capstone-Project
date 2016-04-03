var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var BoardIndex = require('./components/board_index.jsx');
var App = require('./components/app.jsx');
var LogInForm = require('./components/log_in.jsx');
var hashHistory = require('react-router').hashHistory;
var ApiUtil = require('./util/api_util.js');
var SessionStore = require('./store/session_store.js');
var NewBoardForm = require('./components/new_board_form.jsx');
var BoardDetail = require('./components/board_detail.jsx');
// var Search = require('./components/search.jsx');
// var Modal = require('react-modal');

var routes = (
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={_mustLogIn}>
      			// <Route path="board/:board_id" component={BoardDetail} />
			</Route>

      <Route path="/login" component={LogInForm}/>
    </Router>
);

// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(
//     routes,
//     document.getElementById('content')
//   );
// });
// Modal.setAppElement(BoardIndex);

document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById("content");

  ReactDOM.render(routes, container);
});

function _mustLogIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserFetched()) {
    ApiUtil.fetchCurrentUser(_redirectToLogIn);
  }
  else {
    _redirectToLogIn();
  }

  function _redirectToLogIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }
    asyncCompletionCallback();
  }
}
