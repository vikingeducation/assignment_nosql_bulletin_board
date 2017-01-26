bulletin.filter('hasParent', [
  function(){
    return function(arr){
      for (i = 0; i < arr.length; i ++) {
        if(arr[i].parent === undefined){
          arr.splice(i, 1);
        }
      }
      return arr;
    };
  }
]);
