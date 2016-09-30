app.factory("commentService", ['$http', '_', function($http, _, postService){

  var service = {};

  var _comments = {};

  var _id;

  service.all = function(){
    return $http({
      method: "GET", 
      url: "/data/comments.json"
    }).then(function success(response){
      console.log("getting all comments successful");

      
      angular.copy(response.data, _comments);

      _extendComments(_comments);
      return _comments;
    });
  };


  var nextId = function(){
    if(!_id){
      //set id to 1 and return id if comments empty
      if(_.isEmpty(_comments)){
        _id += 1;
        return _id;
      }

      var ids = _.map(Object.keys(_comments), function(id){
        return parseInt(id);
      });

      _id = _.max(ids);

      return _id + 1;
      

    } else {
      return _id + 1;
    };

  }


  service.createComment = function(comment){
  //passed in comment object has body and author and postId
    comment.id = nextId();

    _id += 1;

    comment.date = new Date().toISOString().slice(0, 10);

    comment.score = 0;

    _comments[_id] = comment;

    return _id;
    
  };


  var _extendComment = function(comment){
    comment.upVote = function(){
      comment.score += 1;
    };

    comment.downVote = function(){
      comment.score -= 1;
    };

  };


  var _extendComments = function(comments){
    _.each(comments, function(comment){
      _extendComment(comment);
    });
  };


  return service;
}])