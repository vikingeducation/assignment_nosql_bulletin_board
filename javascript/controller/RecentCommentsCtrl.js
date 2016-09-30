BulletinBoard.controller('RecentCommentsCtrl', ['CommentService', '$scope', function (CommentService, $scope) {
	CommentService.all().then(
		function (comments) {
			$scope.comments = comments;
			console.log(comments);
			console.log(Object.keys(comments));
		}
	);
}])
