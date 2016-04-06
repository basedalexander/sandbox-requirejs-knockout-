define(['list-manager', 'ko', 'ui-strings'], function (listManager, ko, uiStrings) {
  'use strict';

  function ListViewModel () {
    this.placeholderText = uiStrings.createTaskPlaceholderText;
    this.addTask = uiStrings.addTask;
    this.saveList = uiStrings.saveList;

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
  }

  return ListViewModel;
});