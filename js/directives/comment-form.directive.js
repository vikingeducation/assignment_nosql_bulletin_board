bulletin.directive('commentForm',[
  "commentService", "postService",
  function(commentService, postService) {
    var linkFunc = function(s, e, a){
      s.submitComment = function submitComment(valid, newComment, form){
        if(valid){
          newComment.postId = s.post.id
          var cId = commentService.create(newComment);
          if(cId !== false){
            postService.insertComment(s.post.id, cId);
          }
        }
      }
    }

    return {
      templateUrl: 'js/directives/comment-form.directive.html',
      scope: {
        post: "="
      },
      restrict: 'E',
      link: linkFunc
    };
  }
]);
