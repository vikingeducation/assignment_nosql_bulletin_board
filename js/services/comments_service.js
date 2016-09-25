BulletinBoard.factory('CommentsService', 
  ['_', '$http',
  function( _, $http ) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _comments;

    // ----------------------------------------
    // Public
    // ----------------------------------------

    var CommentsService = {};

    CommentsService.all = function() {

      // Get the list of birthdays
      return $http({
        url: '../../data/comments.json',
        method: 'GET'
      })
        .then(function(response) {
          // Set _birthdays to the response data
          return _comments = response.data;
        });
    };

    return CommentsService;

  }]);