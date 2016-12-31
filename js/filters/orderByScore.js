BulletinBoard.filter('orderByScore', function () {
  return function (commentIds, comments, rev) {
    var result = _.sortBy(commentIds, [function(commentId){
      if (rev === true)
        return -comments[commentId].score;
      else
        return comments[commentId].score;
    }]);
    return result;
  };
});