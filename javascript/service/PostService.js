BulletinBoard.factory('PostService', ['$http', function ($http) {
	var PostService = {};

	// private
	var _posts;

	// public

	PostService.all = function () {
		return $http({
			method: "get",
			url: "/data/posts.json"
		}).then(
			function success(response) {
				_posts = response.data;
				return _posts;
			}
		);
	};

	PostService.appendToPost = function (commentId, post) {
		post.commentIds.push(commentId);
	};

	return PostService;
}]);
