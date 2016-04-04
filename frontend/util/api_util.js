var BoardActions = require('../actions/board_actions.js');
var SessionActions = require('../actions/session_actions.js');
var SearchResultActions = require('./../actions/search_result_actions');

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

	fetchAllLists: function (board_id) {
		$.ajax({
			url: "api/" + board_id + "/lists",
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

  createNewBoard: function (data) {

		$.ajax({
			url: "api/boards",
			type: "POST",
			data: { board: data },
			success: function (board) {
				BoardActions.receiveSingleBoard(board);
			},
			error: function () {
				console.log("Error in ApiUtil createNewBoard function");
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
