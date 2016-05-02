var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var NoteConstants = require('../constants/note_constants.js');

var NoteStore = new Store(Dispatcher);
var _notes = [];

NoteStore.all = function () {
  return _notes;
};

NoteStore.resetNotes = function (notes) {
  _notes = notes;
};

NoteStore.resetNote = function (note) {
  var i = NoteStore.findOutIndex(note);
  if (_notes[i]) {
    _notes[i] = note;
  }
  else {
    _notes.push(note);
  }
};

NoteStore.findOutIndex = function (note) {
  for (var i = 0; i < _notes.length; i++) {
    if (_notes[i].id == note.id) { return i; }
  }
};


NoteStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case NoteConstants.ALL_NOTES_RECEIVED:
      NoteStore.resetNotes(payload.notes);
      NoteStore.__emitChange();
      break;
    case NoteConstants.SINGLE_NOTE_RECEIVED:
      NoteStore.resetNote(payload.note);
      NoteStore.__emitChange();
      break;
    }
};

module.exports = NoteStore;
