bulletin.factory('dateFormatService', [
  function() {
    var convertDate = function(obj){
      for (index in obj) {
        obj[index].created_at = Date.parse(obj[index].created_at);
      }
    };

    return {
      parse: convertDate
    };
  }
]);
