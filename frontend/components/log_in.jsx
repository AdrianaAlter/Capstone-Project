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
      <div className="welcome-page group">
        <section className="log-in-page group">
            <form className="log-in-form group" onSubmit={this.handleSubmit}>
                <h1>Welcome to CatTrello!</h1>


                <label htmlFor="name">Name</label>
                <input onChange={this.updateName} type="text" value={this.state.name}/>

                <label htmlFor="password">Password</label>
                <input onChange={this.updatePassword} type="password" value={this.state.password}/>

              <button>Log In</button>
            </form>
             <a className="fb" href="/auth/facebook">Log in with Facebook</a>
        </section>
        <section className="info-page group">
          <h1>CatTrello</h1>
          <h2>CatTrello is a gratuitously cat-themed web app for organizing projects and tasks!</h2>
          <p>Because cats are widely known for their organizational skills.  Obviously.</p>
          <button>Sign up! (Meow.)</button>
        </section>
        <section className="cat-logo group">
          <div className="cat-pic"></div>
          <p>Here, have a random picture of a cat.</p>
        </section>

        <footer group>
          <ul>
            <li>Tour</li>
            <li>Pricing</li>
            <li>Jobs</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>About</li>
            <li>Help</li>
            <li>Legal</li>
            <li>© Copyright 2016 Gratuitously Cat-Themed Web Apps, Inc.</li>
          </ul>

        </footer>
    </div>
    );
  }

});

module.exports = LogInForm;
