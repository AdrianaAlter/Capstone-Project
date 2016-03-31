var React = require('react');
var ApiUtil = require('../util/api_util.js');

var LogInForm = React.createClass({
  contextTypes: { router: React.PropTypes.object.isRequired },

  getInitialState: function () {
    return{
      name: "",
      password: ""
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var router = this.context.router;
    ApiUtil.logIn(this.state, function () {
      router.push("/boards");
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
      <div className="log-in-page group">
        <h1>Log in to CatTrello!</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="log-in-form group">
              <label htmlFor="name">Name</label>
              <input onChange={this.updateName} type="text" value={this.state.name}/>

              <label htmlFor="password">Password</label>
              <input onChange={this.updatePassword} type="password" value={this.state.password}/>
            </div>
            <button>Log In</button>
          </form>
      </div>
    );
  }

});

module.exports = LogInForm;
