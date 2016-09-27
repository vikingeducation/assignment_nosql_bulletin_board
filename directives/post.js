bb.directive('postDiv', [function(){

  return {
    templateUrl: "/directives/postTemplate.html",
    restrict: "E",
    scope: {
      post: "=",
      commentParams: "=",
      createComment: "&",
      comments: "="
    }


  };


}]);