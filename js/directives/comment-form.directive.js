bulletin.directive('commentForm',[
  "commentService",
  function(commentService) {
    var linkFunc = function(s, e, a){
      s.show = s.permanent;
      s.submitComment = function submitComment(valid, newComment, form){
        if(valid){
          newComment.parentId = s.parent.id;
          var cId = commentService.create(newComment);
          if(cId !== false){
            commentService.insertComment(s.parent.id, cId);
            clearForm(newComment, form);
          }
        }
      };
      s.toggleCommentForm = function toggleCommentForm(){
        s.show = !s.show;
      }

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
        parent: "=",
        permanent: '@'
      },
      restrict: 'E',
      link: linkFunc
    };
  }
]);
