BulletinBoard.factory("commentsService", ['$http', function($http) {
  var getAllComments = function() {
    return $http({
      url: "data/comments.json",
      method: "GET"
    })
  };


  // var newComment = function(comment) {
  //   var id = String(comment['id'])

  //   return $http({
  //     url: "data/comments.json",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: "POST",
  //     data: { 'please' :"work" }
  //     //JSON.stringify({ id : comment })
  //   }).success(function(){
  //     console.log("successfully made new comment!")
  //   })
  // };


  return {
    getAllComments: getAllComments,
  };
}]);