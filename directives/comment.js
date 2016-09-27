bb.directive('commentDiv', [function(){

  return {
    template: '<div ng-if="comment.comments.length > 0"><div comment-div ng-repeat="commentID in comment.comments" comment="comments[commentID]" comments="comments"></div></div>',

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
