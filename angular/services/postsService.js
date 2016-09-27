BulletinBoard.factory("postsService", ["$http", function($http){

  var getPost = function() {
    return $http({
      url: "data/posts.json",
      method: "GET",
    })
  }


  return {
    getPost: getPost
  }
}])