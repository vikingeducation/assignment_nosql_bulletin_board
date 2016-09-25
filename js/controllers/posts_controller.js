BulletinBoard.controller("PostsController", ['$scope', '_', 'PostsService', function($scope, _, PostsService){
	PostsService.all()
		.then(function(posts){ $scope.posts = posts })
}]);