BulletinBoard.factory('CommentService', ['$http', 'PostService', function ($http, PostService) {
	var CommentService = {};


	CommentService.all = function () {
		return $http({
			method: "get",
			url: "/data/comments.json"
		}).then(
			function success(response) {
				return response.data;
			}
		);
	};

	return CommentService;
}]);
