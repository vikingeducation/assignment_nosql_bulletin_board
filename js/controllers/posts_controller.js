BulletinBoard.controller("PostsController", ['$scope', '_', 'PostsService', 'CommentsService', function($scope, _, PostsService, CommentsService){
	PostsService.all()
		.then(function(posts){ 
			$scope.posts = posts 
		})

	CommentsService.all()
		.then(function(comments){
			$scope.comments = comments
		})
}]);