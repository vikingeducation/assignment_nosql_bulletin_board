bulletin.directive('commentForm',[ "commentService", 
  function(commentService) {
    var linkFunc = function(s, e, a){
      s.submitComment = function(valid, newComment, form){
        if(valid){
          var comment = {
            body: newComment.body,
            author: newComment.author,
            created_at: Date(),
            upvotes: 0,
            post: s.post.id
            id: commentService.nextId()
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
