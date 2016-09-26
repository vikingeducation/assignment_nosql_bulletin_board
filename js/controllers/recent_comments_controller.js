BulletinBoard.controller("RecentCommentsController", ['$scope', '$http', '_', 'CommentsService', function($scope, $http, _, CommentsService){
	CommentsService.all()
		.then(function(comments){ 
			$scope.comments = comments;

			$scope.commentsInArray = function(){
				p = [];
				_.each( comments, function(comment){ 
					p.push( comment );
				});
				return p;
			};
		});
}]);