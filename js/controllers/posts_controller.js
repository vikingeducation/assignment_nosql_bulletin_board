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
				var p = [];
				_.each( commentsIds, function(id){ 
					p.push( $scope.comments[id] );
				});
				return p;
			};
		})

	$scope.createComment = function(postId){
		CommentsService.create( $scope.commentParams )
			.then(function( comment ){
				$scope.posts[postId].addComment(comment.id);
			})
	};

	$scope.formatDate = function(date){
		return moment(date).format('MMMM Do YYYY');
	};

}]);