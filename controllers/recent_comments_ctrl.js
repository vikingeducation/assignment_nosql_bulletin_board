bb.controller('RecentCommentsCtrl', [
    '$scope',
    'CommentService',
    'PostService',
    function($scope, CommentService, PostService) {

        CommentService.list().then(function(comments) {
            $scope.comments = comments;
        });

    }
]);
