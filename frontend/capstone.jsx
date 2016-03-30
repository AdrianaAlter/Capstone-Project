var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var BoardIndex = require('./components/board_index.jsx');
var App = require('./components/app.jsx');

var routes = (
  <Route path="/" component={App} />
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('content')
  );
});
