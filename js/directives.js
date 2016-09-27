"use strict";
app.directive("commentBox", function(){
	return{
		templateUrl: "commentBox.html",
		restrict: "E",
		scope: {
			comment: "=",
			downvote: "&",
			upvote: "&",
			create: "&",
			nestedParams: "=",
		},
		link: function(scope, el, attributes){
			scope.nestedParams[scope.comment.id] = {};
			scope.params = scope.nestedParams[scope.comment.id];

			scope.showForm = false;

			scope.changeShow = function(){
				scope.showForm = !scope.showForm;
				scope.params = {};
			};

			var commentCreate = scope.create;
			scope.create = function(obj){
				commentCreate(obj);
				scope.params = {};
				scope.showForm = !scope.showForm;
			};


		}
	};
});
