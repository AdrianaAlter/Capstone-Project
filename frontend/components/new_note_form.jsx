var React = require('react');
var NoteActions = require('../actions/board_actions.js');
var SessionStore = require('../store/session_store.js');
var SweetAlert = require('sweetalert-react');

var NewNoteForm = React.createClass({

	getInitialState: function () {
		return({ content: "", formDisplayed: false });
	},


  createNewNote: function (e) {
      e.preventDefault();
			var note = {};
		  note.content = this.state.content;
		  ApiUtil.createNewNote(note, this.props.boardId);
		  this.setState({ content: ""});
			this.toggleDisplay();
  },

	updateNote: function (e) {
		var newContent = e.currentTarget.value;
		this.setState({ content: newContent });
	},

	toggleDisplay: function () {
    this.state.formDisplayed ? this.setState({ formDisplayed: false }) : this.setState({ formDisplayed: true });
  },

	render: function () {
		var current = SessionStore.currentUser();
		var formDisplayed = this.state.formDisplayed ? "form-content" : "hidden";

			return(
				<form className="new-note-form group">
					<h1 onClick={this.toggleDisplay}>Leave a note!<i className="fa fa-pencil" aria-hidden="true"></i></h1>
					<section className={formDisplayed}>
						<input className="content-field" type="text" value={this.state.content} onChange={this.updateNote}></input>
						<button onClick={this.createNewNote}>Submit</button>
					</section>
				 </form>
		);
	}

});


module.exports = NewNoteForm;
