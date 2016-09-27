BulletinBoard.factory('CommentsService', 
  ['_', '$http',
  function( _, $http ) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _comments, _id;

    var _extendComments = function( comments ){

      // Exted all comments in the list
      _.each(comments, function(comment){
        _extendComment(comment);
      });

    };

    var _extendComment = function( comment ){
      comment.increaseLikes = function(){
        this.likes += 1;
      };

      comment.decreaseLikes = function(){
        this.likes -= 1;
      };
    };

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
          // if there's no comments yet
          // Is this happening because it's pointing to a reference object instead of a scalar value?
          // At this point this is all I need but in the future I'll have to look at this further.
          // Well how about I change it up so that it doesn't even make the http call unless there's no data already.
          _comments = _comments || response.data;

          _extendComments( _comments );

          return _comments;
        });
    };

    CommentsService.create = function(params){
      // Create a new user object
      // from the params
      var comment = angular.copy(params, {});

      // Get the next ID in the sequence
      var nextId = CommentsService.nextId();

      // Set the comment's ID
      comment.id = nextId;

      // Set the comment's likes
      comment.likes = 0;

      // Set the comment's date
      comment.date = new Date;

      // Add the comment to the comments list
      // at the key of the comment's ID
      _comments[nextId] = comment;

      // Extending this comment
      _extendComment(comment);

      // Gotta add this id to the 

      // Return a promise so this method
      // can be chained with .then()
      // and the user can be accessed
      // in the callback
      return new Promise(function(resolve) {resolve(comment)});
    };

    CommentsService.nextId = function(){


      // This is kicking up an error for me..
      if (!_id) {

        // If there are no users
        if (_.isEmpty(_comments)) {
          // Initialize the counter to 1
          return _id = 1;
        }

        // If we have comments map the IDs to an array
        var ids = _.map(Object.keys(_comments), function(id){
          return parseInt(id);
        });

        // Find the max ID
        _id = _.max(ids);

        // Return the next ID
        return _id += 1;
      }

      // If we have a counter
      // return the next ID
      return _id += 1;
    };

    return CommentsService;

  }]);