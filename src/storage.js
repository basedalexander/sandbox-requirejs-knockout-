define(function () {
  'use strict';

  function save (list) {
    window.localStorage.setItem(list.id, JSON.stringify(list.tasks));
  }

  function load (listId) {
    return JSON.parse(window.localStorage.getItem(listId));
  }

  function getLists () {
    var x,
        lists = [],
        len = window.localStorage.length;

    for (x = 0; x < len; x += 1) {
      lists.push(localStorage.key(x))
    }

    return lists;
  }

  return {
    save: save,
    load: load,
    getLists: getLists
  };

});