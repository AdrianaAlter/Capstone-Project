var React = require('react');
var NoteStore = require('../store/note_store.js');
var NoteIndexItem = require('./note_index_item.jsx');
var ApiUtil = require('../util/api_util.js');

var NoteIndex = React.createClass({

  getInitialState: function () {
    return { notes: this.getStateFromStore(), notesDisplayed: false };
  },

  getStateFromStore: function () {
    return NoteStore.all();
  },

  setNewState: function () {
      this.setState( { notes: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listener = NoteStore.addListener(this.setNewState);
    ApiUtil.fetchAllNotes(this.props.boardId);
  },

  componentWillUnmount: function () {
    if (this.listener) {this.listener.remove();}
  },

  toggleDisplay: function () {
    this.state.notesDisplayed ? this.setState({ notesDisplayed: false }) : this.setState({ notesDisplayed: true });
  },

  render: function () {

    if (!this.state.notes || this.state.notes.length < 1) { return <div></div>};

    var noteItems = this.state.notes.map(function (note) {
      return <NoteIndexItem key={note.id} id={note.id} content={note.content} noter={note.noter.user_name} boardId={note.board_id} />;
    });

    var notesDisplayed = this.state.notesDisplayed ? "notes-list" : "hidden";

    return (
            <section className="note-index group">
              <h1 onClick={this.toggleDisplay}><i className="fa fa-bars" aria-hidden="true"></i>Notes ({noteItems.length})</h1>
                <ul className={notesDisplayed}>
                  {noteItems}
                </ul>
            </section>
          );
    }

});





module.exports = NoteIndex;
