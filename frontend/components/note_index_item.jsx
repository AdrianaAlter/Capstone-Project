var React = require('react');

var NoteIndexItem = React.createClass({

  deleteNote: function () {
    var boardId = this.props.note.board_id;
    var id = this.props.note.id;
    ApiUtil.deleteNote(id, boardId);
  },

  render: function () {
    var dnb = <button onClick={this.deleteNote}><i className="fa fa-trash" aria-hidden="true"></i></button>;

    return(
      <li className="note-index-item">
        <section>
          <h1>{this.props.note.content}</h1>
          <h2>by {this.props.note.noter.user_name}</h2>
        </section>
        {dnb}
      </li>
    );
  }
});

module.exports = NoteIndexItem;
