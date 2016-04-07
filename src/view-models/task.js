define(['ko'], function (ko) {
  'use strict';

  function TaskViewModel () {
    this.name = ko.observable('');
    this.isCompleted = ko.observable(false);

    this.deleteTask = function () {
      var task = document.querySelector('#' + this.id);
      task.parentNode.parentNode.removeChild(task.parentNode);
      this.emit('taskremoved');
    }.bind(this);

    this.completeTaskClass = ko.computed(function () {
      return (this.isCompleted() ? 'complete' : '');
    }, this);

    this.toggleTaskComplete = function () {
      this.isCompleted(!this.isCompleted());
      this.emit('taskcompleted');
      return true;
    }.bind(this);
  }

  return TaskViewModel;
});