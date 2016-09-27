BulletinBoard.controller("RecentCommentsController", ['$scope', '_', 'CommentsService', function($scope, _, CommentsService){

	CommentsService.all()
		.then(function(comments){
			$scope.comments = comments

			$scope.commentsInArray = function(){
				var p = [];
				_.each( comments, function(comment){ 
					p.push( comment );
				});
				return p;
			};
		});

	$scope.formatDate = function(date){
		return moment(date).format('MMMM Do YYYY');
	};

}]);