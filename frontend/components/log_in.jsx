var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var Footer = require('./footer.jsx');
var SignUpButton = require('./sign_up_button.jsx');

var LogInForm = React.createClass({
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
    ApiUtil.logIn(this.state, function () {
      router.push("/");
    });
  },

  guestLogIn: function () {
    var guestInfo = {name: "Sennacy the Great", password: "sennacy"};
    var router = this.context.router;
    ApiUtil.logIn (guestInfo, function () {
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

        <section className="info-page group">
          <h1>CatTrello</h1>
          <h2>CatTrello is a gratuitously cat-themed web app for organizing projects and tasks!</h2>
          <p>Because cats are widely known for their organizational skills.  Obviously.</p>
          <button className="guest-log-in" onClick={this.guestLogIn}><i className="fa fa-paw" aria-hidden="true"></i>Log in as a guest<i className="fa fa-paw" aria-hidden="true"></i></button>

        </section>
        <section className="cat-logo group">
          <div className="cat-pic"></div>
          <p>Here, have a random picture of a cat.<SignUpButton /></p>

        </section>
        <section className="log-in-page group">
            <form className="log-in-form group" onSubmit={this.handleSubmit}>
                <h1>Welcome back to CatTrello!</h1>

                <label htmlFor="name">Name</label>
                <input onChange={this.updateName} type="text" value={this.state.name}/>

                <label htmlFor="password">Password</label>
                <input onChange={this.updatePassword} type="password" value={this.state.password}/>

              <button><i className="fa fa-paw" aria-hidden="true"></i>Log In<i className="fa fa-paw" aria-hidden="true"></i></button>
              <button><a href="/auth/facebook"><i className="fa fa-paw" aria-hidden="true"></i>Log in with Facebook<i className="fa fa-paw" aria-hidden="true"></i></a></button>
            </form>


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
