var BoardActions = require('../actions/board_actions.js');
var SessionActions = require('../actions/session_actions.js');
var SearchResultActions = require('../actions/search_result_actions.js');
var CardActions = require('../actions/card_actions.js');

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
        console.log('Error in AJAX request to fetch all boards via ApiUtil');
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
        console.log('Error in ApiUtil fetch all lists function');
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
        console.log('Error in ApiUtil fetch all cards function');
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
        console.log('Error in AJAX request to fetch single board via ApiUtil');
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
        console.log('Error in AJAX request to fetch single list via ApiUtil');
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
        console.log("Error in ApiUtil createNewBoard function");
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
          console.log("Error in ApiUtil createNewList function");
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
          console.log("Error in ApiUtil createNewCard function");
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
        console.log("Error in ApiUtil delete board");
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
        console.log("Error in ApiUtil deleteList function");
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
        console.log("Error in ApiUtil deleteCard function");
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
        console.log('Error in AJAX request to edit board via ApiUtil');
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
        console.log('Error in AJAX request to edit list via ApiUtil');
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
        console.log('Error in AJAX request to edit card via ApiUtil');
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
      },
      error: function () {
        console.log('Error in ApiUtil logout');
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
        console.log('Error in ApiUtil sign up');
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
        console.log('Error fetching current user');
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
				console.log('Error in ApiUtil search function');
			}
		});

	}

};

module.exports = ApiUtil;
