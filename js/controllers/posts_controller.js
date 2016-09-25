BulletinBoard.controller("PostsController", ['$scope', '_', 'PostsService', 'CommentsService', function($scope, _, PostsService, CommentsService){
	PostsService.all()
		.then(function(posts){ 
			$scope.posts = posts 
		})

	CommentsService.all()
		.then(function(comments){
			$scope.comments = comments

			$scope.postsComments = function( postId ){
				var commentsIds = $scope.posts[postId].commentsIds
				p = [];
				_.each( commentsIds, function(id){ 
					p.push( $scope.comments[id] );
					console.log($scope.comments[id])
				});
				return p;
			};
		})

}]);