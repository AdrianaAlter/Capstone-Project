var NoteConstants = require('../constants/note_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var NoteActions = {

  receiveAllNotes: function (notes) {
    Dispatcher.dispatch({
      actionType: NoteConstants.ALL_NOTES_RECEIVED,
      notes: notes
    });
  },

  receiveSingleNote: function (note) {
    Dispatcher.dispatch({
      actionType: NoteConstants.SINGLE_NOTE_RECEIVED,
      note: note
    });
  },

};

module.exports = NoteActions;
