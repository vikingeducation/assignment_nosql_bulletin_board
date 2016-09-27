app.factory('commentsService', ['$http', 'postsService', '_', function($http, postsService , _ ) {

  var stub = {};

  var _id;
  var _comments = [];

  stub.all = function() {
    return $http.get("data/comments.json")
    .then(function(response) {
      _comments = response.data;
      return _comments;
    })
  };

  stub.nextId = function() {
    if (!_id) {
      // base case no users
      if (_.isEmpty(_comments)) {
        return _id = 1;
      }
      // if users, grab an array of the Ids
      var ids = _.map(Object.keys(_comments), function(id) {
        return parseInt(id);
      });
      // highest count
      _id = _.max(ids);
      return _id + 1;
    } 
    return _id + 1;
  }


  // one - create the comment
  // two - append id to post
  stub.createComment = function(params) {
    //create a new comment object

    var comment = {}
    comment.author = params.author;
    comment.body = params.body;
    var postId = params.postId;
    comment.created_at = new Date().toISOString().slice(0, 10);
    comment.votes = 0;

    // get the next ID
    var nextId = stub.nextId();
    //set comments to next id
    comment.id = nextId;
    //append the comment onto the comments object as the next key
    _comments[nextId] = comment;

    _id += 1;

    // this is where we append id to post 
    postsService.addCommentTo(postId, comment.id);

    //returns a promise so it can be chained with then. and the COMMENT
    // can be accessed in the callback
    return new Promise(function(resolve) {resolve(comment)} );
  }


  return stub

}]);