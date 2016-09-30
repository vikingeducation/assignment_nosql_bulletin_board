BulletinBoard.controller('PostCtrl', ['$scope', 'PostService', 'CommentService', function ($scope, PostService, CommentService) {
	$scope.commentParams = {};

	PostService.all().then(
		function (posts) {
			$scope.posts = posts;
		}
	);

	CommentService.all().then(
		function (comments) {
			$scope.comments = comments;
		}
	);

	$scope.createComment = function (post) {
		console.log(post);
		console.log($scope.commentParams);
		CommentService.create($scope.commentParams, post);
		$scope.commentParams = {};
	};

}]);
