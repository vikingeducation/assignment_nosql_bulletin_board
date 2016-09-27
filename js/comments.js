"use strict";
app.factory('CommentsSer', ['$http', '_', 'PostsSer', function($http, _, PostsSer){
	
	var _id;
	var _comments;

	var CommentsSer = {};

	CommentsSer.all = function(){
		return $http({
			url: '/js/data/comments.json',
			method: "GET"
		})
		.then(function(response){
			return _comments = response.data;
		});
	};

	CommentsSer.create = function(params){
		var comment = angular.copy(params, {});
		var nextId = CommentsSer.nextId();
		comment.id = nextId;
		comment.date = new Date();
		comment.voteCount = 0;
		_comments[nextId] = comment;
		_id += 1;
		PostsSer.addComment(comment.id);
		return new Promise(function(resolve){
			resolve(comment);
		});
	};

	CommentsSer.nextId = function(){
		if(!_id){
			if(_.isEmpty(_comments)){
				return _id = 1;
			}
			var ids = _.map(Object.keys(_comments), function(id){
				return parseInt(id);
			});
			_id = _.max(ids);
			return _id + 1;
		}

		return _id + 1;
	};

	CommentsSer.upvote = function(comment){
		_comments[comment.id].voteCount++;
	};

	CommentsSer.downvote = function(comment){
		_comments[comment.id].voteCount--;
	};

	return CommentsSer;

}]);