define(['list', 'exports'], function (List, exports) {

  //console.log(this === exports);

  function createList (listId) {
    return new List(listId)
  }

  exports.createList = createList;

});