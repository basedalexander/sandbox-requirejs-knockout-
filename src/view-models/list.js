define([
        'list-manager',
        'task-manager',
        'view-models/task',
        'text!views/task.html',
        'ko',
        'renderer',
        'i18n!nls/ui-strings',
        'smokesignals'
], function (listManager, taskManager, TaskViewModel,
  taskView, ko, renderer, uiStrings, smokesignals) {
  'use strict';

  function ListViewModel () {
    this.placeholderText = uiStrings.createTaskPlaceholderText;
    this.addTaskText = uiStrings.addTask;
    this.saveListText = uiStrings.saveList;

    this.listName = ko.observable('');
    this.taskName = ko.observable('');
    this.enableAdd = ko.observable(false);

    this.isButtonEnabled = ko.computed(function () {
      if (this.taskName() !== '') {
        this.enableAdd(true);
      } else {
        this.enableAdd(false);
      }
    }, this);

    this.addTask = function () {
      var task = taskManager.createTask(this.taskName()),
          container = document.querySelector('.todo_app ul'),
          taskViewModel = new TaskViewModel();

      this.list.tasks.push(task);

      taskViewModel.id = 'task-' + (this.list.tasks.length - 1);
      taskViewModel.name(task.name);
      taskViewModel.isCompleted(false);

      this.taskName('');

      renderer.render(container, taskView, taskViewModel, true);

      smokesignals.convert(taskViewModel);
      taskViewModel.on('taskremoved', this.removeTask);

      return taskViewModel;
    }.bind(this);

    this.removeTask = function (index) {
      this.list.tasks.splice(index, 1);
    }.bind(this);

  }

  return ListViewModel;
});