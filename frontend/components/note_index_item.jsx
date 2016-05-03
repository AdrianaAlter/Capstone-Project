var React = require('react');
var Link = require('react-router').Link;
var NoteIndexItem = React.createClass({

  deleteNote: function () {
    var boardId = this.props.boardId;
    var id = this.props.id;
    ApiUtil.deleteNote(id, boardId);
  },

  render: function () {
    var dnb = <button onClick={this.deleteNote}><i className="fa fa-trash" aria-hidden="true"></i></button>;

    var dateEls = this.props.date.slice(0, this.props.date.indexOf("T")).split("-");
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

    return(
      <li className="note-index-item">
        <section>
          <h1>{this.props.content}</h1>
          <h2>by <Link to={"/users/" + this.props.noterId} className="noter-name">{this.props.noter}</Link></h2>
          <h2>{date}</h2>
        </section>
        {dnb}
      </li>
    );
  }
});

module.exports = NoteIndexItem;
