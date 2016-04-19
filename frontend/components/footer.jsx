var React = require('react');

var Footer = React.createClass({

getInitialState: function () {
  return {
    display: ""
  };
},

aboutToggle: function () {
  if (this.state.display === "") {
    this.setState({ display: "aboutMessage" });
  }
  else { this.setState({ display: "" }); }
},
tourToggle: function () {
  if (this.state.display === "") {
    this.setState({ display: "tourMessage" });
  }
  else { this.setState({ display: "" }); }
},

legalToggle: function () {
  if (this.state.display === "") {
    this.setState({ display: "legalMessage" });
  }
  else { this.setState({ display: "" }); }
},

pricingToggle: function () {
  if (this.state.display === "") {
    this.setState({ display: "pricingMessage" });
  }
  else { this.setState({ display: "" }); }
},

helpToggle: function () {
  if (this.state.display === "") {
    this.setState({ display: "helpMessage" });
  }
  else { this.setState({ display: "" }); }
},

copyrightToggle: function () {
  if (this.state.display === "") {
    this.setState({ display: "copyrightMessage" });
  }
  else { this.setState({ display: "" }); }
},

render: function () {

  var aboutText = this.state.display === "aboutMessage" ? "It's about cats.  (You seriously didn't figure that out on your own?)" : "About";
  var about = <li onClick={this.aboutToggle}>{aboutText}</li>

  var legalText = this.state.display === "legalMessage" ? "If you're looking for legitimate legal information, a good first step is probably to go to a website that isn't cat-themed." : "Legal";
  var legal = <li onClick={this.legalToggle}>{legalText}</li>

  var pricingText = this.state.display === "pricingMessage" ? "We accept personal checks, catnip, and wind-up mice." : "Pricing";
  var pricing = <li onClick={this.pricingToggle}>{pricingText}</li>

  var tourText = this.state.display === "tourMessage" ? "Because cats are also known for their navigational skills." : "Tour";
  var tour = <li onClick={this.tourToggle}>{tourText}</li>

  var helpText = this.state.display === "helpMessage" ? "Unfortunately, cats do not have a reputation for altruism." : "Help";
  var help = <li onClick={this.helpToggle}>{helpText}</li>

  var developers = <li><a href="https://forums.unrealengine.com/attachment.php?attachmentid=84780&d=1458610974">Developers</a></li>
  var blog = <li><a href="http://boringem.org/wp-content/uploads/2013/09/funny-pictures-cat-has-writers-bloc.jpg">Blog</a></li>

  var copyrightText = this.state.display === "copyrightMessage" ? "(Spoiler: not a real company.)" : "© Copyright 2016 Gratuitously Cat-Themed Web Apps, Inc.";
  var copyright = <li onClick={this.copyrightToggle}>{copyrightText}</li>

    return (

    <footer group>

      <ul>
        {tour}
        {pricing}
        {blog}
        {developers}
        {about}
        {help}
        {legal}
        {copyright}
      </ul>

    </footer>

  );}

});


module.exports = Footer;
