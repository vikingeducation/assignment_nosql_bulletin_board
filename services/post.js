bb.factory("PostService", ['CommentService', function(CommentService){

  obj = {};

  var _posts;

  obj.getComments = function(post) {
    
  }

  obj.list = function() {
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    })
    .then(function(response){
      _posts = response.data;
      return _posts;
    })
  }




  return obj;
}]);
