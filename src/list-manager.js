define(['list', 'storage', 'exports'], function (List, storage, exports) {
  'use strict';

  function createList (listId) {
    return new List(listId)
  }

  function saveList (list) {
    storage.save(list);
  }

  exports.createList = createList;
  exports.saveList = saveList;

});