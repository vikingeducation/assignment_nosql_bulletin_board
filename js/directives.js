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
			params: "="
		}
	};
});