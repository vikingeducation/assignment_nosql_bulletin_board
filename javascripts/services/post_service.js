app.factory("postService", ['$http', '_', function($http, _){
  var service = {};

  var _posts = {};


  service.all = function(){
    return $http({
      method: "GET",
      url: '/data/posts.json'

    }).then(function success(response){
      console.log("success getting all posts");

      angular.copy(response.data, _posts);

      return _posts;
    })
  }



  return service;
}])