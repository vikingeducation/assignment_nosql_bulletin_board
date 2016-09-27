BulletinBoard.controller("PostsController", ['$scope', '_', 'PostsService', 'CommentsService', function($scope, _, PostsService, CommentsService){

	$scope.commentParams = {
		"author": "",
		"body": ""
	}

	PostsService.all()
		.then(function(posts){ 
			$scope.posts = posts;
		})

	CommentsService.all()
		.then(function(comments){
			$scope.comments = comments

			// Well it won't update because 
			$scope.postsComments = function( postId ){
				var commentsIds = $scope.posts[postId].commentsIds
				p = [];
				_.each( commentsIds, function(id){ 
					p.push( $scope.comments[id] );
				});
				return p;
			};
		})

	// When to add the new commentId in the current posts comments
	// I'm aware that the create function can return a promise
	// How did vcs handle it, I'm pretty sure they passed it on from the service itself to the other service instead of from the controller. That feels like coupling to me though
	// I feel like the controller should get that information and then send it out to the posts service.. hmmm
	$scope.createComment = function(postId){
		CommentsService.create( $scope.commentParams )
			.then(function( comment ){
				PostsService.addCommentIdToPost(postId, comment.id)
			})
	};

	$scope.formatDate = function(date){
		return moment(date).format('MMMM Do YYYY');
	};

}]);