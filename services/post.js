bb.factory("PostService", ['CommentService', '$http', function(CommentService, $http){

  obj = {};

  var _posts;


  obj.list = function() {
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    })
    .then(function(response){
      console.log("reaching the then of posts")
      _posts = response.data;
      return _posts;
    })
  }




  return obj;
}]);
