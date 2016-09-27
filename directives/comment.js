bb.directive('commentDiv', [function(){

  return {
    templateUrl: "/directives/commentTemplate.html",
    restrict: "AE",
    scope: {
      comment: "=",
      comments: "=",
      createComment: "&"
    },
    link: function(){
      console.log("hey I'm the comment directive!")
    }

    // "/directives/commentTemplate.html",

  };


}]);
