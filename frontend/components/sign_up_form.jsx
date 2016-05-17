var React = require('react');
var ApiUtil = require('../util/api_util.js');

var SignUpForm = React.createClass({

  contextTypes: { router: React.PropTypes.object.isRequired },

  getInitialState: function () {
    return {
      name: "",
      password: ""
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var router = this.context.router;
    ApiUtil.signUp(this.state, function () {
      router.push("/");
    });
  },

  updateName: function (e) {
    this.setState({ name: e.currentTarget.value });
  },

  updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value });
  },

  render: function () {

    return(
      <form className="sign-up-form group" onSubmit={this.handleSubmit}>
          <h1>Are you ready to let a cat organize your life?</h1>

          <label htmlFor="name">Name</label>
          <input onChange={this.updateName} type="text" value={this.state.name}/>

          <label htmlFor="password">Password</label>
          <input onChange={this.updatePassword} type="password" value={this.state.password}/>

        <button><i className="fa fa-paw" aria-hidden="true"></i>Sign Up<i className="fa fa-paw" aria-hidden="true"></i></button>
      </form>
    );
  }

});

module.exports = SignUpForm;
