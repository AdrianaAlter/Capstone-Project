var BoardActions = require('../actions/board_actions.js');
var SessionActions = require('../actions/session_actions.js');
var SearchResultActions = require('../actions/search_result_actions.js');
var CardActions = require('../actions/card_actions.js');
var UserActions = require('../actions/user_actions.js');
var NoteActions = require('../actions/note_actions.js');
var NotificationActions = require('../actions/notification_actions.js');

ApiUtil = {


  fetchAllBoards: function () {

    $.ajax({
      url: "api/boards",
      type: "GET",
      dataType: "json",
      success: function (boards) {
        BoardActions.receiveAllBoards(boards);
      },
      error: function () {
        // console.log('Error in AJAX request to fetch all boards via ApiUtil');
      }
    });
  },

  fetchAllLists: function (board) {
    $.ajax({
      url: "api/boards/" + board + "/lists",
      type: "GET",
      dataType: "json",
      success: function (lists) {
        BoardActions.receiveAllLists(lists);
      },
      error: function () {
        // console.log('Error in ApiUtil fetch all lists function');
      }

    });

  },

  fetchAllCards: function (boardId) {

    $.ajax({
      url: "api/boards/" + boardId + "/cards",
      type: "GET",
      dataType: "json",
      success: function (cards) {
        CardActions.receiveAllCards(cards);
      },
      error: function () {
        // console.log('Error in ApiUtil fetch all cards function');
      }

    });

  },

  fetchAllNotes: function (boardId) {

    $.ajax({
      url: "api/boards/" + boardId + "/notes",
      type: "GET",
      dataType: "json",
      success: function (notes) {
        NoteActions.receiveAllNotes(notes);
      },
      error: function () {
        // console.log('Error in ApiUtil fetch all notes function');
      }

    });

  },

  fetchAllNotifications: function () {

    $.ajax({
      url: "api/notifications",
      type: "GET",
      dataType: "json",
      success: function (notifications) {
        NotificationActions.receiveAllNotifications(notifications);
      },
      error: function () {
        // console.log('Error in ApiUtil fetch all notifications function');
      }

    });

  },

  fetchSingleBoard: function (id) {


    $.ajax({
      url: "api/boards/" + id,
      type: "GET",
      dataType: "json",
      success: function (board) {
        BoardActions.receiveSingleBoard(board);
      },
      error: function () {
        alert("We can't find that board!  Maybe the cat ate it.");
        // console.log('Error in AJAX request to fetch single board via ApiUtil');
      }
    });

  },

  fetchSingleUser: function (id) {


    $.ajax({
      url: "api/users/" + id,
      type: "GET",
      dataType: "json",
      success: function (user) {
        UserActions.receiveSingleUser(user);
      },
      error: function () {
        // console.log('Error in AJAX request to fetch single user via ApiUtil');
      }
    });

  },


  fetchSingleList: function (board, id) {

    $.ajax({
      url: "api/boards/" + board + "/lists/" + id,
      type: "GET",
      dataType: "json",
      success: function (list) {

        BoardActions.receiveSingleList(list);
      },
      error: function () {
        // console.log('Error in AJAX request to fetch single list via ApiUtil');
      }
    });

  },


  createNewBoard: function (board, callback) {

		$.ajax({
			url: "api/boards",
			type: "POST",
			data: { board: board },
      success: function (board) {
        BoardActions.receiveSingleBoard(board);
        callback && callback(board.id);
			},
			error: function () {
        alert("Did you try to create a board with no title?  The cat is not amused.");
        // console.log("Error in ApiUtil createNewBoard function");
			}
		});
  },

  createNewList: function (list, boardId, callback) {

      $.ajax({
        url: "api/boards/" + boardId + "/lists",
        type: "POST",
        data: { list: list },
        success: function (list) {
          BoardActions.receiveSingleList(list);
          callback && callback(list.id);
        },
        error: function () {
          alert("Did you try to create a list with no title?  The cat is not amused.");
          // console.log("Error in ApiUtil createNewList function");
        }
      });
  },

  createNewCard: function (card, boardId, callback) {

      $.ajax({
        url: "api/boards/" + boardId + "/cards",
        type: "POST",
        data: { card: card },
        success: function (card) {
          CardActions.receiveSingleCard(card);
          callback && callback(card.id);
        },
        error: function () {
          alert("Did you try to create a card with no title?  The cat is not amused.");
          // console.log("Error in ApiUtil createNewCard function");
        }
      });
  },

  createNewNote: function (note, boardId, callback) {

      $.ajax({
        url: "api/boards/" + boardId + "/notes",
        type: "POST",
        data: { note: note },
        success: function (note) {
          NoteActions.receiveSingleNote(note);
          callback && callback(note.id);
          alert("Congratulations; the cat has deigned to send your note!");
        },
        error: function () {
          alert("Did you try to create a blank note?  The cat is not amused.");
          // console.log("Error in ApiUtil createNewNote function");
        }
      });
  },

  createNewNotification: function (notification, callback) {

      $.ajax({
        url: "api/notifications",
        type: "POST",
        data: { notification: notification },
        success: function (notification) {
          NotificationActions.receiveSingleNotification(notification);
          callback && callback(notification.id);
        },
        error: function () {
          console.log("Error in ApiUtil createNewNotification function");
        }
      });
  },

  deleteBoard: function (id) {

    $.ajax({
      url: "api/boards/" + id,
      type: "DELETE",
      success: function (boards) {
        BoardActions.receiveAllBoards(boards);
        alert("Success; the cat has shredded this board!");
        window.location.href= "/";
      },
      error: function () {
        // console.log("Error in ApiUtil delete board");
      }
    });
  },

  deleteList: function (boardId, id) {

    $.ajax({
      url: "api/boards/" + boardId + "/lists/" + id,
      type: "DELETE",
      success: function (board) {
          BoardActions.receiveSingleBoard(board);
      },
      error: function () {
        // console.log("Error in ApiUtil deleteList function");
      }
    });
  },

  deleteCard: function (boardId, id) {

    $.ajax({
      url: "api/boards/" + boardId + "/cards/" + id,
      type: "DELETE",
      success: function (list) {
          BoardActions.receiveSingleList(list);
          CardActions.receiveList(list);
      },
      error: function () {
        // console.log("Error in ApiUtil deleteCard function");
      }
    });
  },

  deleteNote: function (id, boardId) {

    $.ajax({
      url: "api/boards/" + boardId + "/notes/" + id,
      type: "DELETE",
      success: function (notes) {
        NoteActions.receiveAllNotes(notes);
      },
      error: function () {
        // console.log("Error in ApiUtil delete note function");
      }
    });
  },

  deleteNotification: function (id) {

    $.ajax({
      url: "api/notifications/" + id,
      type: "DELETE",
      success: function (notifications) {
        NotificationActions.receiveAllNotifications(notifications);
      },
      error: function () {
        // console.log("Error in ApiUtil delete notification function");
      }
    });
  },

  editBoard: function (board, id) {

    $.ajax({
      url: "api/boards/" + id,
      type: "PATCH",
      dataType: "json",
      data: { board: board },
      success: function (board) {
        BoardActions.receiveSingleBoard(board);
      },
      error: function () {
        alert("Did you try to get rid of this board's title?  The cat is not amused.");
        // console.log('Error in AJAX request to edit board via ApiUtil');
      }
    });

  },

  editList: function (list, boardId, id) {

    $.ajax({
      url: "api/boards/" + boardId + "/lists/" + id,
      type: "PATCH",
      dataType: "json",
      data: { list: list },
      success: function (list) {
        BoardActions.receiveSingleList(list);
      },
      error: function () {
        alert("Did you try to get rid of this list's title?  The cat is not amused.");
        // console.log('Error in AJAX request to edit list via ApiUtil');
      }
    });

  },

  editCard: function (card, boardId, id) {

    $.ajax({
      url: "api/boards/" + boardId + "/cards/" + id,
      type: "PATCH",
      dataType: "json",
      data: { card: card },
      success: function (card) {

        CardActions.receiveSingleCard(card);
      },
      error: function () {
        alert("Did you try to get rid of this card's title?  The cat is not amused.");
        // console.log('Error in AJAX request to edit card via ApiUtil');
      }
    });

  },

  logIn: function (userInfo, callback) {

    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: userInfo,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {
        alert("You are obviously a dangerous (albeit fairly inept) impostor.  Or maybe you typed your credentials wrong, but that seems less plausible.  Either way, the cat does not approve.");
      }
    });

  },

  logOut: function () {

    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function () {
          SessionActions.logOut();
          alert("The cat misses you already; don't forget to come back soon!");
      },
      error: function () {
        // console.log('Error in ApiUtil logout');
      }

    });
  },

  signUp: function (userInfo, callback) {
    $.ajax({
      type: "POST",
      url: "/api/users",
      dataType: "json",
      data: userInfo,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {
        // console.log('Error in ApiUtil sign up');
      }
    });
  },

  fetchCurrentUser: function (completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
			},
      error: function () {
				SessionActions.currentUserReceived(null);
        // console.log('Error fetching current user');
      },
      complete: function () {
        completion && completion();
      }
    });

  },

	search: function (query, page) {

		$.ajax({
			type: "GET",
			url: "/api/searches",
			dataType: "json",
			data: {query: query, page: page},
			success: function (response) {

        SearchResultActions.receiveResults(response);
			},
			error: function () {
				// console.log('Error in ApiUtil search function');
			}
		});

	}

};

module.exports = ApiUtil;
