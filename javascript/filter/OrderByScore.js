BulletinBoard.filter('OrderByScore', function () {
	return function (commentIds, comments, order) {
		var result = _.sortBy(commentIds, [function (commentId) {
			return comments[commentId].score;
		}]);
		if (order === true) {
			return _.reverse(result);
		} else {
			return result;
		};
	};
});
