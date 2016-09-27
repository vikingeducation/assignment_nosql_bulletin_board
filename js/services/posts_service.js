BulletinBoard.factory('PostsService', 
  ['_', '$http',
  function( _, $http ) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _posts;

    // ----------------------------------------
    // Public
    // ----------------------------------------

    var PostsService = {};

    PostsService.all = function() {

      // Get the list of birthdays
      return $http({
        url: '../../data/posts.json',
        method: 'GET'
      })
        .then(function(response) {
          // Set _birthdays to the response data
          return _posts = response.data;
        });
    };

    PostsService.addCommentIdToPost = function(postId, commentId){
      _posts[postId].commentsIds.push( commentId );
    };

    return PostsService;

  }]);