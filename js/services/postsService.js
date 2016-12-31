BulletinBoard.factory('PostService', ['$http', function($http){
  var PostService = {};
  var _posts;
  PostService.all = function() {
    return $http({
             method: 'GET',
             url: '/data/posts.json'
           }).then(
             function success(response) {
               _posts = response.data;
               return _posts;
             }
           );
  };

  return PostService;
}]);