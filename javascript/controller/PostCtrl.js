BulletinBoard.controller('PostCtrl', ['$scope', 'PostService', 'CommentService', function ($scope, PostService, CommentService) {
	PostService.all().then(
		function (posts) {
			$scope.posts = posts;
			console.log(posts);
		}
	);

	CommentService.all().then(
		function (comments) {
			$scope.comments = comments;
		}
	);

}]);
