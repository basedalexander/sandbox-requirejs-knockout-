define(function () {
  'use strict';

  function Task (name) {
    this.isCompleted = false;
    this.name = name;
  }

  Task.prototype = {};
  Task.prototype.constructor = Task;

  return Task;
});