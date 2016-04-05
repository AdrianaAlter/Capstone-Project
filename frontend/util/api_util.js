var BoardActions = require('../actions/board_actions.js');
var SessionActions = require('../actions/session_actions.js');
var SearchResultActions = require('../actions/search_result_actions.js');
var ListActions = require('../actions/list_actions.js');

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

	fetchAllLists: function (board) {
		$.ajax({
			url: "api/boards/" + board + "/lists",
			type: "GET",
			dataType: "json",
    	success: function (lists) {
        ListActions.receiveAllLists(lists);
			},
			error: function () {
				console.log('Error in ApiUtil fetch all lists function');
			}

		});

	},

	fetchAllCards: function (boardId, listId) {
		$.ajax({
			url: "api/boards/" + boardId + "/lists/" + listId,
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
          ListActions.receiveSingleList(list);
          callback && callback(list.id);
        },
        error: function () {
          console.log("Error in ApiUtil createNewList function");
        }
      });
  },

  createNewCard: function (card, boardId, listId, callback) {

      $.ajax({
        url: "api/boards/" + boardId + "/lists/" + listId,
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
        window.location.href= "/";
      },
      error: function () {
        console.log("Error in ApiUtil deleteBoard function");
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
        console.log('Error in ApiUtil log in');
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
