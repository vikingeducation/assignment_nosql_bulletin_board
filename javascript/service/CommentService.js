BulletinBoard.factory('CommentService', ['$http', 'PostService', function ($http, PostService) {
	var CommentService = {};

	var _comments;

	var _extendComment = function (comment) {
		comment.upvote = function () {
			comment.score += 1;
		};
		comment.downvote = function () {
			comment.score -= 1;
		};
	};

	var _extendComments = function (comments) {
		_.each(comments, function (comment) {
			_extendComment(comment);
		});
	};

	CommentService.all = function () {
		return $http({
			method: "get",
			url: "/data/comments.json"
		}).then(
			function success(response) {
				_comments = response.data;
				_extendComments(_comments)
				return _comments;
			}
		);
	};

	CommentService.create = function (params, post) {
		var comment = angular.copy(params, {});
		var nextId = CommentService.nextId();

		comment.id = nextId;
		comment.comment_date = new Date();
		comment.score = 0;

		PostService.appendToPost(comment.id, post);
		_comments[nextId] = comment;
		_extendComment(comment);

		return new Promise(function (resolve) {
			resolve(comment);
		});
	};

	CommentService.nextId = function () {
		var ids = Object.keys(_comments);
		if (ids) {
			return Number(_.max(ids)) + 1;
		} else {
			return 1;
		};
	};

	return CommentService;
}]);
