var React = require('react');
var NoteStore = require('../store/note_store.js');
var NoteIndexItem = require('./note_index_item.jsx');
var ApiUtil = require('../util/api_util.js');

var NoteIndex = React.createClass({

  getInitialState: function () {
    return { notes: this.getStateFromStore() };
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

  render: function () {


    if (!this.state.notes) { return <div></div>};
    if (this.state.notes.length < 1) { return <h1>No notes</h1> };

    var noteItems = this.state.notes.map(function (note) {
      return <NoteIndexItem key={note.id} note={note} />;
    });

    return (
            <section className="note-index group">
              <h1>Notes ({noteItems.length})</h1>
                <ul>
                  {noteItems}
                </ul>
            </section>
          );
    }

});





module.exports = NoteIndex;
