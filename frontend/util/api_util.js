var BoardActions = require('../actions/board_actions.js');
var SessionActions = require('../actions/session_actions.js');

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
      url: "api/board" + id,
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

  // createNewBoard: function () {
  //
  //
  //
  // }

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

  fetchCurrentUser: function () {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      error: function () {
        console.log('Error fetching current user');
      },
      complete: function () {
        completion && completion();
      }
    });

  }

};

module.exports = ApiUtil;
