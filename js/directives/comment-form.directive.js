bulletin.directive('commentForm',[
  "commentService", "postService",
  function(commentService, postService) {
    var linkFunc = function(s, e, a){
      s.submitComment = function submitComment(valid, newComment, form){
        if(valid){
          newComment.parent = s.parent.id;
          var cId = commentService.create(newComment);
          if(cId !== false){
            postService.insertComment(s.parent.id, cId);
            clearForm(newComment, form);
          }
        }
      };

    };

    var clearForm = function(newComment, form) {
      newComment.body = null;
      newComment.author = null;

      form.$setPristine();
      form.$setUntouched();
    };

    return {
      templateUrl: 'js/directives/comment-form.directive.html',
      scope: {
        parent: "="
      },
      restrict: 'E',
      link: linkFunc
    };
  }
]);
