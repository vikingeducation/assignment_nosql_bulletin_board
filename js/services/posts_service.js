BulletinBoard.factory('PostsService', 
  ['_', '$http',
  function( _, $http ) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _posts;

    var _extendPosts = function( posts ){

      // Extend all posts in the list
      _.each(posts, function(user){
        _extendPost(user);
      });
    };

    var _extendPost = function( post ){
      post.addComment = function( commentId ){

        // Add the commentId to the post's commentsIds
        post.commentsIds.push(commentId);
      };
    };

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
          // Set the _posts object
          // to the response data
          _posts = response.data;

          // Extend the list of posts so that they can add a comment to themselves.
          _extendPosts(_posts);

          // return _posts
          return _posts;
        });
    };

    PostsService.addCommentIdToPost = function(postId, commentId){
      _posts[postId].commentsIds.push( commentId );
    };

    return PostsService;

  }]);