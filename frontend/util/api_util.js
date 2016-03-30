var BoardActions = require('../actions/board_actions.js');


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

  }

};

module.exports = ApiUtil;
