BulletinBoard.controller("RecentCommentsController", ['$scope', '$http', '_', 'CommentsService', function($scope, $http, _, CommentsService){
	CommentsService.all()
		.then(function(comments){ 
			$scope.comments = comments;
		});
}]);